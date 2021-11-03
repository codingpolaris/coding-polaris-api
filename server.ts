import express, {Request, Response} from 'express';
import { createConnection, ConnectionOptions, } from 'typeorm';
import {UserController } from './src/controller/userController';
import * as dotenv from "dotenv";
dotenv.config();

class Server {

    private userController: UserController;

    private app: express.Application;

    constructor(){
        this.app = express();
        this.configuration();
        this.userController = new UserController();
        this.routes();
    }

    public configuration(){
        this.app.set('port', process.env.PORT || 8080);
    }

    options:ConnectionOptions = {
        type:'postgres',
        host:process.env.HOST,
        port:Number(process.env.PORT),
        username:process.env.USER,
        password:process.env.PASSWORD,
        database:process.env.DATABASE,
        entities:["build/database/entities/**/*.js"],
        synchronize:true,
        name:process.env.NAME,
    }
    public async routes(){
        await createConnection(this.options);

        this.userController = new UserController();

        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hallo Welt")
        });

        this.app.use('/api/user/', this.userController.router);
    }

    public start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server is listening ${this.app.get('port')} port.`);
        });
    }

}

const server = new Server();
server.start();