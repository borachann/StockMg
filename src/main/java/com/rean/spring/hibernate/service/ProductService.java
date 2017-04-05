package com.rean.spring.hibernate.service;

import java.util.List;

import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Product;

public interface ProductService {

	public List<Product> getAllProduct(Pagination pagination, String schStrName, boolean ispaging);
	public Boolean addProduct(Product product);
	public Boolean deleteProduct(int proId, Boolean isSale);
	public Boolean editProduct(Product product);
	public Product showProduct(int proId);
	public List<Product> searchProduct(String catId, String proName);
}
