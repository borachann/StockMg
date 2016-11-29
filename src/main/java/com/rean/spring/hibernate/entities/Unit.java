package com.rean.spring.hibernate.entities;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="unit")
public class Unit implements Serializable{

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="unit_seq_id")
	@SequenceGenerator(name="unit_seq_id", sequenceName="unit_seq_id", allocationSize=1, initialValue=1)
	
	private int unitId;
	private BigDecimal qty;
	private String unitName;
	private String convertTo;
	private Boolean status; // pass from form is string not boolean hehe so it should 0 ,1 right?
	
	public Boolean isStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	@OneToMany(mappedBy="unit", cascade=CascadeType.ALL)
	private List<Product> products = new ArrayList<Product>();
	
 
	public List<Product> getProducts() {
		return products;
	}
	public void setProducts(List<Product> products) {
		this.products = products;
	}
	public int getUnitId() {
		return unitId;
	}
	public void setUnitId(int unitId) {
		this.unitId = unitId;
	}
	public BigDecimal getQty() {
		return qty;
	}
	public void setQty(BigDecimal qty) {
		this.qty = qty;
	}
	public String getUnitName() {
		return unitName;
	}
	public void setUnitName(String unitName) {
		this.unitName = unitName;
	}
	public String getConvertTo() {
		return convertTo;
	}
	public void setConvertTo(String convertTo) {
		this.convertTo = convertTo;
	}
	
	
}
