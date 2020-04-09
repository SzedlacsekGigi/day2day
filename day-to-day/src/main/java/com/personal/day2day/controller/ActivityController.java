package com.personal.day2day.controller;

import com.personal.day2day.model.Activity;
import com.personal.day2day.service.ActivityService;
import com.personal.day2day.service.DailyCalculation;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/activity")
@CrossOrigin
@Slf4j
public class ActivityController {

    @Autowired
    RestTemplate restTemplate;
    @Autowired
    ActivityService activityService;
    @Autowired
    DailyCalculation dailyCalculation;

    @GetMapping("/offer")
    public String offerActivity(){
        return dailyCalculation.offerLeastPreferredSubcategory();
    }

    @GetMapping("/{subcategory}")
    public List<Activity> getActivity(@PathVariable("subcategory") String subcategory) {
        return activityService.getActivityBySubcategory(subcategory);
    }

    @GetMapping("/all")
    public List<Activity> getAllActivities() {
        return activityService.getAllActivities();
    }

    @CrossOrigin
    @PostMapping("/add/")
    public void addNewActivity(@RequestBody Map<String, String> activityData) {
        log.info("Incoming new activity detected");
        activityService.saveNewActivity(activityData.get("subcategory"), activityData.get("activityName"),
                activityData.get("description"), activityData.get("date"), activityData.get("startTime"), activityData.get("endTime"));
    }

    @GetMapping("/today")
    public List<Activity> todaysActivities() {
        LocalDate dateToday = LocalDate.now();
        return activityService.getTodaysActivities(dateToday);
    }

    @DeleteMapping("/{activityId}")
    public void deleteActivity(@PathVariable("activityId") Integer activityId) {
        activityService.deleteActivity(activityId);
    }

    @GetMapping("/progress")
    public Integer dailyProg(@RequestParam String date) {
        log.info("Incoming progress calculation starting for date: " + date);
        dailyCalculation.weeklyStatus();
        dailyCalculation.offerLeastPreferredSubcategory();
        return dailyCalculation.progressByDate(date);
    }

    @CrossOrigin
    @GetMapping("/day/")
    @ResponseBody
    public List<Activity> getProvidedDaysActivities(@RequestParam String date) {
        log.info("Incoming calendar request for day: " + date);
        return activityService.getActivityByDate(date);
    }

    @CrossOrigin
    @GetMapping("/statistics/month")
    public List<HashMap<String, String>> monthlyStats() {
        log.info("Monthly statistic calculation");
        List<HashMap<String, String>> activitiesLastMonth = dailyCalculation.monthlyStatus();
        log.info("Returning activities");
        return activitiesLastMonth;
    }

    @CrossOrigin
    @GetMapping("/statistics/week")
    public List<HashMap<String, String>> weeklyStats() {
        log.info("Weekly statistic calculation");
        List<HashMap<String, String>> activitiesLastWeek = dailyCalculation.weeklyStatus();
        if (activitiesLastWeek != null) {
            log.info("Returning activities");
            return activitiesLastWeek;
        } else {
            log.info("Last weeks activities are empty");
            return null;
        }
    }
}
