package com.rean.spring.hibernate.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.CategoryDao;
import com.rean.spring.hibernate.entities.Category;
import com.rean.spring.hibernate.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService{

	@Autowired
	private CategoryDao categoryDao;

	@Override
	@Transactional
	public List<Category> getAllCategory() {
		// TODO Auto-generated method stub
		
		return categoryDao.getAllCategory();
	}

	@Override
	@Transactional
	public boolean insertCategory(Category category) {
		// TODO Auto-generated method stub
		Boolean b = categoryDao.insertCategory(category);
		return b;
	}

	@Override
	@Transactional
	public boolean deleteCategory(int catId) {
		// TODO Auto-generated method stub
		return categoryDao.deleteCategory(catId);
	}

	@Override
	@Transactional
	public boolean updateCategory(Category category, int catId) {
		// TODO Auto-generated method stub
		return categoryDao.updateCategory(category, catId);
	}

	@Override
	@Transactional
	public Category searchCategory(int catId) {
		// TODO Auto-generated method stub
		return categoryDao.searchCategory(catId);
	}
	
	
 
}
