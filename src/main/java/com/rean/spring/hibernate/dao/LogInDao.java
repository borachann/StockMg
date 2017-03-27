package com.rean.spring.hibernate.dao;

import com.rean.spring.hibernate.entities.TblUser;

public interface LogInDao {
	public TblUser loginUser(String userName, String userPass);
}
