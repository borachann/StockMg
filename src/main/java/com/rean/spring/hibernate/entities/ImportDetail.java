package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="importdetail")
public class ImportDetail {
	
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="imp_det_seq_id")
	@SequenceGenerator(name="imp_det_seq_id", sequenceName="imp_det_seq_id", allocationSize=1, initialValue=1)
	
	private int impDetId;
	private int impId;
	private int proId;
	private BigDecimal proQty;
	private BigDecimal unitPrice;
	public int getImpDetId() {
		return impDetId;
	}
	public void setImpDetId(int impDetId) {
		this.impDetId = impDetId;
	}
	public int getImpId() {
		return impId;
	}
	public void setImpId(int impId) {
		this.impId = impId;
	}
	public int getProId() {
		return proId;
	}
	public void setProId(int proId) {
		this.proId = proId;
	}
	public BigDecimal getProQty() {
		return proQty;
	}
	public void setProQty(BigDecimal proQty) {
		this.proQty = proQty;
	}
	public BigDecimal getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(BigDecimal unitPrice) {
		this.unitPrice = unitPrice;
	}
	
	
	

}
