/*registrar usuario
Iniciar sesion
Cerrar sesion
Obtener informacion del usuario
Borrra cuenta
Actualizar
*/

import UserModel from '../models/UserModel.js'
import ManagerAccount from "./AccountClass.js"
import ManagerCard from './CardClass.js'
import Tools from './ToolClass.js'


class ManagerUser {
    constructor(name, lastName, email, phone, isInSession, isAdmin, password){
        this.email= email
        this.name= name
        this.lastName= lastName
        this.phone= phone
        this.isInSession= isInSession
        this.isAdmin= isAdmin
        this.password= password
    }

    async register(){
        try {
            const user = await UserModel.create({
                email: this.email,
                name: this.name,
                lastName: this.lastName,
                phone: this.phone,
                isInSession: this.isInSession,
                isAdmin: this.isAdmin,
                password: this.password
            });

            const MA = new ManagerAccount(user._id,12345,"Ahorro",1000)
            const currenAccount = await MA.createAccount();

            const MC = new ManagerCard(user._id, currenAccount._id, Tools.randomNumbers(),"debito", Tools.expirationDate(),Tools.Code(), Tools.statusActivo())
            await MC.createCard();
            return user;
        } catch (error) {
            throw new Error(`Error al crear usuario: ${error}`);
        }
    }

    async Login(email, password){
        try {
            const user = await UserModel.findOne({email: email});
            if(!user){
                throw new Error(`Usuario no registrado`)
            }
            if(user.password !== password){
                throw new Error(`Contraseña incorrecta`)
            }
            return "succeeded"


        } catch (error) {
            throw new Error(`Error al iniciar sesion: ${error}`);
        }
    }

    async getUserInfo(id){
        try {
            const user = await UserModel.findById(id);
            return user;
        } catch (error) {
            
        }
    }

    async updateEmail(id, email){
        try {
            if(!email){
                throw new Error("El correo es invalido");
            }
            await UserModel.findByIdAndUpdate(id,{
                $set: {email:email}
            })
            return "Ok"
        } catch (error) {
            throw new Error(`Error al Actualizar correo: ${error}`);
        }
    }

    async updatePhone(id, phone){
        try {
            if(!phone){
                throw new Error("El telefono es invalido");
            }
            await UserModel.findByIdAndUpdate(id,{
                $set: {phone:phone}
            })
            return "Ok"
        } catch (error) {
            throw new Error(`Error al Actualizar telefono: ${error}`);
        }
    }

    async updatePassword(id, password){
        try {
            if(!password){
                throw new Error("El contraseña es invalida");
            }
            await UserModel.findByIdAndUpdate(id,{
                $set: {password:password}
            })
            return "Ok"
        } catch (error) {
            throw new Error(`Error al Actualizar contraseña: ${error}`);
        }
    }

    async delete(){

    }


}

export default ManagerUser;