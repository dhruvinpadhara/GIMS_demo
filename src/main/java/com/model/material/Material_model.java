package com.model.material;

import java.io.Serializable;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="material")
public class Material_model implements Serializable{

	@Id
	@GeneratedValue
	private int material_id;
	
	@Column(length=30)
	private String material_name;
	
	@Column(length=30)
	private String material_desc;
	
	@Column(length=1)
	private byte active_flag=0;
	
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	public Material_model() {
		super();
	}

	public Material_model(int material_id, String material_name, String material_desc) {
		super();
		this.material_id = material_id;
		this.material_name = material_name;
		this.material_desc = material_desc;
	}

	public Material_model(String material_name, String material_desc) {
		super();
		this.material_name = material_name;
		this.material_desc = material_desc;
	}

	public Material_model(int material_id) {
		super();
		this.material_id = material_id;
	}

	public int getMaterial_id() {
		return material_id;
	}

	public String getMaterial_name() {
		return material_name;
	}

	public String getMaterial_desc() {
		return material_desc;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
	
	
}
