package com.model.Acm;

import java.io.Serializable;
import java.sql.Time;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name="log")
public class Log_model implements Serializable{
	
	@Id @GeneratedValue
	@Column(length=10)
	private int log_id;
	
	@OneToOne
	@JoinColumn(name="emp_id")
	private Employee_model emp_id;
	
	@OneToOne
	@JoinColumn(name="rid")
	private Role_model rid;
	
	@OneToOne
	@JoinColumn(name="cid")
	private Privillege_component_model cid;
	
	@Temporal(TemporalType.TIMESTAMP)
	private Date dt;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	public Log_model() {
		super();
	}

	public Log_model(Employee_model emp_id, Role_model rid, Privillege_component_model cid,Date dt) {
		super();
		this.emp_id = emp_id;
		this.rid = rid;
		this.cid = cid;
		this.dt=dt;
	}
	
	

	public Date getDt() {
		return dt;
	}

	public int getLog_id() {
		return log_id;
	}

	

	public Employee_model getEmp_id() {
		return emp_id;
	}

	public Role_model getRid() {
		return rid;
	}

	public Privillege_component_model getCid() {
		return cid;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
	
	
	
}
