package com.rean.spring.hibernate.service;

import java.util.List;

import com.rean.spring.hibernate.entities.Import;
import com.rean.spring.hibernate.form.FormProduct;

public interface ImportService {

	public Boolean saveImportPro(List<FormProduct> formProduct);
	public List<Import> getImportPro(String startDate, String endDate);
}
