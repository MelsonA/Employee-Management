package com.example.employeemanagement.repository;


import com.example.employeemanagement.entity.User;
import com.example.employeemanagement.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UsersRepository extends JpaRepository<Users,Long> {

    Optional<Users> findByUserName(String userName);


    boolean existsByUserName(String email);

    Optional<Users> findByUserNameOrEmail(String userName, String email);

}
