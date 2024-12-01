package com.example.ExpenseTracker.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
@Getter
@Setter
@Document(collection = "incomes")
public class Income {

    @Id
    private String id;
    private String title;
    private Double amount;
    private String category;
    private String description;
    private LocalDate date;

    // Constructors, Getters, Setters

    public Income() {}

    public Income(String title, Double amount, String category, String description, LocalDate date) {
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.description = description;
        this.date = date;
    }

    // Getters and Setters
    // toString() method
}
