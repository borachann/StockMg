package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="expense")
public class Expense {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="exp_seq_id")
	@SequenceGenerator(name="exp_seq_id", sequenceName="exp_seq_id", allocationSize=1, initialValue=1)
	
	private int expId;
	
	@Column(name="description")
	private String description;	
	private Date expDate;
	private BigDecimal totalAmount;
	private BigDecimal expRate;
	
	@OneToMany(mappedBy="expense", cascade=CascadeType.ALL, fetch=FetchType.LAZY)
	private Set<ExpenseDetail> expenseDetail = new HashSet<ExpenseDetail>();
	
	
	public Set<ExpenseDetail> getExpenseDetail() {
		return expenseDetail;
	}
	public void setExpenseDetail(Set<ExpenseDetail> expenseDetail) {
		this.expenseDetail = expenseDetail;
	}
	public int getExpId() {
		return expId;
	}
	public void setExpId(int expId) {
		this.expId = expId;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Date getExpDate() {
		return expDate;
	}
	public void setExpDate(Date expDate) {
		this.expDate = expDate;
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
	
}
