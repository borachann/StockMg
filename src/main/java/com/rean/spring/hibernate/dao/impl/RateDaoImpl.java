package com.rean.spring.hibernate.dao.impl;

import java.math.BigDecimal;

import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.RateDao;
import com.rean.spring.hibernate.entities.Rate;

@Repository
public class RateDaoImpl implements RateDao{
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public Boolean createRate() {
		// TODO Auto-generated method stub
		Rate rate = new Rate();
		rate.setRateMoney(new BigDecimal("0"));
		try{
			sessionFactory.getCurrentSession().save(rate);
			return true;
		}catch(Exception ex){
			ex.printStackTrace();
			System.out.println("Error message: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public Boolean updateRate(Rate rate) {
		// TODO Auto-generated method stub
		try{
			sessionFactory.getCurrentSession().update(rate);
			return true;
		}catch(Exception ex){
			ex.printStackTrace();
			System.out.println("Error Message: " + ex.getMessage());
		}
		return false;
	}

}
