package com.model.Acm;

import java.io.Serializable;
import java.sql.Time;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="web_asi_priv_role")
public class Assi_priv_to_role implements Serializable{

	@Id @GeneratedValue(strategy=GenerationType.AUTO)
	@Column(length=5)
	private int asptoroleid;
	
	@OneToOne
	@JoinColumn(name="rid")
	private Role_model rid;

	@OneToOne
	@JoinColumn(name="pid")
	private Privilege_model pid;
	
	@OneToOne
	@JoinColumn(name="cid")
	private Privillege_component_model cid;
	
	@Column(length=30)
	private String access;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;
	
	@Column(length=1)
	private byte active_flag=0;

	public Assi_priv_to_role() {
		super();
	}


	public Assi_priv_to_role(int asptoroleid) {
		super();
		this.asptoroleid = asptoroleid;
	}



	public Assi_priv_to_role(Role_model rid, Privilege_model pid, Privillege_component_model cid, String access) {
		super();
		this.rid = rid;
		this.pid = pid;
		this.cid = cid;
		this.access = access;
	}

	public int getAsptoroleid() {
		return asptoroleid;
	}

	
	public byte getActive_flag() {
		return active_flag;
	}

	public Role_model getRid() {
		return rid;
	}

	public Privilege_model getPid() {
		return pid;
	}

	public Time getCreated_date() {
		return created_date;
	}


	public Privillege_component_model getCid() {
		return cid;
	}


	public String getAccess() {
		return access;
	}
	
	
}