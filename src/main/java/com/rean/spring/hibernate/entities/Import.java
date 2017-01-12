package com.rean.spring.hibernate.entities;


import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

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
@Table(name="import")
public class Import {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="imp_seq_id")
	@SequenceGenerator(name="imp_seq_id", sequenceName="imp_seq_id", allocationSize=1, initialValue=1)
	@Column(name="impid")
	
	private int impId;
	private Date impDate;
	private BigDecimal impAmount;
	private BigDecimal impRate;
	
	@OneToMany(mappedBy = "pk1.importProduct", cascade = CascadeType.ALL)
	private Set<ImportDetail> importDetail = new HashSet<ImportDetail>();
	
	
	public Set<ImportDetail> getImportDetail() {
		return importDetail;
	}
	public void setImportDetail(Set<ImportDetail> importDetail) {
		this.importDetail = importDetail;
	}
	public int getImpId() {
		return impId;
	}
	public void setImpId(int impId) {
		this.impId = impId;
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
	public BigDecimal getImpRate() {
		return impRate;
	}
	public void setImpRate(BigDecimal impRate) {
		this.impRate = impRate;
	}
}
