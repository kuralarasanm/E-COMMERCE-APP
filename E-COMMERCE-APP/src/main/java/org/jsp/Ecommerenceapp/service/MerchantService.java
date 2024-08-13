package org.jsp.Ecommerenceapp.service;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.eclipse.angus.mail.handlers.message_rfc822;
import org.jsp.Ecommerenceapp.Exception.MerchantNotFoundException;
import org.jsp.Ecommerenceapp.dao.MerchantDao;
import org.jsp.Ecommerenceapp.dto.ResponseStructure;
import org.jsp.Ecommerenceapp.model.Merchant;
import org.jsp.Ecommerenceapp.util.AccountStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import jakarta.servlet.http.HttpServletRequest;
import net.bytebuddy.utility.RandomString;


@Service
public class MerchantService {
	@Autowired
	private MerchantDao merchantdao;
	@Autowired
	private ECommerceAppEmailService emailService;
	
	public ResponseEntity<ResponseStructure<Merchant>>savemerchant(Merchant merchant,HttpServletRequest request){
		ResponseStructure<Merchant>structure=new ResponseStructure<>();
		merchant.setStatus(AccountStatus.IN_ACTIVE.toString());
		merchant.setToken(RandomString.make(45));
		structure.setBody(merchantdao.saveMerchant(merchant));
		String message=emailService.sendWelcomeMail(merchant, request);
		structure.setMessage("merchant saved"+","+message);
		structure.setStatusCode(HttpStatus.CREATED.value());
		return new ResponseEntity<ResponseStructure<Merchant>>(structure,HttpStatus.CREATED);
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> updatemerchant( Merchant merchant) {
		Optional<Merchant>recMerchant=merchantdao.findbyid(merchant.getId());
		ResponseStructure<Merchant> structure=new ResponseStructure();
		if(recMerchant.isPresent()) {
			Merchant dbMerchant=recMerchant.get();
			dbMerchant.setEmail(merchant.getEmail());
			dbMerchant.setGst_number(merchant.getGst_number());
			dbMerchant.setName(merchant.getName());
			dbMerchant.setPassword(merchant.getPassword());
			dbMerchant.setPhone(merchant.getPhone());
			structure.setMessage("Merchant updated");
			structure.setBody(merchantdao.saveMerchant(merchant));
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.ACCEPTED) ;
		}
		return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.NOT_FOUND) ;
	}
	public ResponseEntity<ResponseStructure<Merchant>> findById(int id) {
		Optional<Merchant>recMerchant=merchantdao.findbyid(id);
		ResponseStructure<Merchant> structure=new ResponseStructure();
		if(recMerchant.isPresent()) {
			structure.setMessage("Merchant updated");
			structure.setBody(recMerchant.get());
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.OK) ; 
		}
		return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.OK) ; 
	}
	public ResponseEntity<ResponseStructure<String>> deletebyid(int id) {
		Optional<Merchant>recMerchant=merchantdao.findbyid(id);
		ResponseStructure<String> structure=new ResponseStructure();
		if(recMerchant.isPresent()) {
			merchantdao.deletebyid(id);
			structure.setMessage("Merchant deleted");
			structure.setBody("deleted successfully");
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK) ;
		}
		return new ResponseEntity<ResponseStructure<String>>(structure, HttpStatus.OK) ;
	}
	
//	public ResponseEntity<ResponseStructure<Merchant>> findall(){
//		ResponseStructure<List<Merchant>> structure=new ResponseStructure<>();
//		List<Merchant>recMerchant=merchantdao.findall();
//		
//		if(recMerchant.size()>0) {
//			structure.setMessage("Merchant find");
//			structure.setBody(recMerchant);
//			structure.setStatusCode(HttpStatus.OK.value());
//			return new ResponseEntity<ResponseStructure<Merchant>>(HttpStatus.OK) ;
//		}
//		structure.setMessage("Merchant not Find");
//		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
//		return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.NOT_FOUND) ;
//	}
	public ResponseStructure<List<Merchant>> findAll() {
		ResponseStructure<List<Merchant>> structure = new ResponseStructure<>();
		structure.setMessage("List of Merchants");
		structure.setBody(merchantdao.findall());
		structure.setStatusCode(HttpStatus.OK.value());
		return structure;
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> verifyMerchant( long phone, String password) {
		Optional<Merchant>recMerchant=merchantdao.verifyMerchant(phone,password);
		ResponseStructure<Merchant> structure=new ResponseStructure();
		if(recMerchant.isPresent()) {
			structure.setMessage("method find");
			structure.setBody(recMerchant.get());
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.ACCEPTED) ; 
		}
		return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.NOT_FOUND) ; 
	}
	
	public ResponseEntity<ResponseStructure<Merchant>> verifyMerchantbyemail(String email, String password) {
		Optional<Merchant>recMerchant=merchantdao.verifyMerchantbyemail(email,password);
		ResponseStructure<Merchant> structure=new ResponseStructure();
		if(recMerchant.isPresent()) {
			structure.setMessage("method find");
			structure.setBody(recMerchant.get());
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.ACCEPTED) ; 
		}
		return new ResponseEntity<ResponseStructure<Merchant>>(structure, HttpStatus.NOT_FOUND) ; 
	}
	
	
	public ResponseEntity<ResponseStructure<List<Merchant>>> findByName(String name) {
		ResponseStructure<List<Merchant>> structure = new ResponseStructure<>();
		List<Merchant> merchants = merchantdao.findbyname(name);
		if (merchants.size() > 0) {
			structure.setMessage("List of Merchants with entered name ");
			structure.setBody(merchants);
			structure.setStatusCode(HttpStatus.OK.value());
			return new ResponseEntity<ResponseStructure<List<Merchant>>>(structure, HttpStatus.OK);
		}
		structure.setMessage("No Merchant found with the entered name ");
		structure.setStatusCode(HttpStatus.NOT_FOUND.value());
		return new ResponseEntity<ResponseStructure<List<Merchant>>>(structure, HttpStatus.NOT_FOUND);
	}
	
	public ResponseEntity<ResponseStructure<String>> activate(String token){
		Optional<Merchant> recMerchant=merchantdao.findByToken(token);
		ResponseStructure<String> structure=new ResponseStructure<>();
		if(recMerchant.isPresent()) {
			Merchant merchant=recMerchant.get();
			merchant.setStatus(AccountStatus.ACTIVE.toString());
			merchant.setToken(null);
			merchantdao.saveMerchant(merchant);
			structure.setBody("Merchant found");
			structure.setMessage("Account verified and activated");
			structure.setStatusCode(HttpStatus.ACCEPTED.value());
			return new ResponseEntity<ResponseStructure<String>>(structure,HttpStatus.NOT_FOUND);
		}
		throw new MerchantNotFoundException("invalid URL");
	}
}
