//package com.example.employeemanagement.config;

//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.http.HttpMethod;
//import org.springframework.security.config.Customizer;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.security.provisioning.InMemoryUserDetailsManager;
//import org.springframework.security.web.SecurityFilterChain;

//@Configuration
//public class SpringSecurityConfig {

//    @Bean
//    public PasswordEncoder passwordEncoder(){
//        return new BCryptPasswordEncoder();
//    }
//
//    @Bean
//    SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
//    httpSecurity.csrf().disable().authorizeHttpRequests((auhtorize)->{
//        auhtorize.requestMatchers(HttpMethod.POST,"/api/**").hasRole("ADMIN");
//        //auhtorize.requestMatchers(HttpMethod.GET,"/api/**").hasRole("ADMIN");
//        auhtorize.requestMatchers(HttpMethod.PUT,"/api/**").hasRole("ADMIN");
//        auhtorize.requestMatchers(HttpMethod.PATCH,"/api/**").hasRole("ADMIN");
//        auhtorize.requestMatchers(HttpMethod.GET,"/api/**").permitAll();
////        auhtorize.anyRequest().authenticated();
//    }).httpBasic(Customizer.withDefaults());
//    return httpSecurity.build();
//    }

//    @Bean
//    public UserDetailsService userDetailsService(){
//        UserDetails user= User.builder().username("users").password(passwordEncoder().encode("users")).roles("USER").build();
//        UserDetails admin=User.builder().username("admin").password(passwordEncoder().encode("admin")).roles("ADMIN").build();
//        return new InMemoryUserDetailsManager(user,admin);
//    }
//}

