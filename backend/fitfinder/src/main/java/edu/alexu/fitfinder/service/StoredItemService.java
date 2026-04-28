package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.ItemDTO;
import edu.alexu.fitfinder.entity.StoredItem;
import edu.alexu.fitfinder.mapper.ItemMapper;
import edu.alexu.fitfinder.repository.FavoriteRepo;
import edu.alexu.fitfinder.repository.ItemRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.function.Function;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StoredItemService {

  private final ItemRepo itemRepo;
  private final FavoriteRepo favoriteRepo;
  private final ItemMapper itemMapper;

  public List<ItemDTO> getProductsByVectorIds(List<Long> vectorIds, Long userId) {
    if (vectorIds == null || vectorIds.isEmpty()) return Collections.emptyList();
    List<StoredItem> items = itemRepo.findItemsByVectorIds(vectorIds);
    return mapItemsToDTOs(items);
  }

  public List<ItemDTO> getProducts(List<Long> itemIds, Long userId) {
    if (itemIds == null || itemIds.isEmpty()) return Collections.emptyList();
    List<StoredItem> items = itemRepo.findAllById(itemIds);
    List<ItemDTO> dtos = mapItemsToDTOs(items, userId);
    return preserveOrder(dtos, itemIds);
  }

  public List<ItemDTO> getProducts(List<Long> itemIds) {
    if (itemIds == null || itemIds.isEmpty()) return Collections.emptyList();
    List<StoredItem> items = itemRepo.findAllById(itemIds);
    List<ItemDTO> dtos = mapItemsToDTOs(items);
    return preserveOrder(dtos, itemIds);
  }

  private List<ItemDTO> mapItemsToDTOs(List<StoredItem> items, Long userId) {
    Set<Long> likedIds =
        (userId != null) ? favoriteRepo.findFavoriteItemIds(userId) : Collections.emptySet();
    return items.stream()
        .map(item -> itemMapper.toDTO(item, likedIds.contains(item.getItemId())))
        .collect(Collectors.toList());
  }

  private List<ItemDTO> mapItemsToDTOs(List<StoredItem> items) {
    return items.stream().map(itemMapper::toDTO).collect(Collectors.toList());
  }

  private List<ItemDTO> preserveOrder(List<ItemDTO> unsortedDtos, List<Long> orderedIds) {
    Map<Long, ItemDTO> map =
        unsortedDtos.stream().collect(Collectors.toMap(ItemDTO::getItem_id, Function.identity()));
    return orderedIds.stream().filter(map::containsKey).map(map::get).collect(Collectors.toList());
  }
}
