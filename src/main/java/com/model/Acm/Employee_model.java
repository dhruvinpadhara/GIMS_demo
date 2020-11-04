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

import com.model.Location.Area_model;
import com.model.Location.City_model;
import com.model.Location.State_model;

@Entity
@Table(name="employee")
public class Employee_model implements Serializable{
	@Id @GeneratedValue
	@Column(length=11)
	private int emp_id;
	
	@Column(length=25)
	private String username;
	
	@Column(length=15)
	private String password;
	
	@Column(length=25)
	private String empname;
	
	@Column(name="birth_date")
    @Temporal(TemporalType.DATE)
    private Date btime;
	
	@Column(length=25)
	private String email;
	
	@Column(length=7)
	private String gender;
	
	@Column(length=50)
	private String address;
	
	@Column(length=25)
	private String image;
	
	@Column(length=12)
	private long mobile_number;
	
	@OneToOne
	@JoinColumn(name="rid")
	private Role_model rid;
	
	@OneToOne
	@JoinColumn(name="sid")
	private State_model sid;
	
	@OneToOne
	@JoinColumn(name="cid")
	private City_model cid;
	
	@OneToOne
	@JoinColumn(name="aid")
	private Area_model aid;
	
	@Column(length=1)
	private byte active_flag=0;
	
	@Temporal(TemporalType.TIMESTAMP)
	@Column(name="updated_by_datetime")
	private Date updated_Time;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	public Employee_model() {
		super();
	}

	public Employee_model(String username, String password, String empname, String email, String gender, String address, String image, long mobile_number, Role_model rid, State_model sid,
			City_model cid, Area_model aid,Date btime) {
		super();
		this.username = username;
		this.password = password;
		this.empname = empname;
		this.email = email;
		this.gender = gender;
		this.address = address;
		this.image = image;
		this.mobile_number = mobile_number;
		this.rid = rid;
		this.sid = sid;
		this.cid = cid;
		this.aid = aid;
		this.btime=btime;
	}

	public Employee_model(int emp_id, String username, String password, String empname, String email,
			String gender, String address, String image, long mobile_number, Role_model rid,
			State_model sid, City_model cid, Area_model aid,Date btime,Date updated_Time) {
		super();
		this.emp_id = emp_id;
		this.username = username;
		this.password = password;
		this.empname = empname;
		this.email = email;
		this.gender = gender;
		this.address = address;
		this.image = image;
		this.mobile_number = mobile_number;
		this.rid = rid;
		this.sid = sid;
		this.cid = cid;
		this.aid = aid;
		this.btime=btime;
		this.updated_Time=updated_Time;
	}

	public Date getBtime() {
		return btime;
	}

	public Date getUpdated_Time() {
		return updated_Time;
	}

	public Employee_model(int emp_id) {
		super();
		this.emp_id = emp_id;
	}

	
	
	public String getEmpname() {
		return empname;
	}

	public int getEmp_id() {
		return emp_id;
	}

	public String getUsername() {
		return username;
	}

	public String getPassword() {
		return password;
	}

	public String getName() {
		return empname;
	}


	public String getEmail() {
		return email;
	}

	public String getGender() {
		return gender;
	}

	public String getAddress() {
		return address;
	}

	public String getImage() {
		return image;
	}

	public long getMobile_number() {
		return mobile_number;
	}

	public Role_model getRid() {
		return rid;
	}

	public State_model getSid() {
		return sid;
	}

	public City_model getCid() {
		return cid;
	}

	public Area_model getAid() {
		return aid;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
}
