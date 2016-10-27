package com.rean.spring.hibernate.entities;


import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="import")
public class Import {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="imp_seq_id")
	@SequenceGenerator(name="imp_seq_id", sequenceName="imp_seq_id", allocationSize=1, initialValue=1)
	
	private int imId;
	private Date impDate;
	private BigDecimal impAmount;
	public int getImId() {
		return imId;
	}
	public void setImId(int imId) {
		this.imId = imId;
	}
	public Date getImpDate() {
		return impDate;
	}
	public void setImpDate(Date impDate) {
		this.impDate = impDate;
	}
	public BigDecimal getImpAmount() {
		return impAmount;
	}
	public void setImpAmount(BigDecimal impAmount) {
		this.impAmount = impAmount;
	}
}
