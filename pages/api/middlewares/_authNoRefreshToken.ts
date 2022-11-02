import type { NextApiRequest, NextApiResponse } from "next";
// import { setCookie } from '../../utils/cookies'
import client from "../../../libs/client";
import jwt from "jsonwebtoken"
import 'dotenv/config'

const secret_key = process.env.SECRET_KEY || "";
export const authNoRefreshToken = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if(req.cookies.accessToken){
    const accessToken = req.cookies.accessToken;
    // let userId: string | jwt.JwtPayload | undefined;
    
    jwt.verify(accessToken, secret_key, (err, decoded) => {
      if(err){
        res.status(400).json({"message": "accessToken이 유효하지 않습니다.", errorMessage: err})
      };
      // The if (res.locals) in itself is problematic, because res.locals is an Express convention. 
      // This condition may be always false if you use another Node framework.
      // userId = decoded;
    })
  }else{
    res.status(400).json({"message": "로그인이 필요합니다."});
  }

}