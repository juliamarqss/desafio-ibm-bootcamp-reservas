package com.example.hospedesdesafioibm.controller.exceptions;

import java.io.Serializable;

public class StandartError implements Serializable {

    private Long timestamp;

    private Integer status;

    private String error;

    public StandartError() {
    }

    public StandartError(Long timestamp, Integer status, String error) {
        this.timestamp = timestamp;
        this.status = status;
        this.error = error;
    }

    public Long getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Long timestamp) {
        this.timestamp = timestamp;
    }
}
