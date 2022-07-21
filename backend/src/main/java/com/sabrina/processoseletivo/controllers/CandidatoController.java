package com.sabrina.processoseletivo.controllers;

import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.sabrina.processoseletivo.models.CandidatoModel;
import com.sabrina.processoseletivo.models.CandidatoSimplifiedModel;
import com.sabrina.processoseletivo.models.CandidatoStatusRequestModel;
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

    @PutMapping("/status")
    public ResponseEntity<String> updateStatus(@RequestBody CandidatoStatusRequestModel request) {
        try {
            service.updateStatus(request);
            return ResponseEntity.ok("Status do candidato de ID " + request.getCandidateId() + " atualizado com sucesso!");
        } catch (Exception e) {
            String errorMsg = e.getMessage();
            int httpCode = Integer.parseInt(errorMsg.substring(0, 3));
            String msg = errorMsg.substring(4);
            
            return ResponseEntity.status(httpCode).body(msg);
        }
    }
    
}