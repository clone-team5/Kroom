import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../../libs/client";
import bcrypt from "bcryptjs";
interface bodyTypes {
  email: string;
  password: string;
  size: number;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email, password, size }: bodyTypes = req.body;

  try {
    const user = await client.user.findUnique({
      where: { email },
    });

    if (user) {
      res.status(400).send("중복된 이메일 입니다.");
    }
    const encPass = await bcrypt.hash(password, 10);
    const nickname = email.split("@")[0];
    await client.user.create({
      data: {
        email,
        nickname,
        size,
        password: encPass,
      },
    });
    res.status(200).send("회원가입이 완료 되었습니다.");
  } catch (error) {
    res.status(400).json(error);
  }
}
