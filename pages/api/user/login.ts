// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";
import jwt from "jsonwebtoken";
import 'dotenv/config'
const secret_key = process.env.SECRET_KEY || ""
interface reqBody {
  email: string | undefined
  password: string | undefined
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password }:reqBody = req.body;
  
  try {
    if(!email||!password){
      throw new Error("아이디 혹은 비밀번호를 입력해 주세요")
    }
    
   const user = await client.user.findUnique({where:{email}})
   const identifier = user?.identifier
  /**accessToken 발급 */
  if(identifier == undefined){
    res.status(400).send("유저 정보가 없습니다.");
  };

  const accessToken = jwt.sign(
    {identifier},
    secret_key,
    { expiresIn: '1h' }
  );

  /**refreshToken 발급 */
  const refreshToken = jwt.sign(
    {identifier},
    secret_key,
    { expiresIn: '7d' }
  );
  
  await client.user.update({where:{identifier},data:{refreshToken}});

  res.status(200).json({accessToken,refreshToken})
  } catch (error) {
    res.status(400).json({ error, result: "실패" });
  }
}

// userId    Int     @id @default(autoincrement())
//   email     String  @unique
//   identifier String
//   nickname  String @unique
//   password  String
//   profileImg String ?
//   refreshToken String ?
//   createdAt DateTime @default(now())
//   updatedAt DateTime @updatedAt
