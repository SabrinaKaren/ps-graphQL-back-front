package com.sabrina.processoseletivo.repositories;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sabrina.processoseletivo.entities.CandidatoEntity;

@Repository
public interface CandidatoRepository extends JpaRepository<CandidatoEntity, UUID> {
    
}