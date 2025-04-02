const express = require("express")
const mongoose = require("mongoose")
const local = require("./Schema")
const bhavi = express.Router(); 

bhavi.post('/abc',async(req,res)=>{
    const {username,email,password} = req.boby
    
    if(!username || !email || !password){
        return res.status(400).json({message:"Error Occured"}); 
    }
    try{
        const newuser = new local({username,email,password})
        await newuser.save();
        res.status(200).json({message:"All clear"})
    }
    catch(e){
       res.status(500).json({error:"Server Error"})
    }

});


module.exports = bhavi



