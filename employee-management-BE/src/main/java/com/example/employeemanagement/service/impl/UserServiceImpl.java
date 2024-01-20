package com.example.employeemanagement.service.impl;

import com.example.employeemanagement.dto.UserDto;
import com.example.employeemanagement.entity.User;
import com.example.employeemanagement.exception.ResourceNotFoundException;
import com.example.employeemanagement.mapper.UserMapper;
import com.example.employeemanagement.repository.UserRepository;
import com.example.employeemanagement.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;
    @Override
    public UserDto createUser(UserDto userDto) {
        User user=UserMapper.mapToUser(userDto);
        User createdUser=userRepository.save(user);
        UserDto createUserDto=UserMapper.mapToUserDto(createdUser);
        return createUserDto;
    }

    @Override
    public UserDto getUser(Long id) {
        User user=userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User","id",id));
        UserDto getUserDto=UserMapper.mapToUserDto(user);
        return getUserDto;
    }

    @Override
    public List<UserDto> getAlluser() {
        List<User>users=userRepository.findAll();
        List<UserDto> userDtos=users.stream().map(user -> UserMapper.mapToUserDto(user)).collect(Collectors.toList());
        return userDtos;
    }

    @Override
    public UserDto updateUser(UserDto userDto) {
        User user=UserMapper.mapToUser(userDto);
        User existingUser=userRepository.findById(user.getId()).orElseThrow(() -> new ResourceNotFoundException("User","id", user.getId()));
        existingUser.setFirstName(user.getFirstName());
        existingUser.setLastName(user.getLastName());
        existingUser.setEmail(user.getEmail());
        User updatedUser=userRepository.save(existingUser);
        UserDto userDtos=UserMapper.mapToUserDto(updatedUser);
        return userDtos;
    }

    @Override
    public void deleteUser(Long id) {
        User user=userRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("User","id",id));
        userRepository.deleteById(user.getId());
    }
}
