package com.model.Acm;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="web_assi_priv_user")
public class Assi_priv_user implements Serializable{

	@Id
	@GeneratedValue
	private int aspuid;
	
	@OneToOne
	@JoinColumn(name="rid")
	private Role_model rid;
	
	
	@OneToOne
	@JoinColumn(name="emp_id")
	private Employee_model emp_id;
	
	
	@OneToOne
	@JoinColumn(name="pid")
	private Privilege_model pid;
	
	@OneToOne
	@JoinColumn(name="cid")
	private Privillege_component_model cid;
	
	@Column(length=30)
	private String access;
	
	@Column(length=1)
	private byte active_flag=0;

	public Assi_priv_user() {
		super();
	}
	
	public Assi_priv_user(int aspuid) {
		super();
		this.aspuid = aspuid;
	}

	

	public Assi_priv_user(Role_model rid, Employee_model emp_id, Privilege_model pid, Privillege_component_model cid,
			String access) {
		super();
		this.rid = rid;
		this.emp_id = emp_id;
		this.pid = pid;
		this.cid = cid;
		this.access = access;
	}

	public int getAspuid() {
		return aspuid;
	}

	public Role_model getRid() {
		return rid;
	}

	public Employee_model getEmp_id() {
		return emp_id;
	}

	public Privilege_model getPid() {
		return pid;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Privillege_component_model getCid() {
		return cid;
	}

	public String getAccess() {
		return access;
	}
	
}
