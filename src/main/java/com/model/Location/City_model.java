package com.model.Location;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="city")
public class City_model implements Serializable{

	@Id
	@GeneratedValue
	@Column(length=8)
	private int cid;
	
	@Column(length=20)
	private String cname;
	
	@OneToOne
	@JoinColumn(name="sid")
	private State_model sid;
	
	@Column(length=1)
	private byte active_flag=0;

	public City_model() {
		super();
	}

	public City_model(int cid, String cname, State_model sid) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.sid = sid;
	}

	public City_model(String cname, State_model sid) {
		super();
		this.cname = cname;
		this.sid = sid;
	}

	public City_model(int cid) {
		this.cid = cid;
	}

	public int getCid() {
		return cid;
	}

	public String getCname() {
		return cname;
	}

	public State_model getSid() {
		return sid;
	}

	public byte getActive_flag() {
		return active_flag;
	}
	
	
}
