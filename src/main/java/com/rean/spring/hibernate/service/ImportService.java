package com.rean.spring.hibernate.service;

import java.util.List;

import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.entities.ImportDetail;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.FormProduct;

public interface ImportService {

	public Boolean saveImportPro(List<FormProduct> formProduct);
	public List<Import> getImportPro(Pagination pagination,String startDate, String endDate, boolean isPagination);
	public List<ImportDetail> getImportDetail(String impId);
	public Boolean updateImportPro(List<FormProduct> formProduct, int impId);
}
