//package com.example.employeemanagement.service;
//
//
//import com.example.employeemanagement.entity.Users;
//import com.example.employeemanagement.repository.UsersRepository;
//import lombok.AllArgsConstructor;
//import org.springframework.security.core.GrantedAuthority;
//import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.core.userdetails.UserDetailsService;
//import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.stereotype.Service;

//import java.util.Set;
//import java.util.stream.Collectors;

//@Service
//@AllArgsConstructor
//public class CustomUserDetailsService implements UserDetailsService {
//    private UsersRepository usersRepository;
//    @Override
//    public UserDetails loadUserByUsername(String usernameOrEmail) throws UsernameNotFoundException {
//        Users user=usersRepository.findByUserNameOrEmail(usernameOrEmail,usernameOrEmail).
//                orElseThrow(()-> new UsernameNotFoundException("User not found"));
//
//
//        Set<GrantedAuthority> authorities=user.getRoles().stream().map((role)-> new SimpleGrantedAuthority(role.getName()))
//                .collect(Collectors.toSet());
//
//        return new org.springframework.security.core.userdetails.User(
//                usernameOrEmail,
//                user.getPassword(),
//                authorities
//        );
//    }
//}
