package edu.alexu.fitfinder.repository.projection;

public interface StoredItemWithVectorId {
  Long getItemId();

  String getCategory();

  String getCurrency();

  String getDescription();

  String getImageURL();

  String getItemWeburl();

  float getPrice();

  String getTitle();

  Long getVectorId();
}
