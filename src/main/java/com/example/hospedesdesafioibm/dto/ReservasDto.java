package com.example.hospedesdesafioibm.dto;

import com.example.hospedesdesafioibm.enums.StatusReserva;

import java.io.Serializable;
import java.util.Date;

public class ReservasDto implements Serializable {

    private Integer id;

    private String nomeHospede;

    private Date dataInicio;

    private Date dataFim;

    private Integer quantidadePessoas;

    private StatusReserva status = StatusReserva.CONFIRMADA;

    public ReservasDto() {
    }

    public ReservasDto(Integer id, String nomeHospede, Date dataInicio, Date dataFim, Integer quantidadePessoas, StatusReserva status) {
        this.id = id;
        this.nomeHospede = nomeHospede;
        this.dataInicio = dataInicio;
        this.dataFim = dataFim;
        this.quantidadePessoas = quantidadePessoas;
        this.status = status;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getNomeHospede() {
        return nomeHospede;
    }

    public void setNomeHospede(String nomeHospede) {
        this.nomeHospede = nomeHospede;
    }

    public Date getDataInicio() {
        return dataInicio;
    }

    public void setDataInicio(Date dataInicio) {
        this.dataInicio = dataInicio;
    }

    public Date getDataFim() {
        return dataFim;
    }

    public void setDataFim(Date dataFim) {
        this.dataFim = dataFim;
    }

    public Integer getQuantidadePessoas() {
        return quantidadePessoas;
    }

    public void setQuantidadePessoas(Integer quantidadePessoas) {
        this.quantidadePessoas = quantidadePessoas;
    }

    public StatusReserva getStatus() {
        return status;
    }

    public void setStatus(StatusReserva status) {
        this.status = status;
    }
}
