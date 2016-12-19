package com.rean.spring.hibernate.dao.impl;

import java.util.List;
import java.util.concurrent.Exchanger;

import org.hibernate.Criteria;
import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.ProductDao;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Product;

@Repository
public class ProductDaoImpl implements ProductDao {
	
	@Autowired
	private SessionFactory sessionFactory;

	@Override
	public List<Product> getAllProduct(Pagination pagination, String schStrName, boolean isPagination) {
		// TODO Auto-generated method stub
		
		SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery("select " 
        + "pro.proId, pro.currentcy, pro.catId, pro.costPrice, pro.imgUrl, pro.proName, pro.proQty, pro.salePrice, pro.status, pro.unitId, pro.unitPrice," 
        + " cat.catName, unit.convertTo, unit.qty, unit.unitName" 
        + " from products pro left outer join Category cat on pro.catId=cat.catId left outer join unit unit on pro.unitId=unit.unitId where pro.proname like '%" + schStrName + "%' ORDER BY pro.status DESC, pro.proname");
		if(isPagination){
			query.setFirstResult(pagination.offset());
			query.setMaxResults(pagination.getPerPage());
		}
		query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
		List<Product> product = query.list(); 
		return product;
		/*Session session = sessionFactory.getCurrentSession();
		Criteria criteria = session.createCriteria(Product.class);
		List<Product> product = criteria.list();
		session.flush();
		return product;*/
	}

	@Override
	public Boolean addProduct(Product product) {
		// TODO Auto-generated method stub
		try{
			sessionFactory.getCurrentSession().save(product);
			return true;
		}catch(Exception ex){
			System.out.println("Error Message: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public Boolean deleteProduct(int proId) {
		// TODO Auto-generated method stub
		try{
			sessionFactory.getCurrentSession().createSQLQuery("update products set status = false where proid =" + proId).executeUpdate();
			return true;
		}catch(Exception ex){
			ex.printStackTrace();
			System.out.println("Error meassage: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public Boolean editProduct(Product product) {
		// TODO Auto-generated method stub
		try{
			sessionFactory.getCurrentSession().update(product);
			return true;
		}catch(Exception ex){
			ex.printStackTrace();
			System.out.println("error message: " + ex.getMessage());
		}
		return null;
	}

	@Override
	public Product showProduct(int proId) {
		// TODO Auto-generated method stub
		
		return sessionFactory.getCurrentSession().get(Product.class, proId);
	}
}
