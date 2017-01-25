package com.rean.spring.hibernate.configuration;

import org.springframework.security.web.context.AbstractSecurityWebApplicationInitializer;

public class SecurityWebApplicationInitializer extends AbstractSecurityWebApplicationInitializer{
	public SecurityWebApplicationInitializer() {
        super(WebConfiguration.class);
    }
}
