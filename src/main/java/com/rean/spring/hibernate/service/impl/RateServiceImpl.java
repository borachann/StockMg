package com.rean.spring.hibernate.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.rean.spring.hibernate.dao.RateDao;
import com.rean.spring.hibernate.entities.Rate;
import com.rean.spring.hibernate.service.RateService;

@Service
public class RateServiceImpl implements RateService {
	@Autowired
	private RateDao rateDao;

	@Override
	@Transactional
	public Boolean createRate() {
		// TODO Auto-generated method stub
		return rateDao.createRate();
	}

	@Override
	@Transactional
	public Boolean updateRate(Rate rate) {
		// TODO Auto-generated method stub
		return rateDao.updateRate(rate);
	}

}
