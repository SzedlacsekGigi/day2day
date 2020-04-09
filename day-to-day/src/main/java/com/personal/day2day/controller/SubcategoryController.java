package com.personal.day2day.controller;

import com.personal.day2day.model.Subcategory;
import com.personal.day2day.service.SubcategoryService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@RestController
@RequestMapping("/subcategory")
@Slf4j
@CrossOrigin
public class SubcategoryController {

    @Autowired
    RestTemplate restTemplate;
    @Autowired
    SubcategoryService subcategoryService;

    @GetMapping("/all")
    public List<Subcategory> getSubcategories(){
        return subcategoryService.getAllSubcategories();
    }

    @PostMapping("/add/{category}/{subcategoryName}/{question}")
    public void addNewSubcategory(@PathVariable("subcategoryName") String subcategoryName,
                                  @PathVariable("category")String categoryName,
                                  @PathVariable("question")String question){
        subcategoryService.addNewSubcategory(subcategoryName, categoryName, question);
    }

    @DeleteMapping("/{subcategoryId}")
    public void deleteSubcategory(@PathVariable("subcategoryId") Integer subcategoryId){
        subcategoryService.deleteSubcategory(subcategoryId);
    }

    @GetMapping("/{category}")
    public List<Subcategory> allByCategory(@PathVariable("category") String categoryName){
        log.info("Request for subcategories of category " + categoryName);
        return subcategoryService.getAllByCategory(categoryName);
    }
}
