package com.rean.spring.hibernate.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.CustomerDao;
import com.rean.spring.hibernate.entities.Customer;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.service.CustomerService;

@Service
public class CustomerServiceImpl implements CustomerService {
	@Autowired
	private CustomerDao customerDao;

	@Override
	@Transactional
	public List<Customer> getCustomer(Pagination pagination, String str, boolean isPagination) {
		// TODO Auto-generated method stub
		return customerDao.getCustomer(pagination, str, isPagination);
	}

	@Override
	@Transactional
	public boolean saveCustomer(Customer customer) {
		// TODO Auto-generated method stub
		return customerDao.saveCustomer(customer);
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
