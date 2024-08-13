package org.jsp.Ecommerenceapp.dao;

import java.util.List;
import java.util.Optional;

import org.jsp.Ecommerenceapp.model.Merchant;
import org.jsp.Ecommerenceapp.repository.MerchantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class MerchantDao {
	@Autowired
	private MerchantRepository merchantRepository;

	public Merchant saveMerchant(Merchant merchant) {
		return merchantRepository.save(merchant);
	}
	
	public Merchant updatemerchant(Merchant merchant) {
		return merchantRepository.save(merchant);
	}
	public Optional<Merchant> findbyid(int id) {
		return merchantRepository.findById(id);
	}
	public boolean deletebyid(int id) {
		Optional<Merchant> dbMerchant = findbyid(id);
		if (dbMerchant.isPresent()) {
			merchantRepository.delete(dbMerchant.get());
			return true;
		}
		return false;

	}

	public List<Merchant> findall() {
		return merchantRepository.findAll();
	}
	public Optional<Merchant> verifyMerchant(long phone, String password) {
		return merchantRepository.verify(phone, password);
	}
	public Optional<Merchant> verifyMerchantbyemail(String email, String password) {
		return merchantRepository.verify(email, password);
	}
	public List<Merchant> findbyname(String name) {
		return merchantRepository.findbyname(name);
	}
	
	public Optional<Merchant> findByToken(String token){
		return merchantRepository.findByToken(token);
	}

	
}
