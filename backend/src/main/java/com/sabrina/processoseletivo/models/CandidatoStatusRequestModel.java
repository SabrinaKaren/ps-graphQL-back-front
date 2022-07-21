package com.sabrina.processoseletivo.models;

import lombok.Data;

@Data
public class CandidatoStatusRequestModel {

    private String candidateId;
    private String statusId;

}