package com.rean.spring.hibernate.dao;

import java.util.List;

import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Unit;

public interface UnitDao {

	public List<Unit> getAllUnit(Pagination pagination, String schStringName, boolean isPagination);
	public boolean insertUnit(Unit unit);
	public boolean deleteUnit(int unitId);
	public boolean updateUnit(Unit unit);
	public Unit searchUnit(int unitId);
}
