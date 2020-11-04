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
@Table(name="web_priv_comp_comp")
public class Privilege_comp_comp_model implements Serializable{
	
	@Id
	@GeneratedValue
	@Column(length=3)
	private int pccid;
	
	@Column(length=25)
	private String cname;
	
	@Column(length=25)
	private String clink;
	
	@OneToOne
	@JoinColumn(name="pid")
	private Privilege_model pid;
	
	@OneToOne
	@JoinColumn(name="cid")
	private Privillege_component_model cid;
	
	@Column(length=1)
	private byte active_flag=0;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	public Privilege_comp_comp_model() {
		super();
	}

	public Privilege_comp_comp_model(String cname, String clink, Privilege_model pid, Privillege_component_model cid) {
		super();
		this.cname = cname;
		this.clink = clink;
		this.pid = pid;
		this.cid = cid;
	}

	public Privilege_comp_comp_model(int pccid, String cname, String clink, Privilege_model pid,
			Privillege_component_model cid) {
		super();
		this.pccid = pccid;
		this.cname = cname;
		this.clink = clink;
		this.pid = pid;
		this.cid = cid;
	}

	public Privilege_comp_comp_model(int pccid) {
		super();
		this.pccid = pccid;
	}

	public int getPccid() {
		return pccid;
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

	public Privillege_component_model getCid() {
		return cid;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
}
