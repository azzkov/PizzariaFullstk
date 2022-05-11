import {Request, Response} from 'express'
import {listCategoryService} from "../../services/category/listCategoryService"

class listCategoryController{
    async handle(req: Request, res: Response){
        const ListCategoryService = new listCategoryService()
        const category = await ListCategoryService.execute()
        return res.json(category)
    }
}
export {listCategoryController}