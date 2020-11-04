package com.model.Location;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="state")
public class State_model implements Serializable{

	@Id
	@GeneratedValue
	@Column(length=8)
	private int sid;
	
	@Column(length=25)
	private String sname;
	
	@Column(length=1)
	private byte active_flag=0;
	
	public State_model() {
		super();
	}
	

	public State_model(int sid) {
		super();
		this.sid = sid;
	}


	public State_model(int sid, String sname) {
		super();
		this.sid = sid;
		this.sname = sname;
	}

	public State_model(String sname) {
		super();
		this.sname = sname;
	}

	public int getSid() {
		return sid;
	}

	public String getSname() {
		return sname;
	}
	
	
}
