package com.personal.day2day;

import com.personal.day2day.model.Activity;
import com.personal.day2day.model.Category;
import com.personal.day2day.model.Subcategory;
import com.personal.day2day.repositories.ActivityRepository;
import com.personal.day2day.repositories.CategoryRepository;
import com.personal.day2day.repositories.SubcategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Profile;
import org.springframework.web.client.RestTemplate;

import java.beans.SimpleBeanInfo;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;

@SpringBootApplication
public class Day2dayApplication {

    @Autowired
    ActivityRepository activityRepository;

    @Autowired
    CategoryRepository categoryRepository;

    @Autowired
    SubcategoryRepository subcategoryRepository;

    public static void main(String[] args) {
        SpringApplication.run(Day2dayApplication.class, args);
    }
/*
    @Bean
    @Profile("production")
    public CommandLineRunner init() {
        return args -> {

            // ---- DWLETEING ALL THE DATA FROM BEFOREHAND ---- //

            activityRepository.deleteAll();
            subcategoryRepository.deleteAll();
            categoryRepository.deleteAll();

// ---- CREATING ALL THE CATEGORIES ---- //

            Category mental = Category.builder()
                    .categoryName("Mental")
                    .primalCategory(true)
                    .build();

            Category physical = Category.builder()
                    .categoryName("Physical")
                    .primalCategory(true)
                    .build();

            Category mind = Category.builder()
                    .categoryName("Mind")
                    .primalCategory(true)
                    .build();

            Category social = Category.builder()
                    .categoryName("Social")
                    .primalCategory(true)
                    .build();

            Category surroundings = Category.builder()
                    .categoryName("Surroundings")
                    .primalCategory(true)
                    .build();

            Category tasks = Category.builder()
                    .categoryName("Tasks")
                    .primalCategory(true)
                    .build();

            categoryRepository.save(mental);
            categoryRepository.save(physical);
            categoryRepository.save(mind);
            categoryRepository.save(social);
            categoryRepository.save(surroundings);
            categoryRepository.save(tasks);


            // ---- CREATING THE SUBCATEGORIES ---- //

            Subcategory workout = Subcategory.builder()
                    .subcategoryName("Workout")
                    .relevantQuestion("What kind of workout have you done?")
                    .category(physical)
                    .build();
            Subcategory vitamins = Subcategory.builder()
                    .subcategoryName("Took vitamins")
                    .relevantQuestion("What vitamins have you taken?")
                    .category(physical)
                    .build();
            Subcategory yoga = Subcategory.builder()
                    .subcategoryName("Yoga")
                    .relevantQuestion("What kind of yoga practice have you done?")
                    .category(physical)
                    .build();
            Subcategory stretching = Subcategory.builder()
                    .subcategoryName("Stretching")
                    .relevantQuestion("What kind of stretching you did?")
                    .category(physical)
                    .build();
            Subcategory pampering = Subcategory.builder()
                    .subcategoryName("Pamper yourself")
                    .relevantQuestion("What kind of pampering did you enjoyed?")
                    .category(physical)
                    .build();
            Subcategory rolling = Subcategory.builder()
                    .subcategoryName("SMR Foam Rolling")
                    .relevantQuestion("How you used your foam roller?")
                    .category(physical)
                    .build();
            Subcategory dogWalking = Subcategory.builder()
                    .subcategoryName("Dog walking")
                    .relevantQuestion("Where you walked your puppy?")
                    .category(physical)
                    .build();

            subcategoryRepository.save(workout);
            subcategoryRepository.save(vitamins);
            subcategoryRepository.save(yoga);
            subcategoryRepository.save(stretching);
            subcategoryRepository.save(pampering);
            subcategoryRepository.save(rolling);
            subcategoryRepository.save(dogWalking);

            Subcategory learning = Subcategory.builder()
                    .subcategoryName("Learned something new")
                    .relevantQuestion("What did you learned today?")
                    .category(mind).build();
            Subcategory reading = Subcategory.builder()
                    .subcategoryName("Reading")
                    .relevantQuestion("What book have you read today?")
                    .category(mind).build();
            Subcategory play = Subcategory.builder()
                    .subcategoryName("Playing a game")
                    .relevantQuestion("What kind of game did you played?")
                    .category(mind).build();
            Subcategory movie = Subcategory.builder()
                    .subcategoryName("Watching a movie/show")
                    .relevantQuestion("Which movie / show have you watched?")
                    .category(mind).build();

            subcategoryRepository.save(learning);
            subcategoryRepository.save(reading);
            subcategoryRepository.save(movie);
            subcategoryRepository.save(play);
            List<Subcategory> mindSubcategories = Arrays.asList(learning, reading, play, movie);

            Subcategory meditation = Subcategory.builder()
                    .subcategoryName("Meditation")
                    .relevantQuestion("How was your practice?")
                    .category(mental).build();
            Subcategory journaling = Subcategory.builder()
                    .subcategoryName("Journaling")
                    .relevantQuestion("How do you feel after journaling?")
                    .category(mental).build();
            Subcategory gratitude = Subcategory.builder()
                    .subcategoryName("Giving Gratitude")
                    .relevantQuestion("Why do you gave gratitude today?")
                    .category(mental).build();
            Subcategory planning = Subcategory.builder()
                    .subcategoryName("Planning")
                    .relevantQuestion("What did you planned?")
                    .category(mental).build();
            Subcategory write = Subcategory.builder()
                    .subcategoryName("Writing")
                    .relevantQuestion("What kind of writing have you done?")
                    .category(mental).build();
            Subcategory create = Subcategory.builder()
                    .subcategoryName("Create")
                    .relevantQuestion("What kind of creation were you working on?")
                    .category(mental).build();
            Subcategory breathing = Subcategory.builder()
                    .subcategoryName("Breathing exercises")
                    .relevantQuestion("What kind of breathing exercises have you done?")
                    .category(mental).build();

            subcategoryRepository.save(meditation);
            subcategoryRepository.save(journaling);
            subcategoryRepository.save(gratitude);
            subcategoryRepository.save(planning);
            subcategoryRepository.save(write);
            subcategoryRepository.save(create);
            subcategoryRepository.save(breathing);
            List<Subcategory> mentalSubcategories = Arrays.asList(meditation, journaling, gratitude, planning, write, create, breathing);

            Subcategory videochat = Subcategory.builder()
                    .subcategoryName("Video chat")
                    .relevantQuestion("You video chatted with whom?")
                    .category(social).build();
            Subcategory phonecall = Subcategory.builder()
                    .subcategoryName("Phone call")
                    .relevantQuestion("Who do you talked to on the phone?")
                    .category(social).build();
            Subcategory boardgaming = Subcategory.builder()
                    .subcategoryName("Boardgaming")
                    .relevantQuestion("What kind of boardgame did you played?")
                    .category(social).build();
            Subcategory onlineGaming = Subcategory.builder()
                    .subcategoryName("Online gaming")
                    .relevantQuestion("What kind of online game did you played?")
                    .category(social).build();

            subcategoryRepository.save(videochat);
            subcategoryRepository.save(phonecall);
            subcategoryRepository.save(boardgaming);
            subcategoryRepository.save(onlineGaming);
            List<Subcategory> socialSubcategories = Arrays.asList(videochat, phonecall, boardgaming, onlineGaming);

            Subcategory cleaning = Subcategory.builder()
                    .subcategoryName("Cleaning the house")
                    .relevantQuestion("Which chores have you done?")
                    .category(surroundings).build();
            Subcategory waterPlants = Subcategory.builder()
                    .subcategoryName("Watering the plants")
                    .category(surroundings).build();
            Subcategory cooking = Subcategory.builder()
                    .subcategoryName("Cooking")
                    .relevantQuestion("What kind of food did you cooked?")
                    .category(surroundings).build();
            Subcategory organize = Subcategory.builder()
                    .subcategoryName("Organizing")
                    .relevantQuestion("What have you organized?")
                    .category(surroundings).build();
            Subcategory laundry = Subcategory.builder()
                    .subcategoryName("Do the laundry")
                    .category(surroundings).build();
            Subcategory ironing = Subcategory.builder()
                    .subcategoryName("Ironing")
                    .category(surroundings).build();

            subcategoryRepository.save(cleaning);
            subcategoryRepository.save(waterPlants);
            subcategoryRepository.save(cooking);
            subcategoryRepository.save(organize);
            subcategoryRepository.save(laundry);
            subcategoryRepository.save(ironing);

            List<Subcategory> surroundingsSubcategories = Arrays.asList(cleaning, waterPlants, cooking, organize, laundry, ironing);

            Subcategory study = Subcategory.builder()
                    .subcategoryName("Studying")
                    .relevantQuestion("What did you studied?")
                    .category(tasks).build();
            Subcategory work = Subcategory.builder()
                    .subcategoryName("Work")
                    .relevantQuestion("Which tasks have you done?")
                    .category(tasks).build();

            subcategoryRepository.save(study);
            subcategoryRepository.save(work);
            List<Subcategory> taskSubcategories = Arrays.asList(study, work);

            // ---- CREATING SAMPLE ACTIVITIES FOR TESTING ---- //

            Activity activity = Activity.builder()
                    .activityName("Journaling")
                    .date(LocalDate.now())
                    .subcategory(journaling)
                    .fromTime("9:00")
                    .toTime("10:30")
                    .description("Basic journaling about my dreams from last night.")
                    .build();

            Activity activity2 = Activity.builder()
                    .subcategory(workout)
                    .date(LocalDate.now())
                    .activityName("Workout")
                    .fromTime("11:00")
                    .toTime("12:45")
                    .description("HIIT training")
                    .build();

            Activity activity3 = Activity.builder()
                    .subcategory(reading)
                    .date(LocalDate.now())
                    .activityName("Reading")
                    .fromTime("19:00")
                    .toTime("21:00")
                    .description("Read Harry Potter and the Prisoner of Azkaban by J.K. Rowling")
                    .build();

            activityRepository.save(activity);
            activityRepository.save(activity2);
            activityRepository.save(activity3);


        };
    }
*/
    @Bean
    public RestTemplate getRestTemplate() {
        return new RestTemplate();
    }

}
