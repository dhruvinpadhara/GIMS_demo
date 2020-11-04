package com.model.Account;

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
@Table(name="account_detail")
public class Account_detail_model implements Serializable{
	
	@Id
	@GeneratedValue
	private int accdid;
	
	@Column(length=20)
	private String party_code;
	
	@Column(length=50)
	private String party_name;
	
	@OneToOne
	@JoinColumn(name="group_id")
	private Group_model group_id;
	
	@OneToOne
	@JoinColumn(name = "account_id")
	private Account_model accountId;
	
	@Column(length=30)
	private String contact_person;
	
	@Column(length=13)
	private long phone_number;
	
	@Column(length=13)
	private long mobile_number;
	
	@Column(length = 30)
	private String email;

	@OneToOne
	@JoinColumn(name = "sid")
	private State_model stateId;

	@OneToOne
	@JoinColumn(name = "cid")
	private City_model cityId;

	@OneToOne
	@JoinColumn(name = "aid")
	private Area_model areaId;
	
	@Column(length=60)
	private String address;
	
	@Column(length = 20)
	private float discount;

	@Column(length = 30)
	private String gst_number;

	@Column(length = 30)
	private String transporter;
	
	@Column(length = 30)
	private String agent;

	@Column(length = 30)
	private String type;

	@Column(length = 30)
	private int day;
	
	@Column(length = 1)
	private byte active_flag = 0;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_by_datetime")
	private Date updated_Time;

	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	public Account_detail_model() {
		super();
	}

	

	public Account_detail_model(int accdid, String party_code, String party_name, Group_model group_id,
			Account_model accountId, String contact_person, long phone_number, long mobile_number, String email,
			State_model stateId, City_model cityId, Area_model areaId, String address, float discount,
			String gst_number, String transporter, String agent, String type, int day) {
		super();
		this.accdid = accdid;
		this.party_code = party_code;
		this.party_name = party_name;
		this.group_id = group_id;
		this.accountId = accountId;
		this.contact_person = contact_person;
		this.phone_number = phone_number;
		this.mobile_number = mobile_number;
		this.email = email;
		this.stateId = stateId;
		this.cityId = cityId;
		this.areaId = areaId;
		this.address = address;
		this.discount = discount;
		this.gst_number = gst_number;
		this.transporter = transporter;
		this.agent = agent;
		this.type = type;
		this.day = day;
	}


	public Account_detail_model(String party_code, String party_name, Group_model group_id, Account_model accountId,
			String contact_person, long phone_number, long mobile_number, String email, State_model stateId,
			City_model cityId, Area_model areaId, String address, float discount, String gst_number, String transporter,
			String agent, String type, int day) {
		super();
		this.party_code = party_code;
		this.party_name = party_name;
		this.group_id = group_id;
		this.accountId = accountId;
		this.contact_person = contact_person;
		this.phone_number = phone_number;
		this.mobile_number = mobile_number;
		this.email = email;
		this.stateId = stateId;
		this.cityId = cityId;
		this.areaId = areaId;
		this.address = address;
		this.discount = discount;
		this.gst_number = gst_number;
		this.transporter = transporter;
		this.agent = agent;
		this.type = type;
		this.day = day;
	}


	public Account_detail_model(int accdid) {
		super();
		this.accdid = accdid;
	}

	public int getAccdid() {
		return accdid;
	}

	public String getParty_code() {
		return party_code;
	}

	public String getParty_name() {
		return party_name;
	}

	public Group_model getGroup_id() {
		return group_id;
	}

	public Account_model getAccountId() {
		return accountId;
	}

	public String getContact_person() {
		return contact_person;
	}

	public long getPhone_number() {
		return phone_number;
	}

	public long getMobile_number() {
		return mobile_number;
	}

	public String getEmail() {
		return email;
	}

	public State_model getStateId() {
		return stateId;
	}

	public City_model getCityId() {
		return cityId;
	}

	public Area_model getAreaId() {
		return areaId;
	}

	public String getAddress() {
		return address;
	}


	public String getGst_number() {
		return gst_number;
	}


	public String getAgent() {
		return agent;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Date getUpdated_Time() {
		return updated_Time;
	}

	public Time getCreated_date() {
		return created_date;
	}
	
}
