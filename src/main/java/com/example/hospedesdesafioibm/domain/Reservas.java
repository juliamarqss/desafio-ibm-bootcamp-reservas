package com.example.hospedesdesafioibm.domain;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.Serializable;
import java.sql.Date;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Reservas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String nomeHospede;

//    @JsonFormat(pattern = "dd/MM/yyyy")
    private Date dataInicio;

    private Date dataFim;

    private Integer quantidadePessoas;

    private Boolean status; // Precisa retornar como "CONFIRMADA" "PENDENTE"
}
