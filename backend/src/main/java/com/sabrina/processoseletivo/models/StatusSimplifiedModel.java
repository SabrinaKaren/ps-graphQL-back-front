package com.sabrina.processoseletivo.models;

import java.util.UUID;
import org.springframework.beans.BeanUtils;
import com.sabrina.processoseletivo.entities.StatusEntity;
import lombok.Data;

@Data
public class StatusSimplifiedModel {

    private UUID id;
    private String nome;

    public static StatusSimplifiedModel of(StatusEntity entity) {
        StatusSimplifiedModel model = new StatusSimplifiedModel();
        BeanUtils.copyProperties(entity, model);
        return model;
    }

}