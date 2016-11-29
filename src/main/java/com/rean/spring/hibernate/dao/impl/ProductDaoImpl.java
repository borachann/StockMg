package com.rean.spring.hibernate.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.ProductDao;
import com.rean.spring.hibernate.entities.Product;

@Repository
public class ProductDaoImpl implements ProductDao {
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public List<Product> getAllProduct() {
		// TODO Auto-generated method stub
		return sessionFactory.getCurrentSession().createQuery("from Product").getResultList(); // sam ah sam ey? query product 
		 
	}

}
