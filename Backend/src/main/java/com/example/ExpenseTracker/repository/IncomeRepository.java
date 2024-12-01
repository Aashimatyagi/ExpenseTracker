package com.example.ExpenseTracker.repository;

import com.example.ExpenseTracker.entity.Income;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface IncomeRepository extends MongoRepository<Income, String> {
}
