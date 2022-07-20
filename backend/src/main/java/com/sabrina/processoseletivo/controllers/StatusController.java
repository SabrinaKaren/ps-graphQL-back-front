package com.sabrina.processoseletivo.controllers;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sabrina.processoseletivo.models.StatusSimplifiedModel;
import com.sabrina.processoseletivo.services.StatusService;

@RestController
@RequestMapping("/api/status")
@CrossOrigin(origins = "http://localhost:4200")
public class StatusController {

    private final StatusService service;

    public StatusController(StatusService service) {
        this.service = service;
    }

    @GetMapping("/simplified")
    public ResponseEntity<List<StatusSimplifiedModel>> getStatusSimplified() {
        return ResponseEntity.ok(service.getStatusSimplified());
    }
    
}