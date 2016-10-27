package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Category;

public interface CategoryDao {

	public List<Category> getAllCategory();
	public boolean insertCategory(Category category);
	public boolean deleteCategory(int catId);
	public boolean updateCategory(Category category, int catId);
	public Category searchCategory(int catId);
}
