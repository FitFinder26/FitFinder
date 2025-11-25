from fastapi import APIRouter

router = APIRouter()

@router.get("/")
async def check_service_health():
    return {"status": "ok", "message": "Service is still alive LOL.", "service": "fitfinder-ai"}

