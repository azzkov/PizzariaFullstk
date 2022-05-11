import { Request, Response } from "express";
import {createCategoryService} from '../../services/category/createCategoryService'

//Create the category controller and receive the body of request to create the category
class createCategoryController{
    async handle(req: Request, res: Response){
        const { name} = req.body
        const CreateCategoryService = new createCategoryService
        const category = await CreateCategoryService.execute({
          name  
        })
        return res.json(category)
    }
}
export {createCategoryController}