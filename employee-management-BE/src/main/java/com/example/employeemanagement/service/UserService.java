package com.example.employeemanagement.service;

import com.example.employeemanagement.dto.UserDto;
import com.example.employeemanagement.entity.User;

import java.util.List;

public interface UserService {

    UserDto createUser(UserDto userDto);

    UserDto getUser(Long id);

    List<UserDto> getAlluser();

    UserDto updateUser(UserDto userDto);

    void deleteUser(Long id);
}
