import express, {Request, Response} from 'express';
import {UserController } from './src/controller/userController';

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

    public routes(){
        this.app.use('/api/user/', this.userController.router);
        this.app.get("/", (req: Request, res: Response) => {
            res.send("Hallo Welt")
        });
    }

    public start(){
        this.app.listen(this.app.get('port'), ()=>{
            console.log(`Server is listening ${this.app.get('port')} port.`);
        });
    }
}

const server = new Server();
server.start();