package com.model.Account;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="group_type")
public class Group_model implements Serializable{

	@Id
	@GeneratedValue
	@Column(length=8)
	private int group_id;
	
	@Column(length=30)
	private String group_name;
	
	@Column(length=20)
	private String group_code;
	
	@Column(length=30)
	private String group_desc;
	
	@Column(length=1)
	private byte active_flag=0;

	
	public Group_model() {
		super();
	}

	public Group_model(int group_id) {
		super();
		this.group_id = group_id;
	}

	public Group_model(int group_id, String group_name, String group_code, String group_desc) {
		super();
		this.group_id = group_id;
		this.group_name = group_name;
		this.group_code = group_code;
		this.group_desc = group_desc;
	}

	public Group_model(String group_name, String group_code, String group_desc) {
		super();
		this.group_name = group_name;
		this.group_code = group_code;
		this.group_desc = group_desc;
	}


	public int getGroup_id() {
		return group_id;
	}

	public String getGroup_name() {
		return group_name;
	}

	public String getGroup_code() {
		return group_code;
	}

	public String getGroup_desc() {
		return group_desc;
	}

	public byte getActive_flag() {
		return active_flag;
	}
	
}
