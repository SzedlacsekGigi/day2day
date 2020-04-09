package com.personal.day2day.service;

import com.personal.day2day.model.Activity;
import com.personal.day2day.model.Subcategory;
import com.personal.day2day.repositories.ActivityRepository;
import com.personal.day2day.repositories.CategoryRepository;
import com.personal.day2day.repositories.SubcategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.jni.Local;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.LocalTime;
import java.time.Month;
import java.time.ZonedDateTime;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.List;

@Service
@Slf4j
public class ActivityService {

    @Autowired
    ActivityRepository activityRepository;
    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    SubcategoryRepository subcategoryRepository;

    public List<Activity> getActivityBySubcategory(String subcategoryName) {
        Subcategory required = subcategoryRepository.getDistinctBySubcategoryName(subcategoryName);
        return activityRepository.findActivitiesBySubcategory(required);
    }

    public Subcategory returnSubcategory(String subcategoryName){
        return subcategoryRepository.getDistinctBySubcategoryName(subcategoryName);
    }

    public void saveNewActivity(String subcategoryName, String activityName, String description, String date, String startTime, String endTime) {
        Subcategory subcategory = subcategoryRepository.getDistinctBySubcategoryName(subcategoryName);
        LocalDate saveableDate = incomingDateFormatter(date);
        LocalTime saveStartTime = incomingDataFormatter(startTime);
        LocalTime saveEndTime = incomingDataFormatter(endTime);
        if(activityName == null || activityName.equals("")){
            activityName = subcategoryName;
        }
        Activity build = Activity.builder()
                .subcategory(subcategory)
                .date(saveableDate)
                .activityName(activityName)
                .fromTime(saveStartTime)
                .toTime(saveEndTime)
                .description(description)
                .activityLength(calculateActivityLength(saveStartTime, saveEndTime))
                .build();
        activityRepository.save(build);
        log.info(build.getDate().toString());
        log.info(LocalDate.now().toString());
        log.info("New activity is saved");
    }

    public LocalDate incomingDateFormatter(String date) {
        ZonedDateTime d = ZonedDateTime.parse(date);
       ZonedDateTime newD = d.plusHours(2);
        return LocalDate.from(newD);
    }

    public LocalTime incomingDataFormatter(String time){
        String result = time.substring(11, 16);
        LocalTime t = LocalTime.parse(result);
        return t.plusHours(2);
    }

    public Long calculateActivityLength(LocalTime startTime, LocalTime endTime){
        return ChronoUnit.MINUTES.between(startTime, endTime);
    }

    public void deleteActivity(Integer activityId){
        Activity deletable = activityRepository.findDistinctById(activityId);
        activityRepository.delete(deletable);
    }

    public List<Activity> getAllActivities() {
        return activityRepository.findAll();
    }

    public List<Activity> getTodaysActivities(LocalDate dateToday) {
        return activityRepository.findActivitiesByDate(dateToday);
    }

    public List<Activity> getActivityByDate(String date) {
        LocalDate searchableDate = incomingDateFormatter(date);
        return activityRepository.findActivitiesByDate(searchableDate);
    }
}
