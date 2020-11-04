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

import com.model.Account.Account_detail_model;

@Entity
@Table(name="fabric")
public class Fabric_model implements Serializable{

	@Id @GeneratedValue
	private int fabric_id;
	
	@Column(length = 30)
	private String item_code;

	@Column(length = 30)
	private String item_name;

	@Column(length = 10)
	private int bale_Number;

	@Column(length = 10)
	private int size;

	@OneToOne
	@JoinColumn(name = "itemGroupId")
	private Item_group_model itemGroupId;
	
	@OneToOne
	@JoinColumn(name = "unit_id")
	private Unit_model unit_id ;
	
	@Column(length = 10)
	private int op_balenece_qty;

	@Column(length = 10)
	private float op_balenece_rs;

	@Column(length = 10)
	private float purchase_rate;
	
	@Column(length = 20)
	private String purchase_code;

	@Column(length = 10)
	private Date purchase_date;

	@Column(length = 10)
	private float sales_rate;

	@Column(length = 10)
	private float mrp;

	@Column(length = 10)
	private float discount;

	@Column(length = 10)
	private String item_quality;

	@Column(length = 10)
	private int per_bundle;

	@Column(length = 10)
	private int GSTRate;

	@Column(length = 20)
	private String HSNnumber;

	@OneToOne
	@JoinColumn(name = "accdid")
	private Account_detail_model supplier;
	

	@Column(length = 50)
	private String imageName;
	
	@Column(length=1)
	private byte active_flag=0;
	
	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	@Temporal(TemporalType.TIMESTAMP)
	@Column(name = "updated_by_datetime")
	private Date updated_Time;

	public Fabric_model() {
		super();
	}
	
	

	public Fabric_model(int fabric_id, String item_code, String item_name, int bale_Number, int size,
			Item_group_model itemGroupId, Unit_model unit_id, int op_balenece_qty, float op_balenece_rs,
			float purchase_rate, String purchase_code, Date purchase_date, float sales_rate, float mrp, float discount,
			String item_quality, int per_bundle, int gSTRate, String hSNnumber, Account_detail_model supplier,
			String imageName) {
		super();
		this.fabric_id = fabric_id;
		this.item_code = item_code;
		this.item_name = item_name;
		this.bale_Number = bale_Number;
		this.size = size;
		this.itemGroupId = itemGroupId;
		this.unit_id = unit_id;
		this.op_balenece_qty = op_balenece_qty;
		this.op_balenece_rs = op_balenece_rs;
		this.purchase_rate = purchase_rate;
		this.purchase_code = purchase_code;
		this.purchase_date = purchase_date;
		this.sales_rate = sales_rate;
		this.mrp = mrp;
		this.discount = discount;
		this.item_quality = item_quality;
		this.per_bundle = per_bundle;
		GSTRate = gSTRate;
		HSNnumber = hSNnumber;
		this.supplier = supplier;
		this.imageName = imageName;
	}



	public Fabric_model(String item_code, String item_name, int bale_Number, int size, Item_group_model itemGroupId,
			Unit_model unit_id, int op_balenece_qty, float op_balenece_rs, float purchase_rate, String purchase_code,
			Date purchase_date, float sales_rate, float mrp, float discount, String item_quality, int per_bundle,
			int gSTRate, String hSNnumber, Account_detail_model supplier, String imageName) {
		super();
		this.item_code = item_code;
		this.item_name = item_name;
		this.bale_Number = bale_Number;
		this.size = size;
		this.itemGroupId = itemGroupId;
		this.unit_id = unit_id;
		this.op_balenece_qty = op_balenece_qty;
		this.op_balenece_rs = op_balenece_rs;
		this.purchase_rate = purchase_rate;
		this.purchase_code = purchase_code;
		this.purchase_date = purchase_date;
		this.sales_rate = sales_rate;
		this.mrp = mrp;
		this.discount = discount;
		this.item_quality = item_quality;
		this.per_bundle = per_bundle;
		GSTRate = gSTRate;
		HSNnumber = hSNnumber;
		this.supplier = supplier;
		this.imageName = imageName;
	}



	public Fabric_model(int fabric_id) {
		super();
		this.fabric_id = fabric_id;
	}

	public int getFabric_id() {
		return fabric_id;
	}

	public String getItem_code() {
		return item_code;
	}

	public String getItem_name() {
		return item_name;
	}

	public int getBale_Number() {
		return bale_Number;
	}

	public int getSize() {
		return size;
	}

	public Item_group_model getItemGroupId() {
		return itemGroupId;
	}

	public Unit_model getUnit_id() {
		return unit_id;
	}

	public int getOp_balenece_qty() {
		return op_balenece_qty;
	}

	public float getOp_balenece_rs() {
		return op_balenece_rs;
	}

	public float getPurchase_rate() {
		return purchase_rate;
	}

	public String getPurchase_code() {
		return purchase_code;
	}

	public Date getPurchase_date() {
		return purchase_date;
	}

	public float getSales_rate() {
		return sales_rate;
	}

	public float getMrp() {
		return mrp;
	}

	public float getDiscount() {
		return discount;
	}

	public String getItem_quality() {
		return item_quality;
	}

	public int getPer_bundle() {
		return per_bundle;
	}

	public int getGSTRate() {
		return GSTRate;
	}

	public String getHSNnumber() {
		return HSNnumber;
	}

	public Account_detail_model getSupplier() {
		return supplier;
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
