const express = require("express");
const userModel = require("../models/UserModel");


module.exports ={

    async createUser(req, res) {

        const { username, email, password } = req.body;

        const user = await userModel.create({
            username,
            email,
            password
        })

       
        
    
        return res.status(201).json(user);
    },


    async index(req, res){

        const users = await userModel.find().select("-password");

        if(!users) return res.status(404).json({"message": 'Users not found'})
        
        return res.json(users)
    },


    async show(req, res){

        const { username } = req.body;

        console.log(username)

        const user = await userModel.findOne({username}).select('-password')

        if(!user) return res.status(404).json({"message": 'Users not found'})
        
        return res.json(user)
    },

    async delete(req, res){

        const { id } = req.params;

        console.log(id)

        const user = await userModel.findById(id)

        if(!user) return res.status(404).json({"message": 'Users not found'})

        await userModel.deleteOne({_id:id});
        
        return res.status(204).json()
    },

    async update(req, res){

        const { id } = req.params;

        const { username, email } = req.body;

        console.log(id)

        let user = await userModel.findById(id).select('-password')

        if(!user) return res.status(404).json({"message": 'Users not found'})
       
        user = await userModel.updateOne({_id:id}, {
          username,
          email
        })
        
        return res.status(200).json(user)
    }

}
