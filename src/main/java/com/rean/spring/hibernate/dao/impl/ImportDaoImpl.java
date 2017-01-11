package com.rean.spring.hibernate.dao.impl;

import java.math.BigDecimal;
import java.util.Date;
import java.util.List;
import java.util.Set;
import java.util.Map;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.ImportDao;
import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.entities.ImportDetail;
import com.rean.spring.hibernate.entities.Product;
import com.rean.spring.hibernate.form.FormProduct;


@Repository
public class ImportDaoImpl implements ImportDao {
	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public Boolean saveImportPro(List<FormProduct> formProduct) {
		// TODO Auto-generated method stub
//		BigDecimal impAmount = new BigDecimal('0');
		try{
		Import importPro = new Import(); 
		importPro.setImpDate(new Date());
		
		System.out.println("size of import product: " + formProduct.size());
		
		for(int i=0; i<formProduct.size(); i++){
			ImportDetail importDetail = new ImportDetail();
			Product product = sessionFactory.getCurrentSession().get(Product.class, formProduct.get(i).getProId());

			importDetail.setProduct(product);
			importDetail.setImportProduct(importPro);
//			importDetail.setProId(formProduct.get(i).getProId());
			importDetail.setProQty(formProduct.get(i).getProQty());
			importDetail.setUnitPrice(formProduct.get(i).getCostPrice());
			
			product.setCostPrice(formProduct.get(i).getCostPrice());
			product.setProQty(product.getProQty().add(formProduct.get(i).getProQty().multiply(formProduct.get(i).getUnitQty())));
			
			sessionFactory.getCurrentSession().update(product);
			
			importPro.getImportDetail().add(importDetail);
			
//			impAmount = impAmount.add((formProduct.get(i).getProQty()).multiply(formProduct.get(i).getCostPrice()));
		}
		
		importPro.setImpAmount(formProduct.get(0).getTotalAmount());
		sessionFactory.getCurrentSession().save(importPro);
		return true;
		}catch(Exception ex){
			System.out.println("Eorror Message: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public List<Import> getImportPro(String startDate, String endDate) {
		// TODO Auto-generated method stub
		return null;
	}

}
