package com.rean.spring.hibernate.entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Category")
public class Category implements Serializable{
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="category_seq_id")
	@SequenceGenerator(name="category_seq_id", sequenceName="category_seq_id", allocationSize=1, initialValue=1)
	
	@Column(name="catId")
	private int catId;
	
	@Column
	private String catName;
	
	@Column
	private Boolean status;
	
	@OneToMany(mappedBy="category", cascade = CascadeType.ALL)
	private List<Product> listOfProduct = new ArrayList<Product>();

	public List<Product> getListOfProduct() {
		return listOfProduct;
	}

	public void setListOfProduct(List<Product> listOfProduct) {
		this.listOfProduct = listOfProduct;
	}

	public int getCatId() {
		return catId;
	}

	public void setCatId(int catId) {
		this.catId = catId;
	}

	public String getCatName() {
		return catName;
	}

	public void setCatName(String catName) {
		this.catName = catName;
	}

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}
}
