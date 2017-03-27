package com.rean.spring.hibernate.service;

import com.rean.spring.hibernate.entities.TblUser;

public interface LoginService {
	public TblUser loginUser(String userName, String userPass);
}
