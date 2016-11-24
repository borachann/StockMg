package com.rean.spring.hibernate.dao.impl;

import java.util.List;
import java.util.concurrent.Exchanger;

import org.hibernate.SQLQuery;
import org.hibernate.SessionFactory;
import org.hibernate.transform.AliasToEntityMapResultTransformer;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.object.SqlQuery;
import org.springframework.stereotype.Repository;

import com.rean.spring.hibernate.dao.UnitDao;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Unit;

@Repository
public class UnitDaoImpl implements UnitDao{
	@Autowired
	private SessionFactory session;

	@Override
	public List<Unit> getAllUnit(Pagination pagination, String schStringName, boolean isPagination) {
		// TODO Auto-generated method stub
		SQLQuery query = session.getCurrentSession().createSQLQuery("select * from unit where status = 't' and unitname like '%" + schStringName + "%' order by unitname desc");
		if(isPagination){
			query.setFirstResult(pagination.offset());
			query.setMaxResults(pagination.getPerPage());
		}
		query.setResultTransformer(AliasToEntityMapResultTransformer.INSTANCE);
		List<Unit> unit = query.list(); 
		return unit;
	}

	@Override
	public boolean insertUnit(Unit unit) {
		// TODO Auto-generated method stub
		try{
			session.getCurrentSession().save(unit);
			return true;
		}catch(Exception ex){
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
		return false;
	}

	@Override
	public boolean deleteUnit(int unitId) {
		// TODO Auto-generated method stub
		try{
			SQLQuery query = session.getCurrentSession().createSQLQuery("update unit set status = 'f' where unitid = " + unitId);
			return true;
		}catch(Exception ex){
			System.out.println();
		}
		return false;
	}

	@Override
	public boolean updateUnit(Unit unit, int unitId) {
		// TODO Auto-generated method stub
		System.out.println("unit object has " + unit.toString());
		try{
			session.getCurrentSession().update(unit);
		}catch(Exception ex){
			System.out.println(ex.getMessage());
			ex.printStackTrace();
		}
		return false;
	}

	@Override
	public Unit searchUnit(int unitId) {
		// TODO Auto-generated method stub
		return session.getCurrentSession().get(Unit.class, unitId);
	}

}
