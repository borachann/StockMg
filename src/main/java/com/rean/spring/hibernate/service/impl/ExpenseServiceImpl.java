package com.rean.spring.hibernate.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.ExpenseDao;
import com.rean.spring.hibernate.entities.Expense;
import com.rean.spring.hibernate.entities.ExpenseDetail;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.ExpenseForm;
import com.rean.spring.hibernate.service.ExpenseService;

@Service
public class ExpenseServiceImpl implements ExpenseService {
	@Autowired
	private ExpenseDao expenseDao;

	@Override
	@Transactional
	public Boolean saveExpense(List<ExpenseForm> expenseForm) {
		// TODO Auto-generated method stub
		return expenseDao.saveExpense(expenseForm);
	}

	@Override
	@Transactional
	public Boolean updateExpense(List<ExpenseForm> expenseForm, int expId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public Boolean deleteExpense(int expid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	@Transactional
	public List<Expense> getAllExpense(Pagination paginaion, String startDate, String endDate, boolean isPagination) {
		// TODO Auto-generated method stub
		return expenseDao.getAllExpense(paginaion, startDate, endDate, isPagination);
	}

	@Override
	@Transactional
	public List<ExpenseDetail> getExpenseDetail(int expId) {
		// TODO Auto-generated method stub
		return expenseDao.getExpenseDetail(expId);
	}

}
