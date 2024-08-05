class Tools{
    constructor(){
        this.status = "";
    }

    static accountNumbers(){
        const min= 1000000000;
        const max= 10000000000;
        const acNum = Math.floor(Math.random()*(max - min)+ min)
        return acNum;
    }



    static randomNumbers(){
        const min= 1000000000000000;
        const max= 10000000000000000;
        const randomNum = Math.floor(Math.random()*(max - min)+ min)
        return randomNum;
    }


    static expirationDate(){
        const fecha = new Date();
        const año = fecha.getFullYear() + 3
        const mes = fecha.getMonth()
        const dia = fecha.getDay()


        const expiration = `${año}-${mes}-${dia}`
        return expiration;
    }


    static Code(){
        const min= 100
        const max= 1000 
        const code = Math.floor(Math.random()*(max - min)+ min)
        return code;
    }


    static statusActivo(){
        this.status = "Activo";
        return this.status;
    }


    static statusInactivo(){
        this.status = "Inactivo";
        return this.status;
    }
}


export default Tools;


console.log(Tools.randomNumbers(), Tools.accountNumbers(), Tools.expirationDate(), Tools.Code(), Tools.statusActivo(),Tools.statusInactivo(), Tools.status)