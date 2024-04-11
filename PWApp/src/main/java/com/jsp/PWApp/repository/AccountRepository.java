package com.jsp.PWApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.RequestParam;

import com.jsp.PWApp.dto.Account;
import com.jsp.PWApp.dto.User;

public interface AccountRepository extends JpaRepository<Account, Integer>{
	
	@Query("select a from Account a where accountNo=:accountNo")
	public Account getAccountByAccountNo(@RequestParam long accountNo);
	
	@Query("select x from Account x where password=:password")
	public Account getAccountByPassword(@RequestParam String password);

}
