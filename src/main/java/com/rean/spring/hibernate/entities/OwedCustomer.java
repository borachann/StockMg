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
@Table(name="owedcustomer")
public class OwedCustomer {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="cowed_cus_seq_id")
	@SequenceGenerator(name="cowed_cus_seq_id", sequenceName="cowed_cus_seq_id", allocationSize=1, initialValue=1)
	
	private int owedCusId;
	private int cusId;
	private Date paidDate;
	private Date owedDate;
	private BigDecimal owedAmount;
	private Boolean status;
}
