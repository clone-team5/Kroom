import type { NextApiRequest, NextApiResponse } from "next";
import { setCookie } from '../../utils/cookies'
import client from "../../../libs/client";
import jwt from "jsonwebtoken"
import 'dotenv/config'

const secret_key = process.env.SECRET_KEY || "";
let userId:  string | object | Buffer;

export const authNoRefreshToken = async (
  req: NextApiRequest,
  res: NextApiResponse,
) => {
  if(req.cookies.refreshToken){
    const refreshToken = req.cookies.refreshToken;
    const identifier = jwt.verify(refreshToken, secret_key);
    if(!identifier){
        res.status(400).json({"message": "토큰이 존재하지 않습니다. "})
    }
    
    const user = await client.user.findUnique({where:{identifier}});

    if(user == null){
        res.status(400).json({"message": "토큰이 유효하지 않습니다. 다시 로그인해 주십시오."})
    };

    if(user?.refreshToken !== refreshToken){
        res.status(400).json({"message": "서버에 저장된 토큰 정보와 일치하지 않습니다. 다시 로그인해 주십시오."})
    }
    // The if (res.locals) in itself is problematic, because res.locals is an Express convention. 
    // This condition may be always false if you use another Node framework.

    setCookie(res, 'accessToken', jwt.sign(userId, secret_key, {expiresIn: '1h'}))
    res.getHeader('Set-Cookie')

  }else{
    res.status(400).json({"message": "로그인이 필요합니다."});
  }
}