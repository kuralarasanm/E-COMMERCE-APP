package org.jsp.Ecommerenceapp.controller;

import java.util.List;

import org.jsp.Ecommerenceapp.dto.ResponseStructure;
import org.jsp.Ecommerenceapp.model.Merchant;
import org.jsp.Ecommerenceapp.model.User;
import org.jsp.Ecommerenceapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
	@Autowired
	private UserService userService;
	
	@PostMapping
	public ResponseEntity<ResponseStructure<User>> saveUser(@RequestBody User user,HttpServletRequest request) {
		return userService.saveUser(user,request);
	}
	@PutMapping 
	public ResponseEntity<ResponseStructure<User>> updateUser(@RequestBody User user) {
		return userService.updateUser(user); 
	}
	
	@GetMapping(value = "/{id}")
	public ResponseEntity<ResponseStructure<User>> findbyid(@PathVariable(name = "id")int id) {
		return userService.findbyid(id);
	}
	
	@DeleteMapping
	(value = "/{id}")
	public ResponseEntity<ResponseStructure<String>> deletebyid(@PathVariable(name = "id")int id) {
		return userService.deletebyid(id); 
	}
	@GetMapping
	public ResponseStructure<List<User>> findall(){
     return userService.findAll();
	}
	@PostMapping("/verify-by-email")
	public ResponseEntity<ResponseStructure<User>> findByEmail(@RequestParam String email,
			@RequestParam String password) {
		return userService.verifyUserbyemail(email, password);
	}

	@PostMapping("/verify-by-phone")
	public ResponseEntity<ResponseStructure<User>> verifyUser(@RequestParam long phone, @RequestParam String password) {
		return userService.verifyUser(phone, password);
	}
	@PostMapping("/find-by-name")
	public ResponseEntity<ResponseStructure<List<User>>> findByName(@RequestParam String name,@RequestParam String password){
		return userService.findbyname(name,password);
	}
	
	@GetMapping("/activate")
	public ResponseEntity<ResponseStructure<String>> activate(@RequestParam String token){
		return userService.activate(token);
	}
}
