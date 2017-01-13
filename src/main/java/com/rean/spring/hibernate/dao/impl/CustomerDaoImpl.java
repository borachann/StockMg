package com.rean.spring.hibernate.dao.impl;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.CustomerDao;
import com.rean.spring.hibernate.entities.Customer;
import com.rean.spring.hibernate.entities.Pagination;

@Repository
public class CustomerDaoImpl implements CustomerDao {

	@Override
	public List<Customer> getCustomer(Pagination pagination, String str, boolean isPagination) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteCustomer(int cusId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updateCustomer(Customer customer, int cusId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean getDetailCustomer(int cusId) {
		// TODO Auto-generated method stub
		return false;
	}

}
