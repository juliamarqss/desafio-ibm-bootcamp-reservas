package com.example.hospedesdesafioibm.repository;

import com.example.hospedesdesafioibm.domain.Reservas;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReservasRepository extends JpaRepository<Reservas, Integer> {
}
