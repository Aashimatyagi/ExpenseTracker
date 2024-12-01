package com.example.ExpenseTracker.entity;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Setter
@Getter
@Document(collection = "expenses")
public class Expense {

    // Getters and Setters
    @Id
    private String id;
    private String title;
    private Double amount;
    private String category;
    private String description;
    private LocalDate date;

    // Constructors
    public Expense() {}

    public Expense(String title, Double amount, String category, String description, LocalDate date) {
        this.title = title;
        this.amount = amount;
        this.category = category;
        this.description = description;
        this.date = date;
    }

    @Override
    public String toString() {
        return "Expense{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", amount=" + amount +
                ", category='" + category + '\'' +
                ", description='" + description + '\'' +
                ", date=" + date +
                '}';
    }
}
