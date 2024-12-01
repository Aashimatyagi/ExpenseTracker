package com.example.ExpenseTracker.controller;

import com.example.ExpenseTracker.entity.Income;
import com.example.ExpenseTracker.service.IncomeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/income")
public class IncomeController {

    @Autowired
    private IncomeService incomeService;

    @PostMapping
    public ResponseEntity<Income> createIncome(@RequestBody Income income) {
        return new ResponseEntity<>(incomeService.saveIncome(income), HttpStatus.CREATED);
    }

    @GetMapping
    public List<Income> getAllIncomes() {
        return incomeService.getAllIncomes();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Income> updateIncome(@PathVariable String id, @RequestBody Income income) {
        return new ResponseEntity<>(incomeService.updateIncome(id, income), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIncome(@PathVariable String id) {
        incomeService.deleteIncome(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
