package edu.alexu.fitfinder.mapper;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.dto.StoredItemWithVectorIdDTO;
import edu.alexu.fitfinder.repository.projection.StoredItemWithVectorId;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class StoredItemWithVectorIdMapper {

  public StoredItemWithVectorIdDTO toDto(StoredItemWithVectorId item) {
    return new StoredItemWithVectorIdDTO(
        item.getItemId(),
        item.getTitle(),
        item.getDescription(),
        item.getCategory(),
        item.getImageURL(),
        item.getItemWeburl(),
        item.getPrice(),
        item.getCurrency(),
        item.getVectorId());
  }

  public ItemDTO toItemDto(StoredItemWithVectorIdDTO item) {
    return new ItemDTO(
        item.getItemId(),
        item.getCategory(),
        item.getCurrency(),
        item.getDescription(),
        item.getImageURL(),
        item.getItemWebURL(),
        item.getPrice(),
        item.getTitle(),
        false);
  }

  public List<StoredItemWithVectorIdDTO> toDtoList(List<StoredItemWithVectorId> items) {
    return items.stream().map(this::toDto).toList();
  }
}
