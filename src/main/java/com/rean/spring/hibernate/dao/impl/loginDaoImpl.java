package com.rean.spring.hibernate.dao.impl;

import javax.transaction.Transactional;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.LogicalExpression;
import org.hibernate.criterion.Restrictions;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.LogInDao;
import com.rean.spring.hibernate.entities.TblUser;

@Repository
public class loginDaoImpl implements LogInDao {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	@Transactional
	public TblUser loginUser(String userName, String userPass) {
		// TODO Auto-generated method stub
		Criteria criteria = sessionFactory.getCurrentSession().createCriteria(TblUser.class);
		//criteria.add(Restrictions.eq("user_name", userName)); 
		//criteria.add(Restrictions.eq("user_password", userPass)); 
		
		LogicalExpression andExp = Restrictions.and(Restrictions.eq("userName", userName), Restrictions.eq("userPassword", userPass));
		
		criteria.add(andExp);
		 
		return (TblUser) criteria.uniqueResult();
	}

}
