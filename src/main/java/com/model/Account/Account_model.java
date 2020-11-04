package com.model.Account;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="account")
public class Account_model implements Serializable{

	@Id
	@GeneratedValue
	private int account_id;
	
	@Column(length=20)
	private String account_name;
	
	@Column(length=20)
	private String account_desc;
	
	@Column(length=1)
	private byte active_flag=0;

	public Account_model() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Account_model(String account_name, String account_desc) {
		super();
		this.account_name = account_name;
		this.account_desc = account_desc;
	}

	public Account_model(int account_id, String account_name, String account_desc) {
		super();
		this.account_id = account_id;
		this.account_name = account_name;
		this.account_desc = account_desc;
	}

	public int getAccount_id() {
		return account_id;
	}

	public String getAccount_name() {
		return account_name;
	}

	public String getAccount_desc() {
		return account_desc;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Account_model(int account_id) {
		super();
		this.account_id = account_id;
	}
	
}
