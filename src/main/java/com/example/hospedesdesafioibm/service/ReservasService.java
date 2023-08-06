package com.example.hospedesdesafioibm.service;

import com.example.hospedesdesafioibm.domain.Reservas;
import com.example.hospedesdesafioibm.repository.ReservasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReservasService {

    @Autowired
    private ReservasRepository reservasRepository;

    public Reservas create(Reservas obj) {
        obj.setId(null);
        return reservasRepository.save(obj);
    }
}
