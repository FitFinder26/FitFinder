package edu.alexu.fitfinder.mapper;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.entity.StoredItem;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class ItemMapper {

    public ItemDTO toDTO(StoredItem item) {
        if (item == null) return null;

        // Ensure these getters match your StoredItem Entity field names
        return new ItemDTO(
                item.getItemId(),
                item.getCategory(),
                item.getCurrency(),
                item.getDescription(),
                item.getImageURL(),
                item.getItemWebURL(),
                item.getPrice(),
                item.getTitle()
        );
    }

    // Helper to map a whole list at once
    public List<ItemDTO> toDTOList(List<StoredItem> items) {
        return items.stream()
                .map(this::toDTO)
                .collect(Collectors.toList());
    }
}