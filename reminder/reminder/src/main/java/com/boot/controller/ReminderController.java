package com.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.model.LoginUser;
import com.boot.model.Reminder;
import com.boot.repository.IdRepository;
import com.boot.repository.ReminderRepo;

@RestController
@RequestMapping("reminder/")
public class ReminderController {
	
	@Autowired
	private ReminderRepo reminderRepo;
	
	@Autowired
	private IdRepository idRepository;
	
	@RequestMapping(value = "createreminder", method = RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:4200")
	public Reminder createReminder(@RequestBody Reminder reminder) {
		int newId = 0;
		reminder.setId("R-"+ (idRepository.getMaxId("reminderid") + 1));
		reminderRepo.save(reminder);
		newId = Integer.parseInt(reminder.getId().split("-")[1]);
		idRepository.updateMaxIds("reminderid", newId);
		return reminder;
	}
	
	@RequestMapping(value = "getreminders", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:4200")
	public List<Reminder> getReminders(){
		return reminderRepo.findAll();
	}
	
	@RequestMapping(value = "editreminder", method = RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:4200")
	public Reminder editReminder(@RequestBody Reminder reminder) {
		reminderRepo.save(reminder);
		return reminder;
	}
	
	@RequestMapping(value = "deletereminder", method = RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:4200")
	public Reminder deleteReminder(@RequestBody Reminder reminder) {
		reminderRepo.delete(reminder);
		return reminder;
	}
	
	@RequestMapping(value = "getremindertoedit", method = RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:4200")
	public Reminder getReminderToEdit(@RequestBody Reminder reminder) {
		return reminderRepo.findOne(reminder.getId());
	}

}
