package com.rean.spring.hibernate.configuration;

import java.util.List;
import java.util.Optional;
import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.AbstractJackson2HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.SerializationFeature;


@Configuration
@ComponentScan(basePackages = "com.rean.spring.hibernate")
@EnableTransactionManagement
@EnableWebMvc
public class WebConfiguration extends WebMvcConfigurerAdapter{

	@Autowired
	private Environment env;
	
	@Bean
	public DataSource dataSource(){
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setUrl("jdbc:postgresql://localhost:5432/My_Server");
		dataSource.setDriverClassName("org.postgresql.Driver");
		dataSource.setUsername("postgres");
		dataSource.setPassword("postgres");
		
		return dataSource;
	}
	
	// create confiuguration for that transactionmanager
	@Bean
	@Autowired
	public HibernateTransactionManager transactionManager (SessionFactory s){
		
		HibernateTransactionManager t = new HibernateTransactionManager(s);
		return t;
	}
	
	@Bean
	public Properties hibernatteProperties(){
		Properties properties = new Properties();
		//properties.put("hibernate.dialect","org.hibernate.dialect.MySQLDialect"); // this should be postgres, not MySQL
		properties.put("hibernate.dialect","org.hibernate.dialect.PostgreSQLDialect");
	    properties.put("hibernate.show_sql", "true");
	    properties.put("hibernate.format_sql","true");
	    properties.put("hibernate.hbm2ddl.auto", "create"); //how to creata auto?
	    return properties;
	}
	
	@Bean
	public LocalSessionFactoryBean sessionFactory(){
		LocalSessionFactoryBean s = new LocalSessionFactoryBean();
		s.setDataSource(dataSource());
		s.setPackagesToScan("com.rean.spring.hibernate.entities");
		s.setHibernateProperties(hibernatteProperties());
		
		return s;
	}
	
	@Bean(name = "multipartResolver")
    public MultipartResolver multipartResolver() {
        org.springframework.web.multipart.commons.CommonsMultipartResolver multipartResolver = new org.springframework.web.multipart.commons.CommonsMultipartResolver();
        //multipartResolver.setMaxUploadSize(2097152);
        multipartResolver.setMaxUploadSize(5242880);
        return multipartResolver;
    }
	
	@Override
	public void addResourceHandlers(final ResourceHandlerRegistry registry) {
	    registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}
	
	@Override
	public void extendMessageConverters(final List<HttpMessageConverter<?>> httpMes){
		final Optional<HttpMessageConverter<?>> jsonConvert = httpMes.stream().filter(c-> c instanceof MappingJackson2HttpMessageConverter).findFirst();
		if(jsonConvert.isPresent()){
			final AbstractJackson2HttpMessageConverter cv = (AbstractJackson2HttpMessageConverter) jsonConvert.get();
			cv.getObjectMapper().enable(SerializationFeature.INDENT_OUTPUT);
			cv.getObjectMapper().enable(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES);
		}
	}
	// BYE
	/*@Bean
	public ProductService productService(){ 
		return new ProductServiceImpl(); 
	}
	@Bean 
	public ProductDao productDao(){ 
		return new ProductDaoImpl();
		}*/
	
}
