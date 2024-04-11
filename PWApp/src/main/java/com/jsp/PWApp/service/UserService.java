package com.jsp.PWApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.PWApp.dao.UserDao;
import com.jsp.PWApp.dto.User;

@Service
public class UserService {
	@Autowired
	UserDao dao;
	public User saveUser(User user) {
		return dao.saveUser(user);
	}
	public User updateUser(User user) {
		return dao.updateUser(user);
	}
	public User deleteUser(int id) {
		return dao.deleteUser(id);
	}
	public User getById(int id) {
		return dao.getById(id);
	}
	public List<User> getAll(){
		return dao.getAll();
	}
	public User login(String email,String password) {
		return dao.login(email, password);
	}
}
