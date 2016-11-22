package com.rean.spring.hibernate.dao.impl;

import java.util.List;
import java.util.Map;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Order;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.CategoryDao;
import com.rean.spring.hibernate.entities.Category;
import com.rean.spring.hibernate.entities.Pagination;

@Repository
public class CategoryDaoImpl implements CategoryDao{
	
	@Autowired
	private SessionFactory session;

	@SuppressWarnings("deprecation")
	@Override
	public List<Category> getAllCategory(Pagination pagination, String schCatName, boolean isPagignation) {
		
	//createQuery
		//return session.getCurrentSession().createQuery("from Category").list(); 
		
	//createCriteria
		/*Criteria criteria = session.getCurrentSession().createCriteria(Category.class);
		if(isPagignation){
			criteria.setFirstResult(pagination.offset());
			criteria.setMaxResults(pagination.getPerPage());
		}
		
		criteria.addOrder(Order.desc("catName"));
		List<Category> category = criteria.list();
		
		return category;
		*/
	//creaetSQLQuery
		SQLQuery query = session.getCurrentSession().createSQLQuery("select * from category where status ='t' and catname like '%" + schCatName + "%' ORDER BY catname DESC");
		if(isPagignation){
			query.setFirstResult(pagination.offset());
			query.setMaxResults(pagination.getPerPage());
		}
		query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
		List<Category> category = query.list();
		return category;
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
			/*Category category = session.getCurrentSession().get(Category.class, catId);
			session.getCurrentSession().delete(category);*/
			SQLQuery query = session.getCurrentSession().createSQLQuery("update category set status ='f' where catId = " + catId);
			query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
			query.executeUpdate();
			
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
