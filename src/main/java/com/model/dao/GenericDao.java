package com.model.dao;

import java.util.List;

public interface GenericDao {

	//insert data
	<E> E insert(E e);
	
	//display data
	List display(String model);
	
	//display data without flag
	List show(String model);
	
	//where full
	List display(String model, String where);

	//delete particular row data
	int delete(String model,String fname,long id);
			
	//find data for particular id
	List dynamicdata(String model,String fname,int id);
	
	//find dynamic data from string field
	List dynamic_String_f(String model,String fname,String value);
	
	//update single data
	int update_single_value(String model,String fname,String value,String fname2,int id);
	
	//date query
	List single_Date(String model,String fname,String value);
	
	//update flag
	int update_flag(String model,String fname,int id);
	
	//single column show
	List select_single_col(String col,String model,String fname,int value);
	
	
	List select_dintinct_col(String col,String model);
	
	List select_dintinct_col_with_id(String col,String model,String fname,int id);
	
	
}
