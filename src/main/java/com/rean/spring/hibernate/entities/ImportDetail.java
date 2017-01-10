package com.rean.spring.hibernate.entities;

import java.math.BigDecimal;

import javax.persistence.AssociationOverride;
import javax.persistence.AssociationOverrides;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="importdetail")
@AssociationOverrides({
	@AssociationOverride(name = "pk1.importProduct", 
		joinColumns = @JoinColumn(name = "impid")),
	@AssociationOverride(name = "pk1.product", 
		joinColumns = @JoinColumn(name = "proid")) })
public class ImportDetail {
	
	/*@Id
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="imp_det_seq_id")
	@SequenceGenerator(name="imp_det_seq_id", sequenceName="imp_det_seq_id", allocationSize=1, initialValue=1)*/
	
	@EmbeddedId
	private ImportDetailPk pk1 = new ImportDetailPk();
	
	//private int impDetId;
	//private int impId;
	//private int proId;
	private BigDecimal proQty;
	private BigDecimal unitPrice;
	
	/*@OneToOne
	@JoinColumn(name="impId")
	private Import imported;*/
	
	/*public Import getImported() {
		return imported;
	}
	public void setImported(Import imported) {
		this.imported = imported;
	}*/
	/*public int getImpDetId() {
		return impDetId;
	}
	public void setImpDetId(int impDetId) {
		this.impDetId = impDetId;
	}*/
	/*public int getProId() {
		return proId;
	}
	public void setProId(int proId) {
		this.proId = proId;
	}*/
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
	
	@Transient
	public Product getProduct(){
		return pk1.getProduct();
	}
	
	public void setProduct(Product product) {
		this.pk1.setProduct(product);
	}
	
	@Transient
	public Import getImportProduct(){
		return pk1.getImportProduct();
	}

	public void setImportProduct(Import importProduct){
		this.pk1.setImportProduct(importProduct);
	}
	

}
