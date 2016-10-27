package com.rean.spring.hibernate.bootstrap;

import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.ServletRegistration;

import org.springframework.web.WebApplicationInitializer;
import org.springframework.web.context.ContextLoaderListener;
import org.springframework.web.context.support.AnnotationConfigWebApplicationContext;
import org.springframework.web.servlet.DispatcherServlet;

import com.rean.spring.hibernate.configuration.AppConfiguration;
import com.rean.spring.hibernate.configuration.WebConfiguration;

public class Bootstrap implements WebApplicationInitializer{

	@Override
	public void onStartup(ServletContext container) throws ServletException {
		// TODO Auto-generated method stub
		AnnotationConfigWebApplicationContext context = new AnnotationConfigWebApplicationContext();
		context.register(WebConfiguration.class);
		container.addListener(new ContextLoaderListener(context));
		
		AnnotationConfigWebApplicationContext dispatcherServlet =  new AnnotationConfigWebApplicationContext();
		
		dispatcherServlet.register(AppConfiguration.class);
		ServletRegistration.Dynamic dispatcher = container.addServlet("springServlet", new DispatcherServlet(dispatcherServlet));
		dispatcher.setLoadOnStartup(1);
		dispatcher.addMapping("/");
	}

}
