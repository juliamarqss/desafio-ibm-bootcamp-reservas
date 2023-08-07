package com.example.hospedesdesafioibm.controller;

import com.example.hospedesdesafioibm.domain.Reservas;
import com.example.hospedesdesafioibm.dto.ReservasDto;
import com.example.hospedesdesafioibm.enums.StatusReserva;
import com.example.hospedesdesafioibm.service.ReservasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/reservas")
public class ReservasController {

    @Autowired
    private ReservasService reservasService;

    @PostMapping
    public ResponseEntity<Reservas> create(@RequestBody Reservas reserva) {
        reserva = reservasService.create(reserva);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("{id}").buildAndExpand(reserva.getId()).toUri();
        return ResponseEntity.created(uri).body(reserva);
    }

    @GetMapping
    @ResponseBody
    public ResponseEntity<List<Reservas>> findAll() {
        List<Reservas> list = reservasService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Reservas> findById(@PathVariable Integer id) {
        Reservas obj = reservasService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Void> update(@PathVariable Integer id, @RequestBody ReservasDto dto) {
        Reservas obj = reservasService.fromtDto(dto);
        obj.setId(id);
        reservasService.update(obj);
        return ResponseEntity.noContent().build();
    }

    @DeleteMapping("/{id}/cancelar")
    public ResponseEntity<Reservas> delete(@PathVariable Integer id) {
        Reservas reserva = reservasService.findById(id);
        reserva.setStatus(StatusReserva.CANCELADA);
        reservasService.update(reserva);
        return ResponseEntity.ok().body(reserva);
    }
}
