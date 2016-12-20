package com.rean.spring.hibernate.service;

import java.util.List;

import com.rean.spring.hibernate.entities.Rate;

public interface DashboardService {
	public List<Long> getStockProduct(Boolean isCurrentcy);
	public List<Long> getExpense();
	public List<Long> getOwedAmount();
	public Rate getRate();
}
