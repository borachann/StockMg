package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.entities.ImportDetail;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.form.FormProduct;

public interface ImportDao {

	public Boolean saveImportPro(List<FormProduct> formProduct);
	public List<Import> getImportPro(Pagination pagination, String startDate, String endDate, boolean isPagination);
	public List<ImportDetail> getImportDetail(String impId);
}
