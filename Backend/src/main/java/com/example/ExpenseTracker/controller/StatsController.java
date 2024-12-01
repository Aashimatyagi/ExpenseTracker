package com.example.ExpenseTracker.controller;

import com.example.ExpenseTracker.dto.StatsDTO;
import com.example.ExpenseTracker.service.StatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/stats")
public class StatsController {

    @Autowired
    private StatsService statsService;

    @GetMapping
    public ResponseEntity<StatsDTO> getStats() {
        StatsDTO stats = statsService.getStats();
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_JSON)
                .body(stats);
    }


}