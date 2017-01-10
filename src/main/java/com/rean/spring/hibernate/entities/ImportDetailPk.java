package com.rean.spring.hibernate.entities;

import java.io.Serializable;

import javax.persistence.CascadeType;
import javax.persistence.Embeddable;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;

@Embeddable
public class ImportDetailPk implements Serializable{

	private static final long serialVersionUID = 1L;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Product product;
	
	@ManyToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	private Import importProduct;

	public Import getImportProduct() {
		return importProduct;
	}

	public void setImportProduct(Import importProduct) {
		this.importProduct = importProduct;
	}

	public Product getProduct() {
		return product;
	}

	public void setProduct(Product product) {
		this.product = product;
	}
	
}
