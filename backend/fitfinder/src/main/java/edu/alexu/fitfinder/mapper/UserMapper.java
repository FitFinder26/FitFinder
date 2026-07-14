package edu.alexu.fitfinder.mapper;

import edu.alexu.fitfinder.dto.UserDTO;
import edu.alexu.fitfinder.entity.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper {

    public UserDTO toDTO(User user) {
        if (user == null) {
            return null;
        }

        UserDTO dto = new UserDTO();

        // Mapping fields
        dto.setId(user.getUserId()); // Note the name change: userId -> id
        dto.setUserName(user.getUserName());
        dto.setPassword("In Your Dreams 😛"); // Be careful sending passwords in DTOs!
        dto.setEmail(user.getEmail());
        dto.setProfileImageURL(user.getProfileImageURL());

        return dto;
    }

    public List<UserDTO> toDTOList(List<User> users) {
        return users.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}