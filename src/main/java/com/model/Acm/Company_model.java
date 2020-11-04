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

import com.model.Location.Area_model;
import com.model.Location.City_model;
import com.model.Location.State_model;

@Entity
@Table(name="company")
public class Company_model implements Serializable{
	
	@Id @GeneratedValue
	@Column(name="company_id")
	private int comp_id;
	
	@Column(name="company_name",length=40)
	private String cname;
	
	@Column(length=10)
	private String tax;
	
	@Column(length=40)
	private String owner_name;

	@Column(length=30)
	private String email;
	
	@Column(length=10)
	private long mnumber1;
	
	@Column(length=10)
	private long mnumber2;
	
	@Column(length=50)
	private String webname;
	
	@Column(length=20)
	private String logo_name;
	
	@OneToOne
	@JoinColumn(name="sid")
	private State_model sid;
	
	@OneToOne
	@JoinColumn(name="cid")
	private City_model cid;
	
	@OneToOne
	@JoinColumn(name="aid")
	private Area_model aid;
	
	@Column(length=60)
	private String address;
	
	@Column(length=25)
	private String gst;
	
	@Column(length=12)
	private String pan;
	
	@Column(length=25)
	private String bank_name;
	
	@Column(length=30)
	private String account_number;
	
	@Column(length=20)
	private String branch;
	
	@Column(length=20)
	private String ifsc_code;
	
	@Column(length=1)
	private byte active_flag=0;
	
	@Column(length=6)
	private int zipcode;
	
	@Column(columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	public Company_model() {
		super();
	}

	public Company_model(String cname, String tax, String owner_name, String email, long mnumber1, long mnumber2,
			String webname, String logo_name, State_model sid, City_model cid, Area_model aid, String address,
			String gst, String pan, String bank_name, String account_number, String branch, String ifsc_code,int zipcode) {
		super();
		this.cname = cname;
		this.tax = tax;
		this.owner_name = owner_name;
		this.email = email;
		this.mnumber1 = mnumber1;
		this.mnumber2 = mnumber2;
		this.webname = webname;
		this.logo_name = logo_name;
		this.sid = sid;
		this.cid = cid;
		this.aid = aid;
		this.address = address;
		this.gst = gst;
		this.pan = pan;
		this.bank_name = bank_name;
		this.account_number = account_number;
		this.branch = branch;
		this.ifsc_code = ifsc_code;
		this.zipcode=zipcode;
	}

	public Company_model(int comp_id, String cname, String tax, String owner_name, String email, long mnumber1,
			long mnumber2, String webname, String logo_name, State_model sid, City_model cid, Area_model aid,
			String address, String gst, String pan, String bank_name, String account_number, String branch,
			String ifsc_code,int zipcode) {
		super();
		this.comp_id = comp_id;
		this.cname = cname;
		this.tax = tax;
		this.owner_name = owner_name;
		this.email = email;
		this.mnumber1 = mnumber1;
		this.mnumber2 = mnumber2;
		this.webname = webname;
		this.logo_name = logo_name;
		this.sid = sid;
		this.cid = cid;
		this.aid = aid;
		this.address = address;
		this.gst = gst;
		this.pan = pan;
		this.bank_name = bank_name;
		this.account_number = account_number;
		this.branch = branch;
		this.ifsc_code = ifsc_code;
		this.zipcode=zipcode;
	}

	public int getZipcode() {
		return zipcode;
	}

	public Company_model(int comp_id) {
		super();
		this.comp_id = comp_id;
	}
	
	public int getComp_id() {
		return comp_id;
	}

	public String getCname() {
		return cname;
	}

	public String getTax() {
		return tax;
	}

	public String getOwner_name() {
		return owner_name;
	}

	public String getEmail() {
		return email;
	}

	public long getMnumber1() {
		return mnumber1;
	}

	public long getMnumber2() {
		return mnumber2;
	}

	public String getWebname() {
		return webname;
	}

	public String getLogo_name() {
		return logo_name;
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

	public String getAddress() {
		return address;
	}

	public String getGst() {
		return gst;
	}

	public String getPan() {
		return pan;
	}

	public String getBank_name() {
		return bank_name;
	}

	public String getAccount_number() {
		return account_number;
	}

	public String getBranch() {
		return branch;
	}

	public String getIfsc_code() {
		return ifsc_code;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
}
