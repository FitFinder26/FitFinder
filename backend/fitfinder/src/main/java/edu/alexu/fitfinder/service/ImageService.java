package edu.alexu.fitfinder.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import edu.alexu.fitfinder.entity.UploadedImage;
import edu.alexu.fitfinder.entity.User;
import edu.alexu.fitfinder.repository.ImageRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {
  @Value("${cloudinary.url}")
  private final Cloudinary cloudinary;
  private final ImageRepo imageRepo;

  public String uploadImage(MultipartFile image, String imageName) throws IOException {
    var params = ObjectUtils.asMap("public_id", imageName , "overwrite", true);
    var uploadResult = cloudinary.uploader().upload(image.getBytes(), params);
    return uploadResult.get("secure_url").toString();
  }

  public UploadedImage saveImage(MultipartFile image, User user) throws IOException {
    UploadedImage img = new UploadedImage();
    img.setUser(user);
    String imageName = user.getUserId()+"_"+(user.getImages().size()+1);
    String url = this.uploadImage(image, imageName);
    img.setImageURL(url);
    imageRepo.save(img);
    return img;
  }

  public void deleteImage(String publicId) throws IOException {
    cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
  }

  public void removeImage()



}
