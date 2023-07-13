import express,{Request,Response} from 'express'
import {User,userInput,userDocumnet} from '../models/user.model'

//Create
const createUser = async (req:Request,res:Response)=>{
    
    const user : userInput = req.body
    await User.create(user);
    return res.status(201).send(user)
}

//Read
const readUser = async (req:Request,res:Response)=>{

    const users = await User.find().exec();
    return res.status(200).send(users);
}

//Update
const updateUser =async (req:Request,res:Response) => {
    
    const _id : string = req.params.id
    const user = await User.findById(_id)

    if(!user){
        return res.status(404).json({ message: `User is not found.` });
    }

    const {name,email,password} = req.body 

    if (!name || !email || !password) {
        return res.status(422).json({ message: 'Enter all parameters' });
    }

    await User.updateOne({ _id}, { name, email, password });
    const userUpdated = await User.findById(_id, { name, email,password });

    return res.status(200).send(userUpdated);
}

//Delete
const deleteUser =async (req:Request,res:Response) => {
    const _id:string = req.params.id

    await User.findByIdAndDelete({_id})

    return res.status(200).json({ message: 'User deleted successfully.' });
}

export {
    createUser,
    readUser,
    updateUser,
    deleteUser
}