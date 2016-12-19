package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Product;

public interface ProductDao {

	public List<Product> getAllProduct(Pagination pagination, String schStrName, boolean ispaging);
	public Boolean addProduct(Product product);
	public Boolean deleteProduct(int proId, Boolean status);
	public Boolean editProduct(Product product);
	public Product showProduct(int proId);
}
