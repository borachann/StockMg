package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Customer;
import com.rean.spring.hibernate.entities.Pagination;

public interface CustomerDao {

	public List<Customer> getCustomer(Pagination pagination, String str, boolean isPagination);
	public boolean saveCustomer(Customer customer);
	public boolean deleteCustomer(int cusId);
	public boolean updateCustomer(Customer customer, int cusId);
	public boolean getDetailCustomer(int cusId);
}
