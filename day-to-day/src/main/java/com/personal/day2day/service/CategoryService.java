package com.personal.day2day.service;

import com.personal.day2day.model.Category;
import com.personal.day2day.repositories.CategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Slf4j
public class CategoryService {

    @Autowired
    CategoryRepository categoryRepository;

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public void addNewCategory(String categoryName) {
        Category recent = Category.builder()
                .categoryName(categoryName)
                .primalCategory(false)
                .build();
        categoryRepository.save(recent);
    }

    public String delete(Integer categoryId) {
        Category removable = categoryRepository.findDistinctById(categoryId);
        if (removable.isPrimalCategory()){
            return "You are not allowed to delete this category.";
        } else {
            categoryRepository.delete(removable);
            return "Category successfully deleted.";
        }
    }
}
