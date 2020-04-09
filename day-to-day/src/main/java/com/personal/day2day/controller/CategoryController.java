package com.personal.day2day.controller;

import com.personal.day2day.model.Category;
import com.personal.day2day.service.CategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/category")
@Slf4j
@CrossOrigin
public class CategoryController {

    @Autowired
    RestTemplate restTemplate;
    @Autowired
    CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getCategories(){
        log.info("Incoming request for categories");
        return categoryService.getAllCategories();
    }

    @PostMapping("/add/{category}")
    public void addNewCategory(@PathVariable("category") String categoryName){
        categoryService.addNewCategory(categoryName);
    }

    @DeleteMapping("/{categoryId}")
    public String deleteCategory(@PathVariable("categoryId") Integer categoryId){
        return categoryService.delete(categoryId);
    }

}
