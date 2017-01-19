package com.rean.spring.hibernate.form;

import java.math.BigDecimal;
import java.util.Date;

public class ExpenseForm {

	private int expId;
	private Date expDate;
	private String description;
	private BigDecimal totalAmount;
	private BigDecimal expRate;
	private int expDetId;
	private BigDecimal expQty;
	private String proName;
	private BigDecimal unitPrice;
	private Boolean currentcy;
	public int getExpId() {
		return expId;
	}
	public void setExpId(int expId) {
		this.expId = expId;
	}
	public Date getExpDate() {
		return expDate;
	}
	public void setExpDate(Date expDate) {
		this.expDate = expDate;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public BigDecimal getTotalAmount() {
		return totalAmount;
	}
	public void setTotalAmount(BigDecimal totalAmount) {
		this.totalAmount = totalAmount;
	}
	public BigDecimal getExpRate() {
		return expRate;
	}
	public void setExpRate(BigDecimal expRate) {
		this.expRate = expRate;
	}
	public int getExpDetId() {
		return expDetId;
	}
	public void setExpDetId(int expDetId) {
		this.expDetId = expDetId;
	}
	public String getProName() {
		return proName;
	}
	public void setProName(String proName) {
		this.proName = proName;
	}
	public BigDecimal getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}
	public Boolean getCurrentcy() {
		return currentcy;
	}
	public void setCurrentcy(Boolean currentcy) {
		this.currentcy = currentcy;
	}
	public BigDecimal getExpQty() {
		return expQty;
	}
	public void setExpQty(BigDecimal expQty) {
		this.expQty = expQty;
	}
	
}
