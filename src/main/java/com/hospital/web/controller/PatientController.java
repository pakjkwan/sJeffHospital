package com.hospital.web.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("/patient")
public class PatientController {
	private static final Logger logger = LoggerFactory.getLogger(PatientController.class);
	@RequestMapping("/join")
	public String goJoin(){
		logger.info("PatientController - goJoin() {}", "ENTER");
		return "public:patient/registerForm";
	}
	@RequestMapping("/login")
	public String goLogin(){
		logger.info("PatientController - goLogin() {}", "ENTER");
		return "public:common/loginForm";
	}
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public String goLogin(Model model){
		logger.info("PatientController - goLogin() {}", "POST");
		model.addAttribute("name", "홍길동");
		return "patient:patient/containerDetail";
	}
}
