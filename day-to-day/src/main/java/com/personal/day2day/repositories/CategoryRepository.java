package com.personal.day2day.repositories;

import com.personal.day2day.model.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface CategoryRepository extends JpaRepository<Category, Integer> {

    @Query("SELECT c FROM Category c")
    List<Category> findAll();

    Category getDistinctByCategoryName(String name);

    Category findDistinctByCategoryName(String categoryName);

    Category findDistinctById(Integer id);


}
