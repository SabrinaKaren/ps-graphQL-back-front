package com.sabrina.processoseletivo.services;

import java.util.ArrayList;
import java.util.List;
import org.springframework.stereotype.Service;
import com.sabrina.processoseletivo.entities.CandidatoEntity;
import com.sabrina.processoseletivo.models.CandidatoModel;
import com.sabrina.processoseletivo.repositories.CandidatoRepository;

@Service
public class CandidatoService {

    private final CandidatoRepository repository;

    public CandidatoService(CandidatoRepository repository) {
        this.repository = repository;
    }

    public List<CandidatoModel> getAllCandidates() {
        List<CandidatoModel> candidatesModel = new ArrayList<>();

        List<CandidatoEntity> candidatesDb = repository.findAll();
        candidatesDb.forEach(candidate -> {
            candidatesModel.add(CandidatoModel.of(candidate));
        });

        return candidatesModel;
    }
    
}