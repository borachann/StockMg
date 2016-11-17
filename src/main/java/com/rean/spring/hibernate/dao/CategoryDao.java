package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Category;
import com.rean.spring.hibernate.entities.Pagination;

public interface CategoryDao {

	public List<Category> getAllCategory(Pagination pagination, String schCatName, boolean isPagination);
	public boolean insertCategory(Category category);
	public boolean deleteCategory(int catId);
	public boolean updateCategory(Category category, int catId);
	public Category searchCategory(int catId);
}
