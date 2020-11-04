package com.model.material;

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

import com.model.Acm.Employee_model;

@Entity
@Table(name = "Material_Deatails")
public class Material_details_model implements Serializable{
	@Id
	@GeneratedValue
	@Column(length = 8)
	private int material_details_id;

	@Column(length = 30)
	private String item_code;

	@Column(length = 30)
	private String description;

	@Column(length = 30)
	private String bale_Number;

	@Column(length = 10)
	private int size;

	@OneToOne
	@JoinColumn(name = "itemGroupId")
	private Item_group_model itemGroupId;

	@Column(length = 10)
	private int unit;

	@Column(length = 10)
	private int op_balenece_qty;

	@Column(length = 10)
	private int op_balenece_rs;

	@Column(length = 10)
	private float purchaseRate;

	@Column(length = 10)
	private int purchaseCode;

	@Column(length = 10)
	private String purchaseDate;

	@Column(length = 10)
	private int salesRate;

	@Column(length = 10)
	private float mrp;

	@Column(length = 10)
	private float discount;

	@Column(length = 10)
	private String itemQuality;

	@Column(length = 10)
	private int perBundle;

	@Column(length = 10)
	private int GSTRate;

	@Column(length = 20)
	private String HSN_number;

	@OneToOne
	@JoinColumn(name = "emp_id")
	private Employee_model empid;

	@Column(length = 30)
	private String sendTo;

	@Column(length = 50)
	private String imageName;

	@Column(length = 1)
	private byte active_flag = 0;

	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_by_datetime")
	private Date updated_Time;

	public Material_details_model() {
		super();
	}
	
	

	public Material_details_model(int material_details_id) {
		super();
		this.material_details_id = material_details_id;
	}



	public Material_details_model(int material_details_id, String item_code, String description, String bale_Number,
			int size, Item_group_model itemGroupId, int unit, int op_balenece_qty, int op_balenece_rs,
			float purchaseRate, int purchaseCode, String purchaseDate, int salesRate, float mrp, float discount,
			String itemQuality, int perBundle, int GSTRate, String HSN_number, Employee_model empid, String sendTo,
			String imageName) {
		super();
		this.material_details_id = material_details_id;
		this.item_code = item_code;
		this.description = description;
		this.bale_Number = bale_Number;
		this.size = size;
		this.itemGroupId = itemGroupId;
		this.unit = unit;
		this.op_balenece_qty = op_balenece_qty;
		this.op_balenece_rs = op_balenece_rs;
		this.purchaseRate = purchaseRate;
		this.purchaseCode = purchaseCode;
		this.purchaseDate = purchaseDate;
		this.salesRate = salesRate;
		this.mrp = mrp;
		this.discount = discount;
		this.itemQuality = itemQuality;
		this.perBundle = perBundle;
		this.GSTRate = GSTRate;
		this.HSN_number = HSN_number;
		this.empid = empid;
		this.sendTo = sendTo;
		this.imageName = imageName;
	}



	public Material_details_model(String item_code, String description, String bale_Number, int size,
			Item_group_model itemGroupId, int unit, int op_balenece_qty, int op_balenece_rs, float purchaseRate,
			int purchaseCode, String purchaseDate, int salesRate, float mrp, float discount, String itemQuality,
			int perBundle, int GSTRate, String HSN_number, Employee_model empid, String sendTo, String imageName) {
		super();
		this.item_code = item_code;
		this.description = description;
		this.bale_Number = bale_Number;
		this.size = size;
		this.itemGroupId = itemGroupId;
		this.unit = unit;
		this.op_balenece_qty = op_balenece_qty;
		this.op_balenece_rs = op_balenece_rs;
		this.purchaseRate = purchaseRate;
		this.purchaseCode = purchaseCode;
		this.purchaseDate = purchaseDate;
		this.salesRate = salesRate;
		this.mrp = mrp;
		this.discount = discount;
		this.itemQuality = itemQuality;
		this.perBundle = perBundle;
		this.GSTRate = GSTRate;
		this.HSN_number = HSN_number;
		this.empid = empid;
		this.sendTo = sendTo;
		this.imageName = imageName;
	}

	public int getMaterial_details_id() {
		return material_details_id;
	}

	public String getItem_code() {
		return item_code;
	}

	public String getBale_Number() {
		return bale_Number;
	}

	public String getDescription() {
		return description;
	}

	public int getSize() {
		return size;
	}

	public Item_group_model getItemGroupId() {
		return itemGroupId;
	}

	public int getUnit() {
		return unit;
	}

	public int getOp_balenece_qty() {
		return op_balenece_qty;
	}

	public int getOp_balenece_rs() {
		return op_balenece_rs;
	}

	public float getPurchaseRate() {
		return purchaseRate;
	}

	public int getPurchaseCode() {
		return purchaseCode;
	}

	public String getPurchaseDate() {
		return purchaseDate;
	}

	public int getSalesRate() {
		return salesRate;
	}

	public float getMrp() {
		return mrp;
	}

	public float getDiscount() {
		return discount;
	}
	
	public String getItemQuality() {
		return itemQuality;
	}

	public int getPerBundle() {
		return perBundle;
	}

	public int getGSTRate() {
		return GSTRate;
	}

	public String getHSN_number() {
		return HSN_number;
	}

	public Employee_model getEmpid() {
		return empid;
	}

	public String getSendTo() {
		return sendTo;
	}

	public String getImageName() {
		return imageName;
	}

	public byte getActive_flag() {
		return active_flag;
	}

	public Time getCreated_date() {
		return created_date;
	}

	public Date getUpdated_Time() {
		return updated_Time;
	}


}
