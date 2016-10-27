package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="saleDetail")
public class SaleDetail {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="sale_det_seq_id")
	@SequenceGenerator(name="sale_det_seq_id", sequenceName="sale_det_seq_id", allocationSize=1, initialValue=1)
	
	private int saleDetId;
	private int proId;
	private int proQty;
	private String proComment;
	private BigDecimal pro_unit_price;
	public int getSaleDetId() {
		return saleDetId;
	}
	public void setSaleDetId(int saleDetId) {
		this.saleDetId = saleDetId;
	}
	public int getProId() {
		return proId;
	}
	public void setProId(int proId) {
		this.proId = proId;
	}
	public int getProQty() {
		return proQty;
	}
	public void setProQty(int proQty) {
		this.proQty = proQty;
	}
	public String getProComment() {
		return proComment;
	}
	public void setProComment(String proComment) {
		this.proComment = proComment;
	}
	public BigDecimal getPro_unit_price() {
		return pro_unit_price;
	}
	public void setPro_unit_price(BigDecimal pro_unit_price) {
		this.pro_unit_price = pro_unit_price;
	}
	
	
}
