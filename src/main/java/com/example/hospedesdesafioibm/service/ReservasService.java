package com.example.hospedesdesafioibm.service;

import com.example.hospedesdesafioibm.domain.Reservas;
import com.example.hospedesdesafioibm.dto.ReservasDto;
import com.example.hospedesdesafioibm.repository.ReservasRepository;
import com.example.hospedesdesafioibm.service.exceptions.BadRequestException;
import com.example.hospedesdesafioibm.service.exceptions.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservasService {

    @Autowired
    private ReservasRepository reservasRepository;

    public Reservas create(Reservas obj) {
        Date inicio = obj.getDataInicio();
        Date fim = obj.getDataFim();

        if(inicio.before(new Date())) {
            throw new BadRequestException("A data de início deve ser após a data atual.");
        }
        if(fim.before(inicio)) {
            throw new BadRequestException("A data final deve ser após a data inicial.");
        }

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

    public Reservas update(Reservas obj) {
        Reservas novoObj = findById(obj.getId());
        updateData(novoObj, obj);
        return reservasRepository.save(novoObj);
    }

    public void delete(Integer id) {
        reservasRepository.deleteById(id);
    }

    private void updateData(Reservas novo, Reservas antigo) {
        novo.setNomeHospede(antigo.getNomeHospede());
        novo.setDataInicio(antigo.getDataInicio());
        novo.setDataFim(antigo.getDataFim());
        novo.setQuantidadePessoas(antigo.getQuantidadePessoas());
        novo.setStatus(antigo.getStatus());
    }

    public Reservas fromtDto(ReservasDto objDto) {
        return new Reservas(objDto.getId(), objDto.getNomeHospede(), objDto.getDataInicio(), objDto.getDataFim(), objDto.getQuantidadePessoas(), objDto.getStatus());
    }
}
