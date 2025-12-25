package edu.alexu.fitfinder.service;

import edu.alexu.fitfinder.dto.ItemDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class StoredItemService {

  @Autowired private NamedParameterJdbcTemplate namedJdbcTemplate;

  public List<ItemDTO> getProductsByVectorIds(List<Long> vectorIds) {

    String sql =
        """
        SELECT DISTINCT
            si.item_id,
            si.category,
            si.currency,
            si.description,
            si.imageurl,
            si.item_weburl,
            si.price,
            si.title
        FROM ITEM_VECTOR vi
        JOIN STORED_ITEMS si
            ON vi.item_id = si.item_id
        WHERE vi.vector_id IN (:vectorIds)
        """;

    MapSqlParameterSource params = new MapSqlParameterSource("vectorIds", vectorIds);

    return namedJdbcTemplate.query(
        sql,
        params,
        (rs, rowNum) -> {
          return new ItemDTO(
              rs.getLong("item_id"),
              rs.getString("category"),
              rs.getString("currency"),
              rs.getString("description"),
              rs.getString("imageurl"),
              rs.getString("item_weburl"),
              rs.getFloat("price"),
              rs.getString("title"));
        });
  }

    public List<ItemDTO> getProducts(List<Long> vectorIds) {

        String sql =
                """
                SELECT DISTINCT
                    si.item_id,
                    si.category,
                    si.currency,
                    si.description,
                    si.imageurl,
                    si.item_weburl,
                    si.price,
                    si.title
                FROM STORED_ITEMS si
                WHERE si.item_id IN (:vectorIds)
                """;

        MapSqlParameterSource params = new MapSqlParameterSource("vectorIds", vectorIds);

        return namedJdbcTemplate.query(
                sql,
                params,
                (rs, rowNum) -> {
                    return new ItemDTO(
                            rs.getLong("item_id"),
                            rs.getString("category"),
                            rs.getString("currency"),
                            rs.getString("description"),
                            rs.getString("imageurl"),
                            rs.getString("item_weburl"),
                            rs.getFloat("price"),
                            rs.getString("title"));
                });
    }

}
