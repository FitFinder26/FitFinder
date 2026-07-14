package edu.alexu.fitfinder.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name = "FAVORITES")
@NoArgsConstructor
@Getter
@Setter
public class Favorite {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "fav_id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false) // Defines the Foreign Key column
    private User user;

    @ManyToOne
    @JoinColumn(name = "item_id", nullable = false) // Defines the Foreign Key column
    private StoredItem item;

}
