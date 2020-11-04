package com.model.Acm;

import java.io.Serializable;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="web_privilege")
public class Privilege_model implements Serializable{
	
	@Id
	@GeneratedValue
	@Column(length=3)
	private int pid;
	
	@Column(length=15)
	private String pname;
	
	@Column(length=15)
	private String location;
	
	@Column(length=30)
	private String font_code;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;
	
	@Column(length=1)
	private byte active_flag=0;
	
	public Privilege_model() {
		super();
	}
	
	public Privilege_model(int pid, String pname, String location, String font_code) {
		super();
		this.pid = pid;
		this.pname = pname;
		this.location = location;
		this.font_code = font_code;
	}

	public Privilege_model(String pname, String location, String font_code) {
		super();
		this.pname = pname;
		this.location = location;
		this.font_code = font_code;
	}

	public Privilege_model(int pid) {
		super();
		this.pid = pid;
	}

	public int getPid() {
		return pid;
	}

	public String getPname() {
		return pname;
	}

	public String getFont_code() {
		return font_code;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public String getLocation() {
		return location;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
}
