package edu.alexu.fitfinder.service;

import com.cloudinary.Cloudinary;
import com.cloudinary.utils.ObjectUtils;
import edu.alexu.fitfinder.entity.UploadedImage;
import edu.alexu.fitfinder.entity.User;
import edu.alexu.fitfinder.exception.ImageNotFoundException;
import edu.alexu.fitfinder.exception.UserNotFoundException;
import edu.alexu.fitfinder.repository.ImageRepo;
import edu.alexu.fitfinder.repository.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ImageService {

  // FIX 1: Removed @Value. Spring now injects the Bean from CloudinaryConfig
  private final Cloudinary cloudinary;

  private final ImageRepo imageRepo;
  private final UserRepo userRepo;

  public String uploadImage(MultipartFile image, String imageName) throws IOException {
    var params = ObjectUtils.asMap(
            "public_id", imageName,
            "overwrite", true
    );
    var uploadResult = cloudinary.uploader().upload(image.getBytes(), params);
    return uploadResult.get("secure_url").toString();
  }

  @Transactional
  public UploadedImage saveImage(MultipartFile image, User user) throws IOException {
    UploadedImage img = new UploadedImage();
    img.setUser(user);

    // FIX 2: Use UUID for unique naming.
    // Using .size() causes overwrites if images are deleted later.
    String imageName = "user_" + user.getUserId() + "_" + UUID.randomUUID().toString();

    String url = this.uploadImage(image, imageName);

    img.setImageURL(url);
    img.setName(imageName);

    return imageRepo.save(img);
  }

  public void deleteImage(String publicId) throws IOException {
    cloudinary.uploader().destroy(publicId, ObjectUtils.emptyMap());
  }

  @Transactional
  public void deleteImageRow(Long imageId, Long userId) throws IOException {


    UploadedImage img = imageRepo.findById(imageId)
            .orElseThrow(() -> new ImageNotFoundException("Image not found"));

    if (!img.getUser().getUserId().equals(userId)) {
      throw new RuntimeException("Unauthorized: You do not own this Image");
    }

    this.deleteImage(img.getName());

    imageRepo.delete(img);
  }
}