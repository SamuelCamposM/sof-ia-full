import  {Schema, model } from 'mongoose';
import { hashSync, genSaltSync, compareSync } from 'bcrypt-nodejs';

const userSchema = new Schema({
    email: String,
    password: String,
    username: String
});

//metodo que encripta la contraseña 
userSchema.methods.encryptPassword = (password) => {
    return hashSync(password, genSaltSync(10));
};
//metodo para desencriptar la contraseña
userSchema.methods.comparePassword= function (password) {
    return compareSync(password, this.password);
};

export default model('users', userSchema);