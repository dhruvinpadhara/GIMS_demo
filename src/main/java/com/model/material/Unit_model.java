package com.model.material;

import java.io.Serializable;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="unit")
public class Unit_model implements Serializable{
	
	@Id
	@GeneratedValue
	private int unit_id;
	
	@Column(length=10)
	private String unit_name;
	
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;
	
	@Column(length=1)
	private byte active_flag=0;

	public Unit_model() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public Unit_model(int unit_id) {
		super();
		this.unit_id = unit_id;
	}



	public Unit_model(int unit_id, String unit_name) {
		super();
		this.unit_id = unit_id;
		this.unit_name = unit_name;
	}

	public Unit_model(String unit_name) {
		super();
		this.unit_name = unit_name;
	}

	public int getUnit_id() {
		return unit_id;
	}

	public String getUnit_name() {
		return unit_name;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
}
