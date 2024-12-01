package com.example.ExpenseTracker.dto;

public class StatsDTO {

    private double totalIncome;
    private double totalExpense;
    private double balance;

    public StatsDTO(double totalIncome, double totalExpense, double balance) {
        this.totalIncome = totalIncome;
        this.totalExpense = totalExpense;
        this.balance = balance;
    }

    // Getters and Setters
}
