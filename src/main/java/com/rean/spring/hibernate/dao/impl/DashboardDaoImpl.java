package com.rean.spring.hibernate.dao.impl;

import java.math.BigDecimal;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.DashboardDao;
import com.rean.spring.hibernate.entities.Rate;

@Repository
public class DashboardDaoImpl implements DashboardDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Long> getStockProduct() {
		// TODO Auto-generated method stub
		try{
			SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery("select sum(unitprice) as amount from products group by currentcy order by currentcy");
			query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
			return query.list();
		}catch(Exception ex){
			ex.printStackTrace();
			System.out.println(ex.getMessage());
		}
		return null;
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
	public Rate getRate() {
		try{
			return (Rate) sessionFactory.getCurrentSession().createCriteria(Rate.class).uniqueResult();
		}catch(Exception ex){
			ex.printStackTrace();
			System.out.println("Error message: " + ex.getMessage());
		}
		return null;
		// TODO Auto-generated method stub
		
	}

}
