import { Router } from 'express'
const router = Router()
import {CreateUserController} from "./controllers/user/CreateUserController"
import {AuthUserController} from "./controllers/user/AuthUserController"
import { DetailUserController } from "./controllers/user/DetailUserController"
import {isAuthenticated} from "./middlewares/isAutenticated"
import {createCategoryController} from "./controllers/category/createCategoryController"
import {listCategoryController} from "./controllers/category/listCategoryController"
//Routes USER
router.post('/users', new CreateUserController().handle)
//Route Autentication
router.post('/logger', new AuthUserController().handle)
//Route Detail User
router.get('/info', isAuthenticated, new DetailUserController().handle)


//Routes CATEGORY
router.post('/category', isAuthenticated, new createCategoryController().handle)
router.get('/category', isAuthenticated, new listCategoryController().handle)
export{ router }