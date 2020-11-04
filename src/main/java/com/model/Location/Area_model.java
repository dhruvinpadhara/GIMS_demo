package com.model.Location;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="area")
public class Area_model implements Serializable{
	@Id @GeneratedValue
	private int aid;
	
	@Column(length=30)
	private String aname;
	
	@Column(length=6)
	private int pincode;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="sid")
	private State_model sid;
	
	@OneToOne(fetch=FetchType.LAZY)
	@JoinColumn(name="cid")
	private City_model cid;
	
	@Column(length=1)
	private byte active_flag=0;


	public Area_model() {
		super();
	}


	public Area_model(String aname, int pincode, State_model sid, City_model cid) {
		super();
		this.aname = aname;
		this.pincode = pincode;
		this.sid = sid;
		this.cid = cid;
	}


	public Area_model(int aid, String aname, int pincode, State_model sid, City_model cid) {
		super();
		this.aid = aid;
		this.aname = aname;
		this.pincode = pincode;
		this.sid = sid;
		this.cid = cid;
	}


	public Area_model(int aid) {
		super();
		this.aid = aid;
	}


	public int getAid() {
		return aid;
	}


	public String getAname() {
		return aname;
	}


	public int getPincode() {
		return pincode;
	}


	public State_model getSid() {
		return sid;
	}


	public City_model getCid() {
		return cid;
	}


	public byte getActive_flag() {
		return active_flag;
	}

	
	
}
