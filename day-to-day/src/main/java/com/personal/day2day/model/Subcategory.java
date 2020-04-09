package com.personal.day2day.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.*;
import org.apache.catalina.LifecycleState;

import javax.persistence.*;
import java.util.Collection;
import java.util.List;

@Entity
@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Subcategory {

    @Id
    @GeneratedValue
    private Integer id;

    private String subcategoryName;
    private String relevantQuestion;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category")
    @JsonBackReference
    private Category category;

    @OneToMany(mappedBy = "subcategory", cascade = {CascadeType.REMOVE, CascadeType.PERSIST}, fetch = FetchType.LAZY)
    @JsonManagedReference
    private List<Activity> activities;
}
