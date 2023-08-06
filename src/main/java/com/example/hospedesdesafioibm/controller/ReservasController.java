package com.example.hospedesdesafioibm.controller;

import com.example.hospedesdesafioibm.domain.Reservas;
import com.example.hospedesdesafioibm.service.ReservasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;

@CrossOrigin("*")
@RestController
@RequestMapping("/reservas")
public class ReservasController {

    @Autowired
    private ReservasService reservasService;

    @PostMapping
    public ResponseEntity<Reservas> create(@RequestBody Reservas reserva) {
        Reservas obj = reservasService.create(reserva);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(obj.getId()).toUri();
        return ResponseEntity.created(uri).build();
    }
}
