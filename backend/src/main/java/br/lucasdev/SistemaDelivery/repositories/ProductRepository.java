package br.lucasdev.SistemaDelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import br.lucasdev.SistemaDelivery.entities.Product;

public interface ProductRepository extends JpaRepository<Product,Long> {
	
	List<Product> findAllByOrderByNameAsc();

}
