import express, {Request,Response, response} from 'express'
import {createUser,readUser,updateUser,deleteUser} from '../controllers/user.controller'

const router = express.Router();

//Create
router.post("/user/create", createUser)

//Read
router.get("/user/read", readUser)

//Update
router.patch("/user/update/:id", updateUser)

//Delete
router.delete("/user/delete/:id", deleteUser)

export {
    router
}
