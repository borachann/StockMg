package com.rean.spring.hibernate.dao.impl;

import java.util.Date;
import java.util.List;

import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.ImportDao;
import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.entities.ImportDetail;
import com.rean.spring.hibernate.entities.Pagination;
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
		importPro.setImpRate(formProduct.get(0).getImpRate());
		importPro.setImpAmount(formProduct.get(0).getTotalAmount());
		sessionFactory.getCurrentSession().save(importPro);
		return true;
		}catch(Exception ex){
			System.out.println("Eorror Message: " + ex.getMessage());
		}
		return false;
	}

	@Override
	public List<Import> getImportPro(Pagination pagination, String startDate, String endDate, boolean isPagination) {
		// TODO Auto-generated method stub
		SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery("SELECT impid, impamount, to_char(impdate,'YYYY-MM-DD HH:MI AM') as impdate "
				+ "FROM import WHERE to_char(impdate,'YYYY-MM-DD') >= '" + startDate + "' and to_char(impdate,'YYYY-MM-DD') <= '" + endDate +"' ORDER BY impdate DESC");
		if(isPagination){
			query.setFirstResult(pagination.offset());
			query.setMaxResults(pagination.getPerPage());
		}
		query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
		List<Import> importPro = query.list(); 
		return importPro;
	}

	@Override
	public List<ImportDetail> getImportDetail(String impId) {
		// TODO Auto-generated method stub
		
		SQLQuery query = sessionFactory.getCurrentSession().createSQLQuery("select pro.proid, pro.proname, pro.currentcy, (impdet.unitprice * impdet.proqty) as total_amount, "
				+ "uni.unitname, uni.qty as unitqty, impdet.impid, impdet.proqty, impdet.unitprice, imp.impamount, imp.imprate "
				+ " FROM importdetail impdet INNER JOIN products pro on pro.proid = impdet.proid INNER JOIN unit uni ON pro.unitid = uni.unitid INNER JOIN import imp on imp.impid = impdet.impid WHERE impdet.impid = " + impId);
		query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
		List<ImportDetail> importDetail = query.list();
		return importDetail;
	}

}
