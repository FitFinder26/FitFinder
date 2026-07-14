import os
import io
import hashlib
import time
from urllib.parse import urlparse
from typing import Optional
import requests
from PIL import Image


class CloudinaryService:
    """Cloudinary uploader using signed uploads.

    Supports either:
      - CLOUDINARY_URL=cloudinary://<api_key>:<api_secret>@<cloud_name>
      - or CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY, CLOUDINARY_API_SECRET

    This keeps the implementation lightweight and avoids requiring the
    `cloudinary` package. It uploads PNG bytes and returns the
    `secure_url` from Cloudinary on success.
    """

    def __init__(
        self,
        cloud_name: Optional[str] = None,
        api_key: Optional[str] = None,
        api_secret: Optional[str] = None,
    ):
        env_cloudinary_url = os.getenv("CLOUDINARY_URL")
        parsed_url = urlparse(env_cloudinary_url) if env_cloudinary_url else None

        self.cloud_name = (
            cloud_name
            or os.getenv("CLOUDINARY_CLOUD_NAME")
            or (parsed_url.hostname if parsed_url else None)
        )
        self.api_key = (
            api_key
            or os.getenv("CLOUDINARY_API_KEY")
            or (parsed_url.username if parsed_url else None)
        )
        self.api_secret = (
            api_secret
            or os.getenv("CLOUDINARY_API_SECRET")
            or (parsed_url.password if parsed_url else None)
        )

        if not self.cloud_name or not self.api_key or not self.api_secret:
            raise ValueError(
                "Cloudinary credentials must be set via CLOUDINARY_URL or CLOUDINARY_CLOUD_NAME/CLOUDINARY_API_KEY/CLOUDINARY_API_SECRET"
            )

        self.upload_url = f"https://api.cloudinary.com/v1_1/{self.cloud_name}/image/upload"

    def _build_signature(self, params: dict) -> str:
        filtered = {key: value for key, value in params.items() if value not in (None, "")}
        signature_base = "&".join(f"{key}={filtered[key]}" for key in sorted(filtered))
        signature_base = signature_base + self.api_secret
        return hashlib.sha1(signature_base.encode("utf-8")).hexdigest()

    def upload_image(self, image, public_id: Optional[str] = None, timeout: int = 30) -> str:
        """Upload a PIL `Image` or raw `bytes` to Cloudinary.

        Returns the secure URL (string) on success.
        """
        if isinstance(image, Image.Image):
            buf = io.BytesIO()
            image.save(buf, format="PNG")
            buf.seek(0)
            data = buf.read()
        elif isinstance(image, (bytes, bytearray)):
            data = bytes(image)
        else:
            raise TypeError("image must be a PIL.Image or bytes")

        files = {"file": ("image.png", data, "image/png")}
        timestamp = str(int(time.time()))
        payload = {
            "api_key": self.api_key,
            "timestamp": timestamp,
        }
        if public_id:
            payload["public_id"] = public_id

        payload["signature"] = self._build_signature({k: v for k, v in payload.items() if k != "api_key"})

        resp = requests.post(self.upload_url, data=payload, files=files, timeout=timeout)
        resp.raise_for_status()
        res_json = resp.json()
        secure_url = res_json.get("secure_url") or res_json.get("url")
        if not secure_url:
            raise RuntimeError(f"Cloudinary upload succeeded but returned no URL: {res_json}")
        return secure_url


__all__ = ["CloudinaryService"]
