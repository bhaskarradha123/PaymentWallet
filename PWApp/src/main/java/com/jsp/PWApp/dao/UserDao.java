package com.jsp.PWApp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.PWApp.dto.User;
import com.jsp.PWApp.repository.UserRepository;

@Repository
public class UserDao {
	@Autowired
	UserRepository repository;
	UserDao dao;
	public User saveUser(User user) {
		return repository.save(user);
	}
	public User deleteUser(int id) {
		Optional<User> optional = repository.findById(id);
		if(optional.get()!=null) {
			repository.delete(optional.get());
		}
		return null;
	}
	public User updateUser(User user) {
		Optional<User> optional = repository.findById(user.getId());
		if(optional.get()!=null) {
			repository.save(user);
		}
		return optional.get();
	}
	public User getById(int id) {
		Optional<User> optional = repository.findById(id);
		if(optional.get()!=null)
			return optional.get();
		else
			return null;
	}
	public List<User> getAll(){
		return repository.findAll();
	}
	public User findByEmail(String email) {
		return repository.findByEmail(email);
	}
	public User login(String email,String password) {
		return repository.login(email, password);
		
	}
}