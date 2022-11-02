// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import client from "../../libs/client";

interface Product {
    productId:number
    price:number
    nameEng:string
    brand:string
    nameKr:string
    quickdlivery:boolean
    imgUrl:string
    createdAt:Date
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    let {brands, quickDelivery, numOfRow, pageNo, priceNum } = req.query;

    // brands=> Louis Vuitton, Rolex,Celine,Acne Studios,Moncler,Apple,Prada, all
    if(typeof brands === 'string'){
        if(brands !== 'all') {
            brands
        }else{
            brands = undefined;
        }
    }else{
        throw new Error();
    }

    // quickDelivery=> on -> true / off -> false / 기타 -> undefind
    let quickDeliveryBool:boolean | undefined = true; // db where value
    if(typeof quickDelivery === 'string'){
        if(quickDelivery === 'off') quickDeliveryBool=false
        if(quickDelivery !== 'on' && quickDelivery !== 'off') quickDeliveryBool=undefined
    }else{
        throw new Error();
    }
    
    // priceNum => 0 : 전체 / 1 : 10만원 이하 / 2 : 10 ~ 30 이하 / 3 : 30 ~ 50 이하 / 4 : 50 이상
    let gte: number | undefined; // 보다 크거나 같은 것을 가져옴
    let lte: number | undefined; // 보다 작거나 같은 것을 가져옴

    if(typeof priceNum !== 'string') throw new Error();
    switch (priceNum){
        case "1":
            gte = 0;
            lte = 100000;
          break;
        case "2":
            gte = 100000;
            lte = 300000;
          break;
        case "3":
            gte = 300000;
            lte = 500000;
          break;
        case "4":
            gte = 500000;
            lte = undefined;
        break;
        default:
            gte = lte = undefined;
          break;
    }


    // numOfRow=> 한 페이지 결과 수 
    if(typeof numOfRow !== 'string') throw new Error();

    // pageNo=> pageNum 반환될 페이지 쪽수
    if(typeof pageNo !== 'string') throw new Error();
    

    const data : Product[] = await client.product.findMany({
        where:{
            AND : {
                brand : brands,
                quickdlivery : quickDeliveryBool,
                price : {
                    gte: gte, // 보다 크거나 같은 것을 가져옴
                    lte: lte, // 보다 작거나 같은 것을 가져옴
                }
            }
        },
        skip: (parseInt(pageNo)-1)*parseInt(numOfRow),
        take: parseInt(numOfRow),
    });
    for(let list of data){

        console.log(list['nameKr'], list['quickdlivery'],list['price']);
    }
    console.log(data.length)
    !data.length ? res.status(204).json({result:'검색 결과가 없습니다.'}) : res.status(201).json({data})
}
