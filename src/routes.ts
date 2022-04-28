import { Router } from 'express'
const router = Router()
import {CreateUserController} from "./controllers/user/CreateUserController"
import {AuthUserController} from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController"
import {isAuthenticated} from "./middlewares/isAutenticated"
//Routes USER
router.post('/users', new CreateUserController().handle)

//Route Autentication
router.post('/logger', new AuthUserController().handle)
router.get('/info', isAuthenticated, new DetailUserController().handle)
export{ router }