import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";


function makeid(length:number) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) { 
    const {email,nickname,password,confirmPassword}=req.body;
    const user = await client.user.findUnique({
        where:{email}
    })
    if(password!==confirmPassword){
        res.status(400).send("비밀번호를 다시 확인 해주세요.")
    }
    if(user){
        res.status(400).send("중복된 이메일 입니다.")
    }
    await client.user.create({
        data:{
        email,
        nickname,
        password,
        identifier:makeid(7)
        }
    })
    
    res.status(200).send("회원가입이 완료 되었습니다.")
}