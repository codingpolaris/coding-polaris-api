import {Router, Response, Request} from 'express';
import {UserService} from '../services/userService';

export class UserController {
    public router: Router;
    private userService: UserService;

    constructor(){
        this.router = Router();
        this.userService = new UserService();
        this.routes();
    }

    public index = async (req: Request, res: Response) =>{
        res.send(this.userService.index());
    }

    public create = async (req: Request, res: Response) =>{
        res.send(this.userService.create());
    }

    public update = async (req: Request, res: Response) =>{
        res.send(this.userService.update());
    }
    
    public delete = async (req: Request, res: Response) =>{
        res.send(this.userService.delete());
    }

    public routes(){
        this.router.get('/', this.index);
        this.router.post('/', this.create);
        this.router.put('/:id', this.update);
        this.router.delete('/:id', this.delete);
    }
}