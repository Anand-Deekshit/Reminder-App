package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.boot.model.Reminder;

@Repository
public interface ReminderRepo extends JpaRepository<Reminder, String>{
	
	@Query("select r.id, r.label, r.date, r.status, r.frequencynumber, r.frequencytype from reminder r where r.date=:currentDate")
	public Reminder getReminder(@Param("currentDate") String currentDate);
	
	
	
	

}
