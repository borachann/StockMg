package com.rean.spring.hibernate.service;

import java.util.List;

import com.rean.spring.hibernate.entities.Expense;
import com.rean.spring.hibernate.entities.ExpenseDetail;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.ExpenseForm;

public interface ExpenseService {

	public Boolean saveExpense(List<ExpenseForm> expenseForm);
	public Boolean updateExpense(List<ExpenseForm> expenseForm, int expId);
	public Boolean deleteExpense(int expid);
	public List<Expense> getAllExpense(Pagination paginaion, String startDate, String endDate, boolean isPagination);
	public List<ExpenseDetail> getExpenseDetail(int expId);
}
