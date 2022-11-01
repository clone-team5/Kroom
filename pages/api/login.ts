// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

// 크롤링
/* import axios from 'axios';
const cheerio = require('cheerio'); */

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, nickname } = req.body;
  try {
    const findOneUser = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    console.log(findOneUser);

    const result = await client.user.create({
      data: {
        email: email,
        identifier: "testtest",
        password: password,
        nickname: nickname,
        profileImg: "../test",
      },
    });

    res.status(200).send("후잉");
  } catch (error) {
    console.log(error);
    res.status(200).send({ result: "실패" });
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
