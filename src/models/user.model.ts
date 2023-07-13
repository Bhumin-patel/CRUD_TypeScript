import {Schema,model,Model,Document} from 'mongoose'

type userDocumnet = Document & {
    name : string
    email : string
    password : string
}

type userInput = {
    name : userDocumnet['name']
    email : userDocumnet['email']
    password : userDocumnet['password']
}

const userSchema = new Schema({
    name : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true,
        trim : true
    },
    password : {
        type : String,
        require : true
    }
})

const User : Model<userDocumnet>  = model<userDocumnet>('User', userSchema)

export {
    User,
    userInput,
    userDocumnet
}