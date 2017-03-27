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
@Table(name="tblUser")
public class TblUser {

	@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="user_seq_id")
	@SequenceGenerator(name="user_seq_id", sequenceName="user_seq_id", allocationSize=1, initialValue=1)
	
	private int userId;
	
	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public int getUserId() {
		return userId;
	}

	@Column(name="phone_numer")
	private String phoneNumber;
	
	@Column(name="address")
	private String Address;
	
	@Column(name="status")
	private boolean status;
	
	@Column(name="img")
	private String userImg;
	
	@Column(name="user_name")
	private String userName;
	
	@Column(name="user_password")
	private String userPassword;
	
	/*@OneToMany(mappedBy="customer", cascade=CascadeType.ALL)
	private List<OwedCustomer> owedCustomer = new ArrayList<OwedCustomer>();

	public int getCusId() {
		return userId;
	}*/

	public void setUserId(int cusId) {
		this.userId = cusId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String cusName) {
		this.userName = cusName;
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

	public String getUserImg() {
		return userImg;
	}

	public void setUserImg(String cusImg) {
		this.userImg = userImg;
	}

	/*public List<OwedCustomer> getOwedCustomer() {
		return owedCustomer;
	}

	public void setOwedCustomer(List<OwedCustomer> owedCustomer) {
		this.owedCustomer = owedCustomer;
	}*/
	
}
