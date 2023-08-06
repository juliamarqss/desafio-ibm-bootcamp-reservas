package com.example.hospedesdesafioibm.service;

import com.example.hospedesdesafioibm.domain.Reservas;
import com.example.hospedesdesafioibm.repository.ReservasRepository;
import com.example.hospedesdesafioibm.service.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservasService {

    @Autowired
    private ReservasRepository reservasRepository;

    public Reservas create(Reservas obj) {
        obj.setId(null);
        return reservasRepository.save(obj);
    }

    public List<Reservas> findAll() {
        List<Reservas> list = reservasRepository.findAll();
        return list;
    }

    public Reservas findById(Integer id) {
        Optional<Reservas> obj = reservasRepository.findById(id);
        return obj.orElseThrow(() -> new ObjectNotFoundException("Objeto não encontrado: " + id + ", Tipo: " + Reservas.class.getName()));
    }
}
