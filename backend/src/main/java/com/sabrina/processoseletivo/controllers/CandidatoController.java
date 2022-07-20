package com.sabrina.processoseletivo.controllers;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sabrina.processoseletivo.models.CandidatoModel;
import com.sabrina.processoseletivo.models.CandidatoSimplifiedModel;
import com.sabrina.processoseletivo.services.CandidatoService;

@RestController
@RequestMapping("/api/candidate")
@CrossOrigin(origins = "http://localhost:4200")
public class CandidatoController {

    private final CandidatoService service;

    public CandidatoController(CandidatoService service) {
        this.service = service;
    }

    @GetMapping("/all")
    public ResponseEntity<List<CandidatoModel>> getAllCandidates() {
        return ResponseEntity.ok(service.getAllCandidates());
    }

    @GetMapping("/simplified")
    public ResponseEntity<List<CandidatoSimplifiedModel>> getCandidatesSimplified() {
        return ResponseEntity.ok(service.getCandidatesSimplified());
    }
    
}