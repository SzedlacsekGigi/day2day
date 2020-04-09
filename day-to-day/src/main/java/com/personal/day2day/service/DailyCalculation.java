package com.personal.day2day.service;

import com.personal.day2day.model.Activity;
import com.personal.day2day.model.Category;
import com.personal.day2day.model.Subcategory;
import com.personal.day2day.repositories.ActivityRepository;
import com.personal.day2day.repositories.CategoryRepository;
import com.personal.day2day.repositories.SubcategoryRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.*;
import java.util.Map.Entry;

@Slf4j
@Service
public class DailyCalculation {

    @Autowired
    CategoryRepository categoryRepository;
    @Autowired
    ActivityRepository activityRepository;
    @Autowired
    SubcategoryRepository subcategoryRepository;
    @Autowired
    ActivityService activityService;

    public int progressByDate(String date) {
        List<Activity> currentDaysActivities = activityRepository.findAllByDate(activityService.incomingDateFormatter(date));
        List<Category> allCategories = categoryRepository.findAll();
        HashSet<String> categoryNames = new HashSet<>();
        for (Activity activity : currentDaysActivities) {
            categoryNames.add(activity.getSubcategory().getCategory().getCategoryName());
        }
        return categoryNames.size() * 100 / allCategories.size();
    }

    public LinkedHashMap<String, Integer> sumActivitiesBySubcategories() {
        List<Subcategory> all = subcategoryRepository.findAll();
        HashMap<String, Integer> map = new HashMap<>();
        for (Subcategory sub : all) {
            map.put(sub.getSubcategoryName(), sub.getActivities().size());
        }
        LinkedHashMap<String, Integer> sortedMap = new LinkedHashMap<>();
        map.entrySet()
                .stream()
                .sorted(Entry.comparingByValue())
                .forEachOrdered(x -> sortedMap.put(x.getKey(), x.getValue()));
        System.out.println("Sorted map: " + sortedMap);
        return sortedMap;
    }

    public String offerLeastPreferredSubcategory(){
        LinkedHashMap<String, Integer> sortedMap = sumActivitiesBySubcategories();
        String firstKey = sortedMap.entrySet().iterator().next().getKey();
        log.info("The least preferred subcategory is: " + firstKey);
        List<String> notPreferredSubcategories = new ArrayList<>();
        String lastElement = String.valueOf(sortedMap.entrySet().toArray()[sortedMap.size() -1]);
        Integer biggestValue = Integer.valueOf(lastElement.substring(lastElement.indexOf("=")+1));
        for (Map.Entry entry:sortedMap.entrySet()) {
            if ((Integer) entry.getValue() < (biggestValue / 2)){
                notPreferredSubcategories.add((String) entry.getKey());
            }
        }
        Random random = new Random();
        String offer =notPreferredSubcategories.get(random.nextInt(notPreferredSubcategories.size()));
        log.info(offer);
        return offer;
    }

    public LinkedHashMap<String, Integer> sumActivitiesByCategories() {
        List<Category> all = categoryRepository.findAll();
        HashMap<String, Integer> map = new HashMap<>();
        for (Category cat : all) {
            int activities = 0;
            List<Subcategory> allByCat = cat.getSubcategories();
            for (Subcategory sub : allByCat) {
                activities += sub.getActivities().size();
            }
            map.put(cat.getCategoryName(), activities);
        }
        LinkedHashMap<String, Integer> sortedMap = new LinkedHashMap<>();
        map.entrySet()
                .stream()
                .sorted(Entry.comparingByValue())
                .forEachOrdered(x -> sortedMap.put(x.getKey(), x.getValue()));
        log.info("Sorted map: " + sortedMap);
        return sortedMap;
    }

    public List<HashMap<String, String>> weeklyStatus() {
        LocalDate now = LocalDate.now();
        LocalDate oneWeekBefore = now.minusWeeks(1);
        return getStringIntegerHashMap(now, oneWeekBefore);
    }

    public List<HashMap<String, String>> monthlyStatus() {
        LocalDate now = LocalDate.now();
        LocalDate oneMonthBefore = now.minusMonths(1);
        return getStringIntegerHashMap(now, oneMonthBefore);
    }

    private List<HashMap<String, String>> getStringIntegerHashMap(LocalDate now, LocalDate before) {
        List<Activity> activities = activityRepository.findActivitiesByDateBetween(before, now);
        HashMap<String, Integer> calculation = new HashMap<>();
        for (Activity act : activities) {
            String currentKey = act.getSubcategory().getCategory().getCategoryName();
            if (calculation.containsKey(currentKey)) {
                calculation.put(currentKey, calculation.get(currentKey) + 1);
            } else {
                calculation.put(currentKey, 1);
            }
        }
        return calculatePercentages(calculation, activities.size());
    }

    public List<HashMap<String, String>> calculatePercentages (HashMap<String, Integer> startingHashmap, Integer size) {
        HashMap<String, Integer> percentages = new HashMap<>();
        startingHashmap.forEach((key, value) -> {
            percentages.put(key, value*100/size);
        });
        List<HashMap<String, String>> finalArray = new ArrayList<>();
            percentages.forEach((key, value) -> {
                HashMap<String, String> current = new HashMap<>();
                current.put("y", value.toString());
                current.put("label", key);
                finalArray.add(current);
            });
        return finalArray;
    }
}
