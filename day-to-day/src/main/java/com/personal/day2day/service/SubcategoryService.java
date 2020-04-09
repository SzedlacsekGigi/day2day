package com.personal.day2day.service;

import com.personal.day2day.model.Category;
import com.personal.day2day.model.Subcategory;
import com.personal.day2day.repositories.CategoryRepository;
import com.personal.day2day.repositories.SubcategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class SubcategoryService {

    @Autowired
    SubcategoryRepository subcategoryRepository;
    @Autowired
    CategoryRepository categoryRepository;

    public List<Subcategory> getAllSubcategories() {
        return subcategoryRepository.findAll();
    }

    public void addNewSubcategory(String subcategoryName, String categoryName, String relevantQuestion) {
        String finalQuestion = relevantQuestion.replace("+", " ")+"?";
        Subcategory recent = Subcategory.builder()
                .subcategoryName(subcategoryName)
                .category(categoryRepository.findDistinctByCategoryName(categoryName))
                .relevantQuestion(finalQuestion)
                .build();
        subcategoryRepository.save(recent);
    }

    public void deleteSubcategory(Integer subcategoryId) {
        subcategoryRepository.delete(subcategoryRepository.findDistinctById(subcategoryId));
    }

    public List<Subcategory> getAllByCategory(String category) {
        Category currentCategory = categoryRepository.findDistinctByCategoryName(category);
        return subcategoryRepository.findAllByCategory(currentCategory);
    }
}
