package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table(name="Rate")
public class Rate {
	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="rate_seq_id")
	@SequenceGenerator(name="rate_seq_id", sequenceName="rate_seq_id", allocationSize=1, initialValue=1)
	
	@Column(name="rateId")
	private int rateId;
	
	public int getRateId() {
		return rateId;
	}

	public void setRateId(int rateId) {
		this.rateId = rateId;
	}

	@Column(name="rate_money")
	private BigDecimal rateMoney;

	public BigDecimal getRateMoney() {
		return rateMoney;
	}

	public void setRateMoney(BigDecimal rateMoney) {
		this.rateMoney = rateMoney;
	}
}
