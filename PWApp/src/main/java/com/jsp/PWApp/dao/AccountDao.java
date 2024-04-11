package com.jsp.PWApp.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.jsp.PWApp.dto.Account;
import com.jsp.PWApp.repository.AccountRepository;

@Repository
public class AccountDao {
	@Autowired
	AccountRepository repository;
	
	public Account saveAccount(Account account) {
		return repository.save(account);
	}
	
	public Account updateAccount(Account account) {
		Optional<Account> optional = repository.findById(account.getId());
		if(optional.get()!=null) {
			repository.save(account);
		}
		return optional.get();
	}
	
	public Account deleteAccount(int id) {
		Optional<Account> optional = repository.findById(id);
		if(optional.get()!=null) {
			repository.delete(optional.get());
		}
		return null;
	}
	
	public Account getById(int id) {
		Optional<Account> optional = repository.findById(id);
		if(optional.get()!=null)
			return optional.get();
		else
			return null;
	}
	
	public List<Account> getAll() {
		return repository.findAll();
	}

	public Account getAccountByPassword(String password) {
		return repository.getAccountByPassword(password);
	}

	public Account getAccountByAccountNo(long accountNo) {
		return repository.getAccountByAccountNo(accountNo);
	}

}
