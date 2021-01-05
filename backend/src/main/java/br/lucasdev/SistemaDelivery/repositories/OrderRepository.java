package br.lucasdev.SistemaDelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import br.lucasdev.SistemaDelivery.entities.Product;

public interface OrderRepository extends JpaRepository<Product,Long> {

}
