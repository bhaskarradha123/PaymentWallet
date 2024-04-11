package com.jsp.PWApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.jsp.PWApp.dto.Account;
import com.jsp.PWApp.dto.User;
import com.jsp.PWApp.service.AccountService;
import com.jsp.PWApp.service.UserService;

@RestController
public class AccountController {
	@Autowired
	AccountService service;
	UserService userService;

	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@PostMapping("/account/{id}")
	public Account saveAccount(@RequestBody Account account, @PathVariable int id) {
		return service.saveAccount(account, id);
	}

	@PutMapping("/account")
	public Account updateAccount(@RequestBody Account account) {
		return service.updateAccount(account);
	}

	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@DeleteMapping("/account/{id}")
	public String deleteAccount(@PathVariable int id) {
		 Account account = service.deleteAccount(id);
		if (account == null) {
			return "hello";
	    } else {
	        return "null";
	    }
	}

	@CrossOrigin(origins = "http://127.0.0.1:5500")
	@GetMapping("/account/{id}")
	public Account getAccountById(@PathVariable int id) {
		return service.getById(id);
	}

	@GetMapping("/account")
	public List<Account> getAll() {
		return service.getAll();
	}

	@PatchMapping("/account")
	public Account sendAmount(@RequestParam double amt, @RequestParam String password) {
		return service.sendAmount(amt, password);
	}

	@PatchMapping("/account/{amt},{accNo}")
	public Account getAmount(@RequestParam double amt, @RequestParam long accNo) {
		return service.getAmount(amt, accNo);
	}

	@GetMapping("/account/bal")
	public String checkBalance(@RequestParam long accNo, @RequestParam String pass) {
		return service.checkBalance(accNo, pass);
	}
}
