package com.jsp.PWApp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jsp.PWApp.dao.AccountDao;
import com.jsp.PWApp.dao.UserDao;
import com.jsp.PWApp.dto.Account;
import com.jsp.PWApp.dto.User;

@Service
public class AccountService {
	@Autowired
	AccountDao dao;
	
	@Autowired
	UserDao userDao;
	
	public Account saveAccount(Account account,int id) {
		User user = userDao.getById(id);
		if(user!=null && account!=null) {
			account.setUser(user);
			Account account2 = dao.saveAccount(account);
			if(account2!=null) {
				account2.setAccountNo(1000000+account2.getId());
				account2.setBalance(account2.getInitialAmount());
				return dao.saveAccount(account2);
			}
		}
		return null;
	}
	public Account updateAccount(Account account) {
		return dao.updateAccount(account);
	}
	public Account deleteAccount(int id) {
		Account account = dao.getById(id);
		if(account != null) {
			User user = account.getUser();
			if(user != null) {
				user.setAccount(null);
				return dao.deleteAccount(id);
			}
		}
		return null;
	}
	public Account getById(int id) {
		return dao.getById(id);
	}
	public List<Account> getAll() {
		return dao.getAll();
	}
	public Account sendAmount(double amount,String password) {
		Account account = dao.getAccountByPassword(password);
		if(account != null) {
			double balance = account.getBalance();
			if(balance > account.getMinBal() && balance > amount) {
				balance = balance - amount;
				account.setBalance(balance);
				return dao.updateAccount(account);
			}
		}
		return null;
	}
	public Account getAmount(double amount,long accountNo) {
		Account account = dao.getAccountByAccountNo(accountNo);
		if(account != null) {
			account.setBalance(account.getBalance()+amount);
			return dao.updateAccount(account);
		}
		return null;
	}
	public String checkBalance(long accountNo,String password) {
		Account account = dao.getAccountByAccountNo(accountNo);
		if(account != null) {
			if(account.getPassword().equals(password)) {
				return account.getUser().getName()+"'s balance is "+account.getBalance();
			}
		}
		return null;
	}
}
