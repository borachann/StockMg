package com.rean.spring.hibernate.form;

import java.math.BigDecimal;

public class FormProduct {
	private String proName;
	private BigDecimal proQty;
	private BigDecimal salePrice;
	private BigDecimal unitPrice;
	private BigDecimal costPrice;
	private int unitId;
	private int catId;
	private int proId;
	public int getProId() {
		return proId;
	}
	public void setProId(int proId) {
		this.proId = proId;
	}
	private Boolean status;
	private Boolean currentcy;
	private String imgUrl;
	public String getProName() {
		return proName;
	}
	public void setProName(String proName) {
		this.proName = proName;
	}
	public BigDecimal getProQty() {
		return proQty;
	}
	public void setProQty(BigDecimal proQty) {
		this.proQty = proQty;
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
	public BigDecimal getCostPrice() {
		return costPrice;
	}
	public void setCostPrice(BigDecimal costPrice) {
		this.costPrice = costPrice;
	}
	public int getUnitId() {
		return unitId;
	}
	public void setUnitId(int unitId) {
		this.unitId = unitId;
	}
	public int getCatId() {
		return catId;
	}
	public void setCatId(int catId) {
		this.catId = catId;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public Boolean getCurrentcy() {
		return currentcy;
	}
	public void setCurrentcy(Boolean currentcy) {
		this.currentcy = currentcy;
	}
	public String getImgUrl() {
		return imgUrl;
	}
	public void setImgUrl(String imgUrl) {
		this.imgUrl = imgUrl;
	}
}
