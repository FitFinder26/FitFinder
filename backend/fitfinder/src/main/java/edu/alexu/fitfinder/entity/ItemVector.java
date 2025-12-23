package edu.alexu.fitfinder.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;
import java.time.LocalDateTime;

@Entity
@Table(name = "ITEM_VECTOR")
@Data
@NoArgsConstructor
@Getter
@Setter
public class ItemVector {

  @Id
  @GeneratedValue(strategy = GenerationType.SEQUENCE)
  private Long id;

  @CreationTimestamp private LocalDateTime createdAt;
  private Long vectorId;

  @ManyToOne
  @JoinColumn(name = "item_id", nullable = false)
  private StoredItem item;
}
