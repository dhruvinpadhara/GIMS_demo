package com.model.Account;

import java.io.Serializable;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="expense")
public class Expense_model implements Serializable{

	@Id
	@GeneratedValue
	private int expense_id;
	
	@Column(unique = true)
	private String party_code;

	@Column(length = 30)
	private String expense_name;

	@OneToOne
	@JoinColumn(name = "account_id")
	private Account_model accountId;

	@OneToOne
	@JoinColumn(name = "group_id")
	private Group_model groupId;

	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	@Column(length = 1)
	private byte active_flag = 0;

	public Expense_model() {
		super();
	}

	
	public Expense_model(int expense_id) {
		super();
		this.expense_id = expense_id;
	}

	public Expense_model(String party_code, String expense_name, Account_model accountId, Group_model groupId) {
		super();
		this.party_code = party_code;
		this.expense_name = expense_name;
		this.accountId = accountId;
		this.groupId = groupId;
	}

	public Expense_model(int expense_id, String party_code, String expense_name, Account_model accountId,
			Group_model groupId) {
		super();
		this.expense_id = expense_id;
		this.party_code = party_code;
		this.expense_name = expense_name;
		this.accountId = accountId;
		this.groupId = groupId;
	}

	public int getExpense_id() {
		return expense_id;
	}

	public String getParty_code() {
		return party_code;
	}

	public String getExpense_name() {
		return expense_name;
	}


	public Account_model getAccountId() {
		return accountId;
	}

	public Group_model getGroupId() {
		return groupId;
	}

	public Time getCreated_date() {
		return created_date;
	}

	public byte getActive_flag() {
		return active_flag;
	}	
	
	
	
}
