package com.sabrina.processoseletivo.repositories;

import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.sabrina.processoseletivo.entities.StatusEntity;

@Repository
public interface StatusRepository extends JpaRepository<StatusEntity, UUID> {

    List<StatusEntity> findByRemovedOnIsNull();
    
}