package org.jsp.Ecommerenceapp.repository;

import java.util.List;

import org.jsp.Ecommerenceapp.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Integer>{
//	public List<Product> findByBrand(String brand);
//	
//	public List<Product> findByCategory(String category);
//	
//	@Query("select p from Product p where p.merchant.id=?1")
//	public List<Product> findByMerchantid(int merchant_id);
	
	List<Product> findByBrand(String brand);

	List<Product> findByCategory(String category);

	@Query("select p from Product p where p.merchant.id=?1")
	List<Product> findByMerchantId(int merchant_id);
}
