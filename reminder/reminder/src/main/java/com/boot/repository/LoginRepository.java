package com.boot.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.boot.model.LoginUser;

public interface LoginRepository extends JpaRepository<LoginUser, String>{

}
