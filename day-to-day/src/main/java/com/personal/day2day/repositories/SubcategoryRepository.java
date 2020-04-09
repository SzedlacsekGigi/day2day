package com.personal.day2day.repositories;

import com.personal.day2day.model.Category;
import com.personal.day2day.model.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SubcategoryRepository extends JpaRepository<Subcategory, Integer> {

    Subcategory getDistinctBySubcategoryName(String subcategoryName);

    Subcategory findDistinctById(Integer id);

    List<Subcategory> findAllByCategory(Category category);

}
