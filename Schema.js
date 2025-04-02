const mongoose = require("mongoose")
const bcrypt = require("bcrypt")
const schema = new mongoose.Schema({
 
    username:{
        type:"String",
        required:true,
        unique:true
    },
    email:{
        type:"String",
        required:true
    },
    password:{
        type:"Number",
        minLength:10
    }
});

UserSchema.pre('save',async function (next){
    if(!this.ismodified('password'))
        return next();
    try{
    const saltRounds = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt)
    next()   
    }catch(e){
        console.log(e)
        next()
    } 
})


const name = mongoose.model('User',schema)
module.exports = name






