import express, {Request,Response} from 'express'
import { router } from './routes/user.router'
import './db/mongoose'

const app = express();

const port = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(port, ():void=>{
    console.log(`Server is running on ${port}`)
})