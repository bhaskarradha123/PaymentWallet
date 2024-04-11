package com.jsp.PWApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.PWApp.dto.Login;
import com.jsp.PWApp.dto.User;
import com.jsp.PWApp.service.UserService;

@RestController
public class UserController {
	@Autowired
	UserService service;

	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PostMapping("/user")
	public User saveUser(@RequestBody User user) {
		return service.saveUser(user);
	}

	@PutMapping("/user")
	public User updateUser(@RequestBody User user) {
		return service.updateUser(user);
	}

	@DeleteMapping("user/{id}")
	public User deleteUser(@PathVariable int id) {
		return service.deleteUser(id);
	}

	@GetMapping("/user/{id}")
	public User getById(@PathVariable int id) {
		return service.getById(id);
	}

	@GetMapping("/user")
	public List<User> getAll() {
		return service.getAll();
	}

	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PostMapping("/user/login")
	public ResponseEntity<User> login(@RequestBody Login login) {
	    User user = service.login(login.getEmail(), login.getPassword());
	    if (user != null) {
	        return ResponseEntity.ok(user);
	    } else {
	        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
	    }
	}

}
