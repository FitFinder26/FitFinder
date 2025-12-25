package edu.alexu.fitfinder.service;

import com.cloudinary.Cloudinary;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class ImageService {
  @Value("${cloudinary.url}")
  private Cloudinary cloudinary;

  public String uploadImage(String publicId) {
    
    return cloudinary.url().generate(publicId);
  }

  public void deleteImage(String publicId) throws IOException {
    cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
  }

  public String getImageUrl(String publicId) {
    return cloudinary.url().generate(publicId);
  }

  public String updateImage(String oldPublicId, String newPublicId) throws IOException {
    deleteImage(oldPublicId);
    return uploadImage(newPublicId);
  }

}
