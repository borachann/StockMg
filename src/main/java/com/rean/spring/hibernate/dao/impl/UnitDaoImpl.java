package com.rean.spring.hibernate.dao.impl;

import java.util.List;

import com.rean.spring.hibernate.dao.UnitDao;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Unit;

public class UnitDaoImpl implements UnitDao{

	@Override
	public List<Unit> getAllUnit(Pagination pagination, String schStringName, boolean isPagination) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public boolean insertUnit(Unit unit) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean deleteUnit(int unitId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public boolean updateUnit(Unit unit, int unitId) {
		// TODO Auto-generated method stub
		return false;
	}

	@Override
	public Unit searchUnit(int unitId) {
		// TODO Auto-generated method stub
		return null;
	}

}
