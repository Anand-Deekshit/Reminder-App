package com.boot.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity(name="reminder")
public class Reminder {
	
	@Id
	String id;
	String label;
	String status;
	String date;
	int frequencynumber;
	String frequencytype;
	
	 
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getLabel() {
		return label;
	}
	public void setLabel(String label) {
		this.label = label;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public int getFrequencynumber() {
		return frequencynumber;
	}
	public void setFrequencynumber(int frequencynumber) {
		this.frequencynumber = frequencynumber;
	}
	public String getFrequencytype() {
		return frequencytype;
	}
	public void setFrequencytype(String frequencytype) {
		this.frequencytype = frequencytype;
	}

}
