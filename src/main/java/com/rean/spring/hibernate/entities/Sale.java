package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="sale")
public class Sale {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="sale_seq_id")
	@SequenceGenerator(name="sale_seq_id", sequenceName="sale_seq_id", allocationSize=1, initialValue=1)
	
	private int saleId;
	private Date saleDate;
	private BigDecimal totalAmoount;
	private int saleDetailId;
	
	@OneToOne(mappedBy="sale")
	private SaleDetail saleDetail;
	
	public SaleDetail getSaleDetail() {
		return saleDetail;
	}
	public void setSaleDetail(SaleDetail saleDetail) {
		this.saleDetail = saleDetail;
	}
	public int getSaleId() {
		return saleId;
	}
	public void setSaleId(int saleId) {
		this.saleId = saleId;
	}
	public Date getSaleDate() {
		return saleDate;
	}
	public void setSaleDate(Date saleDate) {
		this.saleDate = saleDate;
	}
	public BigDecimal getTotalAmoount() {
		return totalAmoount;
	}
	public void setTotalAmoount(BigDecimal totalAmoount) {
		this.totalAmoount = totalAmoount;
	}
	public int getSaleDetailId() {
		return saleDetailId;
	}
	public void setSaleDetailId(int saleDetailId) {
		this.saleDetailId = saleDetailId;
	}
	
}
