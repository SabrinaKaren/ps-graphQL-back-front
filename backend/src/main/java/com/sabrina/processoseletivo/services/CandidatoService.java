package com.sabrina.processoseletivo.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import org.springframework.stereotype.Service;
import com.sabrina.processoseletivo.entities.CandidatoEntity;
import com.sabrina.processoseletivo.entities.StatusEntity;
import com.sabrina.processoseletivo.models.CandidatoModel;
import com.sabrina.processoseletivo.models.CandidatoSimplifiedModel;
import com.sabrina.processoseletivo.repositories.CandidatoRepository;
import com.sabrina.processoseletivo.repositories.StatusRepository;

@Service
public class CandidatoService {

    private final CandidatoRepository repository;
    private final StatusRepository statusRepository;

    public CandidatoService(CandidatoRepository repository, StatusRepository statusRepository) {
        this.repository = repository;
        this.statusRepository = statusRepository;
    }

    public List<CandidatoModel> getAllCandidates() {
        List<CandidatoModel> candidatesModel = new ArrayList<>();

        List<CandidatoEntity> candidatesDb = repository.findByRemovedOnIsNull();
        candidatesDb.forEach(candidate -> {
            CandidatoModel candidateModel = CandidatoModel.of(candidate);
            candidateModel.setStatus(getStatusById(candidate.getStatus()));
            candidatesModel.add(candidateModel);
        });

        return candidatesModel;
    }

    public List<CandidatoSimplifiedModel> getCandidatesSimplified() {
        List<CandidatoSimplifiedModel> candidatesSimplifiedModel = new ArrayList<>();

        List<CandidatoEntity> candidatesDb = repository.findByRemovedOnIsNull();
        candidatesDb.forEach(candidate -> {
            candidatesSimplifiedModel.add(CandidatoSimplifiedModel.of(candidate));
        });

        return candidatesSimplifiedModel;
    }

    private String getStatusById(UUID statusId) {
        Optional<StatusEntity> statusOp = statusRepository.findById(statusId);
        return statusOp.isPresent() ? statusOp.get().getNome() : "-";
    }
    
}