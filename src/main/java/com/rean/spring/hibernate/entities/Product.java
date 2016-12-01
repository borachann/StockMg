package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="products")
public class Product {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="product_seq_id")
	@SequenceGenerator(name="product_seq_id", sequenceName="product_seq_id", allocationSize = 1, initialValue = 1)
	
	@Column
	private int proId;
	
	@Column
	private String proName;
	
	//@Column
	@ManyToOne
	@JoinColumn(name="catId")
	private Category category;
	
	//private int unitId;
	@ManyToOne
	@JoinColumn(name="unitId")
	private Unit unit;
	
	public Unit getUnit() {
		return unit;
	}

	public void setUnit(Unit unit) {
		this.unit = unit;
	}

	@Column
	private BigDecimal proQty;
	
	@Column
	private BigDecimal costPrice;
	
	@Column 
	private BigDecimal salePrice;
	
	@Column
	private BigDecimal unitPrice;
	
	@Column
	private Boolean currentcy;
	
	public Boolean getCurrentcy() {
		return currentcy;
	}

	public void setCurrentcy(Boolean currentcy) {
		this.currentcy = currentcy;
	}

	@Column
	private String imgUrl;
	
	private Boolean status; 

	public Boolean getStatus() {
		return status;
	}

	public void setStatus(Boolean status) {
		this.status = status;
	}

	public int getProId() {
		return proId;
	}

	public void setProId(int proId) {
		this.proId = proId;
	}

	public String getProName() {
		return proName;
	}

	public void setProName(String proName) {
		this.proName = proName;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public BigDecimal getProQty() {
		return proQty;
	}

	public void setProQty(BigDecimal proQty) {
		this.proQty = proQty;
	}

	public BigDecimal getCostPrice() {
		return costPrice;
	}

	public void setCostPrice(BigDecimal costPrice) {
		this.costPrice = costPrice;
	}

	public BigDecimal getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(BigDecimal salePrice) {
		this.salePrice = salePrice;
	}

	public BigDecimal getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}

	public String getImgUrl() {
		return imgUrl;
	}

	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	} 
}
