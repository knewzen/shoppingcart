package com.uae.web.model;

import java.math.BigDecimal;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class CommerceItem {

	@Id
	private String id;

	private String product_id;
	private Integer quantity;
	private Double amount;

	public String getId() {
		return id;
	}

	public CommerceItem(String product_id, Integer quantity,Double amount) {
		super();
		this.product_id = product_id;
		this.quantity = quantity;
		this.amount = (amount * quantity);
	}
	
	public CommerceItem(String product_id, Integer quantity) {
		super();
		this.product_id = product_id;
		this.quantity = quantity;
		this.amount = (quantity * 10.0);
	}


	public void setId(String id) {
		this.id = id;
	}

	public String getProduct_id() {
		return product_id;
	}

	public void setProduct_id(String product_id) {
		this.product_id = product_id;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

}
