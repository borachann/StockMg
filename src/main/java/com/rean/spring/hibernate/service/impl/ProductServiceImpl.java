package com.rean.spring.hibernate.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.ProductDao;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Product;
import com.rean.spring.hibernate.service.ProductService;

@Service
public class ProductServiceImpl implements ProductService {

	@Autowired
	private ProductDao productDao;
	
	@Override
	@Transactional
	public List<Product> getAllProduct(Pagination pagination, String schStrName, boolean ispaging) {
		return productDao.getAllProduct(pagination, schStrName, ispaging);
	}

	@Override
	@Transactional
	public Boolean addProduct(Product product) {
		// TODO Auto-generated method stub
		 return productDao.addProduct(product);
	}

	@Override
	@Transactional
	public Boolean deleteProduct(int proId) {
		// TODO Auto-generated method stub
		return productDao.deleteProduct(proId);
	}

	@Override
	@Transactional
	public Boolean editProduct(Product product) {
		// TODO Auto-generated method stub
		return productDao.editProduct(product);
	}

	@Override
	@Transactional
	public Product showProduct(int proId) {
		// TODO Auto-generated method stub
		return productDao.showProduct(proId);
	}

}
