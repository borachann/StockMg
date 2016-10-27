package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Product;

public interface ProductDao {

	public List<Product> getAllProduct();
}
