package com.rean.spring.hibernate.entities;

import java.util.ArrayList;
import java.util.List;

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
@Table(name="Customer")
public class Customer {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="cus_seq_id")
	@SequenceGenerator(name="cus_seq_id", sequenceName="cus_seq_id", allocationSize=1, initialValue=1)
	
	private int cusId;
	private String cusName;
	
	@Column(name="phone_numer")
	private String phoneNumber;
	
	@Column(name="address")
	private String Address;
	
	@Column(name="status")
	private boolean status;
	
	@Column(name="img")
	private String cusImg;
	
	@OneToMany(mappedBy="customer", cascade=CascadeType.ALL)
	private List<OwedCustomer> owedCustomer = new ArrayList<OwedCustomer>();

	public int getCusId() {
		return cusId;
	}

	public void setCusId(int cusId) {
		this.cusId = cusId;
	}

	public String getCusName() {
		return cusName;
	}

	public void setCusName(String cusName) {
		this.cusName = cusName;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return Address;
	}

	public void setAddress(String address) {
		Address = address;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public String getCusImg() {
		return cusImg;
	}

	public void setCusImg(String cusImg) {
		this.cusImg = cusImg;
	}

	public List<OwedCustomer> getOwedCustomer() {
		return owedCustomer;
	}

	public void setOwedCustomer(List<OwedCustomer> owedCustomer) {
		this.owedCustomer = owedCustomer;
	}
	
}
