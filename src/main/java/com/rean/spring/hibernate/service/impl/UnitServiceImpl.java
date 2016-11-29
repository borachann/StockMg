package com.rean.spring.hibernate.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.UnitDao;
import com.rean.spring.hibernate.entities.Pagination;
import com.rean.spring.hibernate.entities.Unit;
import com.rean.spring.hibernate.service.UnitService;

@Service
public class UnitServiceImpl implements UnitService{
	@Autowired
	private UnitDao unitDao;

	@Override
	@Transactional
	public List<Unit> getAllUnit(Pagination pagination, String schStringName, boolean isPagination) {
		// TODO Auto-generated method stub
		return unitDao.getAllUnit(pagination, schStringName, isPagination);
	}

	@Override
	@Transactional
	public boolean insertUnit(Unit unit) {
		// TODO Auto-generated method stub
		return unitDao.insertUnit(unit);
	}

	@Override
	@Transactional
	public boolean deleteUnit(int unitId) {
		// TODO Auto-generated method stub
		return unitDao.deleteUnit(unitId);
	}

	@Override
	@Transactional
	public boolean updateUnit(Unit unit) {
		// TODO Auto-generated method stub
		return unitDao.updateUnit(unit);
	}

	@Override
	@Transactional
	public Unit searchUnit(int unitId) {
		// TODO Auto-generated method stub
		return unitDao.searchUnit(unitId);
	}
	
	

}
