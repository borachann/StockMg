package com.rean.spring.hibernate.dao.impl;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.CategoryDao;
import com.rean.spring.hibernate.entities.Category;

@Repository
public class CategoryDaoImpl implements CategoryDao{
	
	@Autowired
	private SessionFactory session;

	@Override
	public List<Category> getAllCategory() {
		// TODO Auto-generated method stub
		
		return session.getCurrentSession().createQuery("from Category").list();
	}

	@Override
	public boolean insertCategory(Category category) {
		// TODO Auto-generated method stub
		try{ 
			session.getCurrentSession().save(category);
			return true;
		}catch(Exception ex){
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean deleteCategory(int catId) {
		// TODO Auto-generated method stub
		try{
			Category category = session.getCurrentSession().get(Category.class, catId);
			session.getCurrentSession().delete(category);
			return true;
		}catch(Exception ex){
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean updateCategory(Category category, int catId) {
		try{
			Category cate = session.getCurrentSession().get(Category.class, catId);
			cate.setCatName(category.getCatName());
			cate.setStatus(category.getStatus());
			session.getCurrentSession().update(cate);
			return true;
		}catch(Exception ex){
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
		return false;
	}

	@Override
	public Category searchCategory(int catId) {
		// TODO Auto-generated method stub
		//return session.getCurrentSession().createQuery("from Category where catId = " + catId).list();
		
		return  session.getCurrentSession().get(Category.class, catId);
	}
	
}
