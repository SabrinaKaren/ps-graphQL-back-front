package com.sabrina.processoseletivo.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.sabrina.processoseletivo.entities.StatusEntity;
import com.sabrina.processoseletivo.models.StatusSimplifiedModel;
import com.sabrina.processoseletivo.repositories.StatusRepository;

@Service
public class StatusService {

    private final StatusRepository repository;

    public StatusService(StatusRepository repository) {
        this.repository = repository;
    }

    public List<StatusSimplifiedModel> getStatusSimplified() {
        List<StatusSimplifiedModel> statusSimplifiedModel = new ArrayList<>();

        List<StatusEntity> statusDb = repository.findAll();
        statusDb.forEach(status -> {
            statusSimplifiedModel.add(StatusSimplifiedModel.of(status));
        });

        return statusSimplifiedModel;
    }
    
}