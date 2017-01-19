package com.rean.spring.hibernate.dao.impl;

import java.util.Date;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.ExpenseDao;
import com.rean.spring.hibernate.entities.Expense;
import com.rean.spring.hibernate.entities.ExpenseDetail;
import com.rean.spring.hibernate.entities.ImportDetail;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.ExpenseForm;

@Repository
public class ExpenseDaoImpl implements ExpenseDao {
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public Boolean saveExpense(List<ExpenseForm> expenseForm) {
		// TODO Auto-generated method stub
		try{
			Expense expense = new Expense();
			expense.setExpDate(new Date());
			expense.setDescription(expenseForm.get(0).getDescription());
			expense.setExpRate(expenseForm.get(0).getExpRate());
			expense.setTotalAmount(expenseForm.get(0).getTotalAmount());
			for(int i=0; i<expenseForm.size(); i++){
				ExpenseDetail expenseDetail = new ExpenseDetail();
				expenseDetail.setCurrentcy(expenseForm.get(i).getCurrentcy());
				expenseDetail.setDescrition(expenseForm.get(i).getProName());				
				expenseDetail.setExpQty(expenseForm.get(i).getExpQty());				
				expenseDetail.setUnitPrice(expenseForm.get(i).getUnitPrice());
				expenseDetail.setExpense(expense);
				expense.getExpenseDetail().add(expenseDetail);
			}
			sessionFactory.getCurrentSession().save(expense);
			return true;
		}catch(Exception ex){
			System.out.println("error message: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public Boolean updateExpense(List<ExpenseForm> expenseForm, int expId) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public Boolean deleteExpense(int expid) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public List<Expense> getAllExpense(Pagination paginaion, String startDate, String endDate, boolean isPagination) {
		// TODO Auto-generated method stub
		try{
			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery("SELECT expid, description, totalamount, exprate, to_char(expdate,'YYYY-MM-DD HH:MI AM') as expdate "
					+ "FROM expense WHERE to_char(expdate,'YYYY-MM-DD') >= '" + startDate + "' and to_char(expdate,'YYYY-MM-DD') <= '" + endDate +"' ORDER BY expense.expdate DESC");
			if(isPagination){
				query.setFirstResult(paginaion.offset());
				query.setMaxResults(paginaion.getPerPage());
			}
			query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
			List<Expense> expense = query.list();
			return expense;
		}catch(Exception ex){
			System.out.println("Error message: " + ex.getMessage());
		}
		return null;
	}

	@Override
	public List<ExpenseDetail> getExpenseDetail(int expId) {
		// TODO Auto-generated method stub
		SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery("SELECT expdet.expdetid, expdet.expid, expdet.descrition, expdet.expqty, expdet.unitprice, expdet.currentcy, ex.exprate, ex.totalamount as expamount, (expdet.unitprice * expdet.expqty) as total_amount "
				+ "FROM expense_detail expdet INNER JOIN expense ex on ex.expid = expdet.expid WHERE ex.expid = " + expId);
		query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
		List<ExpenseDetail> expenseDetail = query.list();
		return expenseDetail;
	}

}
