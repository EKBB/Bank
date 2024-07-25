//Crear una tarjeta
//Obtener tarjeta
//Obtener tarjetas

import CardModel from "../models/CardModel";

class ManagerCard {
    constructor(userId, accountId, cardNumber, cardType, expirationDate, securityCode, status){
        this.userId = userId;
        this.accountId = accountId;
        this.cardNumber = cardNumber;
        this.cardType = cardType;
        this.expirationDate = expirationDate;
        this.securityCode = securityCode;
        this.status = status;
    }
    async createCard(){
        try {
            await CardModel.create({
                userId: this.userId, 
                accountId: this.accountId, 
                cardNumber: this.cardNumber, 
                cardType: this.cardType, 
                expirationDate: this.expirationDate, 
                securityCode: this.securityCode, 
                status: this.status 
            })
            return "OK";
        } catch (error) {
            throw new Error(`Error al crear tarjeta: ${error}`);
        }
    }

    async getCard(id){
        try {
            const card = await CardModel.find(id);
            return card
        } catch (error) {
            throw new Error(`Error al buscar tarjeta: ${error}`);
        }
    }

    async getCards(){
        try {
            const cards = await CardModel.find();
            return cards
        } catch (error) {
            throw new Error(`Error al buscar tarjetas: ${error}`);
        }
    }
}

export default ManagerCard;