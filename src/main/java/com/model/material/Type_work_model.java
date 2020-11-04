package com.model.material;

import java.io.Serializable;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="type_work")
public class Type_work_model implements Serializable{
	
	@Id
	@GeneratedValue
	private int type_work_id;
	
	@Column(length=10)
	private String short_name;
	
	@Column(length=25)
	private String work_name;

	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	@Column(length = 1)
	private byte active_flag = 0;
	
	public Type_work_model() {
		super();
	}

	public Type_work_model(int type_work_id, String short_name, String work_name) {
		super();
		this.type_work_id = type_work_id;
		this.short_name = short_name;
		this.work_name = work_name;
	}

	public Type_work_model(String short_name, String work_name) {
		super();
		this.short_name = short_name;
		this.work_name = work_name;
	}
	

	public Type_work_model(int type_work_id) {
		super();
		this.type_work_id = type_work_id;
	}

	public int getType_work_id() {
		return type_work_id;
	}

	public String getShort_name() {
		return short_name;
	}

	public String getWork_name() {
		return work_name;
	}

	public Time getCreated_date() {
		return created_date;
	}

	public byte getActive_flag() {
		return active_flag;
	}
	
	
	
}
