package com.rean.spring.hibernate.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.DashboardDao;
import com.rean.spring.hibernate.entities.Rate;
import com.rean.spring.hibernate.service.DashboardService;

@Service
public class DashboardServiceImpl implements DashboardService {
	@Autowired
	private DashboardDao dashboarDao;

	@Override
	@Transactional
	public List<Long> getStockProduct() {
		// TODO Auto-generated method stub
		return dashboarDao.getStockProduct();
	}

	@Override
	public List<Long> getExpense() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Long> getOwedAmount() {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Rate getRate() {
		// TODO Auto-generated method stub
		return dashboarDao.getRate();
	}

}
