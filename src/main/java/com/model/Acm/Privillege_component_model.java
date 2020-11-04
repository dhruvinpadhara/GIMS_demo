package com.model.Acm;

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
@Table(name="web_privillege_component")
public class Privillege_component_model implements Serializable{

	@Id @GeneratedValue
	@Column(length=4)
	private int cid;
	
	@Column(length=30)
	private String cname;
	
	@Column(length=30)
	private String clink;
	
	@OneToOne
	@JoinColumn(name="pid")
	private Privilege_model pid;
	
	@Column(length=1)
	private byte active_flag=0;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	public Privillege_component_model() {
		super();
	}

	public Privillege_component_model(int cid, String cname, String clink, Privilege_model pid) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.clink = clink;
		this.pid = pid;
	}

	public Privillege_component_model(String cname, String clink, Privilege_model pid) {
		super();
		this.cname = cname;
		this.clink = clink;
		this.pid = pid;
	}

	public Privillege_component_model(int cid) {
		super();
		this.cid = cid;
	}

	public int getCid() {
		return cid;
	}

	public String getCname() {
		return cname;
	}

	public String getClink() {
		return clink;
	}

	public Privilege_model getPid() {
		return pid;
	}

	public byte getActive_flag() {
		return active_flag;
	}
	
	
	
}
