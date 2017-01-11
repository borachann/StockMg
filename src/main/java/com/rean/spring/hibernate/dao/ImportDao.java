package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.form.FormProduct;

public interface ImportDao {

	public Boolean saveImportPro(List<FormProduct> formProduct);
	public List<Import> getImportPro(String startDate, String endDate);
}
