package com.model.material;

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
@Table(name="item_group")
public class Item_group_model implements Serializable{

	@Id @GeneratedValue
	@Column(length=10)
	private int item_group_id;
	
	@Column(length = 10)
	private String item_size;

	@OneToOne
	@JoinColumn(name = "material_id")
	private Material_model material_id;

	@OneToOne
	@JoinColumn(name = "unit_id")
	private Unit_model unit_id;
	
	@Column(length=10)
	private int items;

	@Column(length = 10)
	private String short_name;

	@Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Time created_date;

	@Column(length = 1)
	private byte active_flag = 0;

	public Item_group_model() {
		super();
	}
	

	public Item_group_model(String item_size, Material_model material_id, Unit_model unit_id, int items,
			String short_name) {
		super();
		this.item_size = item_size;
		this.material_id = material_id;
		this.unit_id = unit_id;
		this.items = items;
		this.short_name = short_name;
	}


	public Item_group_model(int item_group_id, String item_size, Material_model material_id, Unit_model unit_id,
			int items, String short_name) {
		super();
		this.item_group_id = item_group_id;
		this.item_size = item_size;
		this.material_id = material_id;
		this.unit_id = unit_id;
		this.items = items;
		this.short_name = short_name;
	}
	


	public int getItems() {
		return items;
	}

	public Unit_model getUnit_id() {
		return unit_id;
	}

	public String getItem_size() {
		return item_size;
	}

	public Item_group_model(int item_group_id) {
		super();
		this.item_group_id = item_group_id;
	}

	public int getItem_group_id() {
		return item_group_id;
	}

	public Material_model getMaterial_id() {
		return material_id;
	}

	public String getShort_name() {
		return short_name;
	}

	public Time getCreated_date() {
		return created_date;
	}

	public byte getActive_flag() {
		return active_flag;
	}	
	
}
