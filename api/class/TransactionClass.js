/*
Crear transaccion
obtener transacciones
obtener transaccion

*/

import TransactionModel from "../models/TransactionModel";

class ManagerTransaction{
    constructor(accountFromId, accountToId, type, amount, description){
        this.accountFromId = accountFromId;
        this.accountToId = accountToId;
        this.type = type;
        this.amount = amount;
        this.description = description;
    }

    async createTransaction(){
        try {
            const transaction = await TransactionModel.create({
                accountFromId: this.accountFromId, 
                accountToId: this.accountToId, 
                type: this.type, 
                amount: this.amount, 
                description: this.description
            })
            return transaction;
        } catch (error) {
            throw new Error(`Error al crear la transaccion: ${error}`);
        }
    }

    async getTransaction(id){
        try {
            const Transaction = await TransactionModel.findById(id);
            return Transaction;
        } catch (error) {
            throw new Error(`Error al buscar la transaccion: ${error}`);
        }
    }

    async getTransactions(){
        try {
            const Transactions = await TransactionModel.find();
            return Transaction;
        } catch (error) {
            throw new Error(`Error al buscar las transacciones: ${error}`);
        }
    }

    async getUserTransactions(id){
        try {
            const Transactions = await TransactionModel.find({accountFromId:id});
            return Transactions;
        } catch (error) {
            throw new Error(`Error al buscar las transacciones: ${error}`);
        }
    }
}