package edu.alexu.fitfinder.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;

@Entity
@Table(name = "ITEM_VECTOR")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemVector {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false)
    private StoredItem item;

    private Long vectorId;

    @CreationTimestamp
    private LocalDateTime createdAt;


    public ItemVector(StoredItem item, Long vectorId) {
        this.item = item;
        this.vectorId = vectorId;
    }
}
