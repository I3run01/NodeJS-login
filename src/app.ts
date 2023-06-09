import express, {Request, Response} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import usersRouter from './router/usersRouter'
import filesRouter from './router/filesRouter'
import cookieParser from "cookie-parser";
import bodyParser from 'body-parser';
import { mongoConnect } from './database/mongoDB'

dotenv.config()

mongoConnect()

const server = express()

server.use(cors({
    origin: ['https://yournote.cloud', process.env.LOCALHOST as string],
    credentials: true
}))

server.use(bodyParser.json())
server.use(cookieParser())
server.use(express.urlencoded({ extended: true}))
server.use(express.static(__dirname + '/public'));

server.use('/api/users', usersRouter)
server.use('/api/files', filesRouter)

server.use((req: Request, res: Response) => {
    res.status(404).json({ message: 'Endpoint not found'})
})

export default server