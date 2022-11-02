import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import client from "../../../libs/client";
import jwt from "jsonwebtoken"
import 'dotenv/config'
const secret_key = process.env.SECRET_KEY || "";

export const isLogin = async (
   req: NextApiRequest,
   res: NextApiResponse,
 ) => {
   const accessToken = req.cookies.accessToken;
   if(accessToken){
      jwt.verify(accessToken, secret_key, (err, decoded) => {
         if(err){
            res.status(400).send(false);
         }
         res.status(200).send(true);
      });
   }
 }

 export const isLogout = async (
   req: NextApiRequest,
   res: NextApiResponse,
 ) => {
   const accessToken = req.cookies.accessToken;
   if(accessToken){
      jwt.verify(accessToken, secret_key, (err, decoded) => {
         if(err){
            res.status(200).send(true);
         }

         res.status(400).send(false);
      });
   }
 }
