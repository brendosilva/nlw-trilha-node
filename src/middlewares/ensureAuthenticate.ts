import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IpayLoad {
  sub: string
}


export function ensureAuthenticate(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization
  if (!authToken) {
    return response.status(401).end()
  }
  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, "87a429872c7faee7e8bc9268d5bf548e") as IpayLoad;

    request.user_id = sub;

    return next();
  } catch (err) {
    return response.status(401).end();
  }


}