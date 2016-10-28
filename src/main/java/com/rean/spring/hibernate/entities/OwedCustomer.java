package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="owedcustomer")
public class OwedCustomer {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="cowed_cus_seq_id")
	@SequenceGenerator(name="cowed_cus_seq_id", sequenceName="cowed_cus_seq_id", allocationSize=1, initialValue=1)
	
	private int owedCusId;
//	private int cusId;
	private Date paidDate;
	private Date owedDate;
	private BigDecimal owedAmount;
	private Boolean status;
	@ManyToOne
	@JoinColumn(name="cusId")
	private Customer customer;
	public int getOwedCusId() {
		return owedCusId;
	}
	public void setOwedCusId(int owedCusId) {
		this.owedCusId = owedCusId;
	}
	public Date getPaidDate() {
		return paidDate;
	}
	public void setPaidDate(Date paidDate) {
		this.paidDate = paidDate;
	}
	public Date getOwedDate() {
		return owedDate;
	}
	public void setOwedDate(Date owedDate) {
		this.owedDate = owedDate;
	}
	public BigDecimal getOwedAmount() {
		return owedAmount;
	}
	public void setOwedAmount(BigDecimal owedAmount) {
		this.owedAmount = owedAmount;
	}
	public Boolean getStatus() {
		return status;
	}
	public void setStatus(Boolean status) {
		this.status = status;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
}
