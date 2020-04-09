package com.personal.day2day.repositories;

import com.personal.day2day.model.Activity;
import com.personal.day2day.model.Subcategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

import static org.hibernate.loader.Loader.SELECT;

public interface ActivityRepository extends JpaRepository<Activity, Integer> {

    @Query("SELECT a FROM Activity a ORDER BY a.date DESC")
    List<Activity> findAll();

    Activity findDistinctById(Integer id);

    @Query("SELECT a FROM Activity a WHERE a.date = :date ORDER BY a.fromTime ASC")
    List<Activity> findActivitiesByDate(LocalDate date);

    @Query("SELECT a FROM Activity a WHERE a.date = :date")
    List<Activity> findAllByDate(LocalDate date);

    @Query("SELECT a FROM Activity a WHERE a.subcategory = :subcategory")
    List<Activity> findActivitiesBySubcategory(@Param("subcategory") Subcategory subcategory);

    List<Activity> findActivitiesByDateBetween(LocalDate start, LocalDate end);

}
