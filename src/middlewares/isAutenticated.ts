import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface PayLoad {
  sub: string;
}
export function isAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  //Receive webtoken from server
  const authToken = req.headers.authorization;
  if (!authToken) {
    return res.status(401).end();
  }

  const [, token] = authToken.split(" ");
  try {
    //Validate the token
    const { sub } = verify(token, process.env.JWT_SECRET) as PayLoad;
    //Receive the "user_id" token inside a variable in request 
    req.user_id = sub;
    return next();
    console.log("Loggin Successfully");
  } catch (err) {
    return res.status(401).end();
  }

}
