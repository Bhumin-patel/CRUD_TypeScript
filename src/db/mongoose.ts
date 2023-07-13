import mongoose from 'mongoose'

mongoose.Promise = Promise;

mongoose.connect("mongodb://127.0.0.1:27017/practice").then( () =>{
    console.log("Database is connected!")
})