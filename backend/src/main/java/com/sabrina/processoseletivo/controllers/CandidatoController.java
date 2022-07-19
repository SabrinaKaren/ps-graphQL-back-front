package com.sabrina.processoseletivo.controllers;

import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sabrina.processoseletivo.models.CandidatoModel;
import com.sabrina.processoseletivo.services.CandidatoService;

@RestController
@RequestMapping("/api/candidate")
public class CandidatoController {

    private final CandidatoService service;

    public CandidatoController(CandidatoService service) {
        this.service = service;
    }

    @GetMapping
    public List<CandidatoModel> getAllCandidates() {
        return service.getAllCandidates();
    }
    
}