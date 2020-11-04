package com.model.Acm;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="role")
public class Role_model implements Serializable{

	@Id
	@GeneratedValue
	@Column(length=3)
	private int rid;
	
	@Column(length=20)
	private String rname;
	
	@Column(length=30)
	private String rdesc;
	
	@Column(length=1)
	private byte active_flag=0;

	public Role_model(int rid, String rname, String rdesc) {
		super();
		this.rid = rid;
		this.rname = rname;
		this.rdesc = rdesc;
	}

	public Role_model() {
		super();
	}

	public Role_model(String rname, String rdesc) {
		super();
		this.rname = rname;
		this.rdesc = rdesc;
	}

	public Role_model(int rid) {
		super();
		this.rid = rid;
	}

	public int getRid() {
		return rid;
	}

	public String getRname() {
		return rname;
	}

	public String getRdesc() {
		return rdesc;
	}

	public byte getActive_flag() {
		return active_flag;
	}
	
	
}
