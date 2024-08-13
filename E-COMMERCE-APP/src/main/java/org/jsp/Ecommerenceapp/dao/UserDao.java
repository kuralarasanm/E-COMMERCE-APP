package org.jsp.Ecommerenceapp.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.Ecommerenceapp.model.Merchant;
import org.jsp.Ecommerenceapp.model.User;
import org.jsp.Ecommerenceapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class UserDao {
	@Autowired
	private UserRepository userRepository;
	
	public User saveUser(User user) {
		return userRepository.save(user);
	}
	
	public User updateUser(User user) {
		return userRepository.save(user);
	}
	public Optional<User> findbyid(int id) {
		return userRepository.findById(id);
	}
	public boolean deletebyid(int id) {
		Optional<User> dbUser = findbyid(id);
		if (dbUser.isPresent()) {
			userRepository.delete(dbUser.get());
			return true;
		}
		return false;

	}

	public List<User> findall() {
		return userRepository.findAll();
	}
	public Optional<User> verifyUser(long phone, String password) {
		return userRepository.verify(phone, password);
	}
	public Optional<User> verifyUserbyemail(String email, String password) {
		return userRepository.verify(email, password);
	}
	public List<User> findbyname(String name,String password) {
		return userRepository.findbyname(name,password);
	}
	
	public Optional<User> findByToken(String token){
		return userRepository.findByToken(token);
	}

}
