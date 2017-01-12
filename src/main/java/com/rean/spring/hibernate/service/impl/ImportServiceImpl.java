package com.rean.spring.hibernate.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.ImportDao;
import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.entities.ImportDetail;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.FormProduct;
import com.rean.spring.hibernate.service.ImportService;

@Service
public class ImportServiceImpl implements ImportService {
	@Autowired
	private ImportDao importDao;
	
	@Override
	@Transactional
	public Boolean saveImportPro(List<FormProduct> formProduct) {
		// TODO Auto-generated method stub
		return importDao.saveImportPro(formProduct);
	}

	@Override
	@Transactional
	public List<Import> getImportPro(Pagination pagination, String startDate, String endDate, boolean isPagaination) {
		// TODO Auto-generated method stub
		return importDao.getImportPro(pagination,startDate, endDate, isPagaination);
	}

	@Override
	@Transactional
	public List<ImportDetail> getImportDetail(String impId) {
		// TODO Auto-generated method stub
		return importDao.getImportDetail(impId);
	}

}
