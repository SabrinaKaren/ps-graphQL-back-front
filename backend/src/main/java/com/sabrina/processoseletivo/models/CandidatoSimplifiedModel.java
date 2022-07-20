package com.sabrina.processoseletivo.models;

import java.util.UUID;
import org.springframework.beans.BeanUtils;
import com.sabrina.processoseletivo.entities.CandidatoEntity;
import lombok.Data;

@Data
public class CandidatoSimplifiedModel {

    private UUID id;
    private String nome;

    public static CandidatoSimplifiedModel of(CandidatoEntity entity) {
        CandidatoSimplifiedModel model = new CandidatoSimplifiedModel();
        BeanUtils.copyProperties(entity, model);
        return model;
    }

}