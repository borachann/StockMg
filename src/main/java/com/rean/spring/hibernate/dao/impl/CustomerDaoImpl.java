package com.rean.spring.hibernate.dao.impl;

import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.CustomerDao;
import com.rean.spring.hibernate.entities.Customer;
import com.rean.spring.hibernate.entities.Pagination;

@Repository
public class CustomerDaoImpl implements CustomerDao {
	@Autowired
	private SessionFactory sessionFacotry;
	
	@Override
	public List<Customer> getCustomer(Pagination pagination, String str, boolean isPagination) {
		// TODO Auto-generated method stub
		SQLQuery query = sessionFacotry.getCurrentSession().createSQLQuery("select * from customer where cusname like '%" + str + "%' and status ='t' ORDER BY cusname");
		if(isPagination){
			query.setFirstResult(pagination.offset());
			query.setMaxResults(pagination.getPerPage());
		}
		query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
		List<Customer> customer = query.list();
		return customer;
	}

	@Override
	public boolean saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		try{
			sessionFacotry.getCurrentSession().save(customer);
			return true;
		}catch(Exception ex){
			System.out.println("Error Massage: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public boolean deleteCustomer(int cusId) {
		// TODO Auto-generated method stub
		try{
			SQLQuery query = sessionFacotry.getCurrentSession().createSQLQuery("update customer set status ='f' where cusid = " + cusId);
			query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE).executeUpdate();
			return true;
		}catch(Exception ex){
			System.out.println("Error Message: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public boolean updateCustomer(Customer customer) {
		// TODO Auto-generated method stub
		try{
			sessionFacotry.getCurrentSession().update(customer);
			return true;
		}catch(Exception ex){
			System.out.println("Error Message: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public Customer getDetailCustomer(int cusId) {
		// TODO Auto-generated method stub
		return sessionFacotry.getCurrentSession().get(Customer.class, cusId);
	}

}
