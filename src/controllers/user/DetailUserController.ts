import { Request, Response } from 'express';
import { DetailUserService } from "../../services/user/DetailUserService";


class DetailUserController{
      async handle(req:Request, res: Response){
        //Call th token and receive
        const user_id = req.user_id;
        //Call the servide user token
        const detailUserService = new DetailUserService()
        //Send the user token to validate
        const user = await detailUserService.execute(user_id)

        return res.json(user)
      }
}
export {DetailUserController}