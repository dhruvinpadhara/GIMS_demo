
package com.model.dao.jpa;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;

import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.model.dao.GenericDao;

@Repository
public class GenericDaoimpl implements GenericDao{

	@PersistenceContext
	private EntityManager em;
	
	@Transactional
	public <E> E insert(E e) {
		return em.merge(e);
	}

	@Transactional
	public List display(String model) {
		return em.createQuery("from "+model+" where active_flag=0").getResultList();
	}
	
	@Transactional
	public List show(String model) {
		return em.createQuery("from "+model).getResultList();
	}
	
	@Transactional
	public int delete(String model, String fname, long id) {
		Query q=em.createQuery("delete from "+model+" where "+fname+"="+id+"");
		return q.executeUpdate();
	}

	@Transactional
	public List dynamicdata(String model, String fname, int id) {
		return em.createQuery("from "+model+" where "+fname+"="+id+" and active_flag=0").getResultList();
	}

	@Transactional
	public List dynamic_String_f(String model, String fname, String value) {
		return em.createQuery("from "+model+" where '"+fname+"'='"+value+"' and active_flag=0").getResultList();
	}

	@Transactional
	public int update_flag(String model, String fname, int id) {
		Query q=em.createQuery("update "+model+" set active_flag=1 where "+fname+"="+id+"");
		return q.executeUpdate();
	}
	
	@Transactional
	public int update_single_value(String model, String fname, String value, String fname2, int id) {
		Query q=em.createQuery("update "+model+" set "+fname+"='"+value+"' where "+fname2+"="+id+"");
		return q.executeUpdate();
	}
	
	@Transactional
	public List single_Date(String model,String fname,String value){
		System.out.println("from "+model+" where '"+fname+"'='"+value+"' and active_flag=0");
		return em.createQuery("from "+model+" where "+fname+"="+value+" and active_flag=0").getResultList();
	}
	

	@Transactional
	public List display(String model, String where) {
		return em.createQuery("from " + model + " where " + where + " ").getResultList();
	}

	@Transactional
	public List select_single_col(String col, String model, String fname, int value) {
		return em.createQuery("select "+col+" from "+model+" where "+fname+"="+value+"").getResultList();
	}
	
	@Transactional
	public List select_dintinct_col(String col, String model) {
		return em.createQuery("select DISTINCT "+col+" from "+model).getResultList();
	}
	
	@Transactional
	public List select_dintinct_col_with_id(String col, String model,String fname,int id) {
//		Query q= em.createQuery("select DISTINCT "+col+" from "+model+" where "+fname+"="+id+"");
//		return q.executeUpdate();
		return em.createQuery("select DISTINCT "+col+" from "+model+" where "+fname+"="+id+"").getResultList();
	}

}
