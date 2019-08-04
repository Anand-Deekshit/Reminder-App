package com.boot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.boot.model.LoginUser;
import com.boot.repository.LoginRepository;

@RestController
@RequestMapping("reminder/")
public class LoginController {
	@Autowired
	private LoginRepository loginRepository;
	
	
	@RequestMapping(value = "users", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:4200")
	public List<LoginUser> getUsers(){
		return loginRepository.findAll();
	}
	@RequestMapping(value = "users/email/{email}", method = RequestMethod.GET)
	@CrossOrigin(origins = "http://localhost:4200")
	public LoginUser getUser(@PathVariable String email){
		return loginRepository.findOne(email);
	}
	@RequestMapping(value = "signup", method = RequestMethod.POST)
	@CrossOrigin(origins = "http://localhost:4200")
	public LoginUser createUser(@RequestBody LoginUser user) {
		return loginRepository.save(user);
	}
	
}
