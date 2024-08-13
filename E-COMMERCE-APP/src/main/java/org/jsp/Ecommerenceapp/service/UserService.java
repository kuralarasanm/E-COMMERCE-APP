package org.jsp.Ecommerenceapp.service;

import java.util.List;
import java.util.Optional;

import org.jsp.Ecommerenceapp.Exception.MerchantNotFoundException;
import org.jsp.Ecommerenceapp.dao.UserDao;
import org.jsp.Ecommerenceapp.dto.ResponseStructure;
import org.jsp.Ecommerenceapp.model.Merchant;
import org.jsp.Ecommerenceapp.model.User;
import org.jsp.Ecommerenceapp.util.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;

@Service
public class UserService {
	@Autowired
	private UserDao userdao;
	@Autowired
	private ECommerceAppEmailService emailService;

	public ResponseEntity<ResponseStructure<User>> saveUser(User user,HttpServletRequest request) {
		ResponseStructure<User> structure = new ResponseStructure<>();
		user.setStatus(AccountStatus.IN_ACTIVE.toString());
		user.setToken(RandomString.make(45));
		structure.setBody((User) userdao.saveUser(user));
		String message=emailService.sendWelcomeMail(user, request);
		structure.setMessage("user saved"+" "+message);
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.CREATED);
	}

	public ResponseEntity<ResponseStructure<User>> updateUser(User user) {
		Optional<User> recUser = userdao.findbyid(user.getId());
		ResponseStructure<User> structure = new ResponseStructure<>();
		if (recUser.isPresent()) {
			User dbUser = recUser.get();
			dbUser.setEmail(user.getEmail());
			dbUser.setAge(user.getAge());
			dbUser.setName(user.getName());
			dbUser.setPassword(user.getPassword());
			dbUser.setPhone(user.getPhone());
			structure.setMessage("user updated");
			structure.setBody(userdao.saveUser(user));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<ResponseStructure<User>> findbyid(int id) {
		Optional<User> recUser = userdao.findbyid(id);
		ResponseStructure<User> structure = new ResponseStructure<>();
		if (recUser.isPresent()) {
			structure.setMessage("User updated");
			structure.setBody(recUser.get());
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
		}
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
	}

	public ResponseEntity<ResponseStructure<String>> deletebyid(int id) {
		Optional<User> recUser = userdao.findbyid(id);
		ResponseStructure<String> structure = new ResponseStructure<>();
		if (recUser.isPresent()) {
			userdao.deletebyid(id);
			structure.setMessage("User deleted");
			structure.setBody("deleted successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
		}
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK);
	}

//	public ResponseEntity<ResponseStructure<User>> findall() {
//		ResponseStructure<User> structure = new ResponseStructure<>();
//		List<User> recUser = userdao.findall();
//
//		if (recUser.size() > 0) {
//			structure.setMessage("User find");
//			structure.setBody(recUser);
//			structure.setStatusCode(HttpStatus.OK.value());
//			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.OK);
//		}
//		structure.setMessage("User not Find");
//		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
//		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.NOT_FOUND);
//	}
	public ResponseStructure<List<User>> findAll() {
		ResponseStructure<List<User>> structure = new ResponseStructure<>();
		structure.setMessage("List of Merchants");
		structure.setBody(userdao.findall());
		structure.setStatusCode(HttpStatus.OK.value());
		return structure;
	}

	public ResponseEntity<ResponseStructure<User>> verifyUser(long phone, String password) {
		Optional<User> recUser = userdao.verifyUser(phone, password);
		ResponseStructure<User> structure = new ResponseStructure<>();
		if (recUser.isPresent()) {
			structure.setMessage("method find");
			structure.setBody(recUser.get());
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<ResponseStructure<User>> verifyUserbyemail(String email, String password) {
		Optional<User> recUser = userdao.verifyUserbyemail(email, password);
		ResponseStructure<User> structure = new ResponseStructure<>();
		if (recUser.isPresent()) {
			structure.setMessage("method find");
			structure.setBody(recUser.get());
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.ACCEPTED);
		}
		return new ResponseEntity<ResponseStructure<User>>(structure, HttpStatus.NOT_FOUND);
	}

	public ResponseEntity<ResponseStructure<List<User>>> findbyname(String name,String password) {
		ResponseStructure<List<User>> structure = new ResponseStructure<>();
		List<User> recUser = userdao.findbyname(name,password);
		if (recUser.size() > 0) {
			structure.setMessage("User find");
			structure.setBody(recUser);
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<List<User>>>(structure, HttpStatus.OK);
		}
		structure.setMessage("User not Find");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<List<User>>>(structure, HttpStatus.NOT_FOUND);

	}
//	public ResponseEntity<ResponseStructure<List<User>>> findByName(String name, String password) {
//		ResponseStructure<List<User>> structure = new ResponseStructure<>();
//		List<User> recUser = userdao.findbyname(name,password);
//		if (recUser.size() > 0) {
//			structure.setMessage("List of user with entered name ");
//			structure.setBody(recUser);
//			structure.setStatusCode(HttpStatus.OK.value());
//			return new ResponseEntity<ResponseStructure<List<User>>>(HttpStatus.OK);
//		}
//		structure.setMessage("No USER found with the entered name ");
//		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
//		return new ResponseEntity<ResponseStructure<List<User>>>(HttpStatus.NOT_FOUND);
//	}
	
	public ResponseEntity<ResponseStructure<String>> activate(String token){
		Optional<User> recUser=userdao.findByToken(token);
		ResponseStructure<String> structure=new ResponseStructure<>();
		if(recUser.isPresent()) {
			User user=recUser.get();
			user.setStatus(AccountStatus.ACTIVE.toString());
			user.setToken(null);
			userdao.saveUser(user);
			structure.setBody("User found");
			structure.setMessage("Account verified and activated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
		}
		throw new MerchantNotFoundException("invalid URL");
	}
}
