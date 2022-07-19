package com.sabrina.processoseletivo.models;

import java.util.Date;
import java.util.UUID;
import org.springframework.beans.BeanUtils;
import com.sabrina.processoseletivo.entities.CandidatoEntity;
import lombok.Data;

@Data
public class CandidatoModel {

    private UUID id;
    private String nome;
    private String cpf;
    private String email;
    private Date dateOfBirth;
    private String cidade;
    private String curriculo;
    private String linkRepositorio;
    private UUID status;
    private Date updatedOn;
    private Date removedOn;

    public static CandidatoModel of(CandidatoEntity entity) {
        CandidatoModel model = new CandidatoModel();
        BeanUtils.copyProperties(entity, model);
        return model;
    }

}