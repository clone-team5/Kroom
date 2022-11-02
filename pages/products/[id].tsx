import Link from "next/link";
import { use, useEffect, useRef, useState } from "react";
import icons from "../../components/icons";
import useFixoluteBox from "../../hooks/useFixoluteBox";
import { cls } from "../../utils";

const Product = () => {
  const {
    refs: { fixsolute, limit },
    fixoluteStyle,
  } = useFixoluteBox();

  return (
    <>
      <div className="w-[1280px] mx-auto px-10 pt-[30px] pb-40 h-[2120px]">
        <div className="w-[600px] relative pr-10 bg-red-300 float-left">
          <div
            className="h-[560px] bg-slate-300 w-[560px] "
            ref={fixsolute}
            style={fixoluteStyle}
          ></div>
        </div>
        <div
          ref={limit}
          className="h-auto pl-10 w-[600px] float-right border-l border-l-gray-300"
        >
          <div className="h-8">
            <Link href="#" className="text-lg font-extrabold">
              Undermycar
            </Link>
          </div>
          <div className="h-[44px] mb-1 text-lg font-normal">
            Undermycar Operation Chromite Kerberos Oversized Varsity Jacket Ox
            Blood - 22FW
          </div>
          <div className="h-[17px]"></div>
          <div className="h-[57px] pt-[19px] pb-[12px] border-b border-b-slate-300 flex justify-between">
            <div className="text-[13px]">사이즈</div>
            <div className="text-base font-bold flex justify-center">
              <p className="mr-[5px]">모든 사이즈</p>
              <icons.Check></icons.Check>
            </div>
          </div>
          <div className="h-[47px] mt-[11px] flex justify-between items-center">
            <div>최근 거래가</div>
            <div className="text-base font-bold flex flex-col items-end">
              <p className="">1,270,000원</p>
              <p>asdasd</p>
            </div>
          </div>
          <div className="h-[60px] mt-[17px] flex justify-between">
            <div className="w-[206px] h-[60px] flex justify-center items-center bg-red-700">
              <div>구매</div>
              <div>1,230,000원</div>
            </div>
            <div className="w-[206px] h-[60px] flex justify-center items-center bg-green-700">
              판매
            </div>
          </div>
          <div className="h-[60px] mt-[12px]">관심 상품</div>
          <h3 className="pt-[39px] pb-[13px] h-[22px]">상품정보</h3>
          <div className="h-[79px] border-y-2">모델번호</div>
          <h3 className="h-[56px] pt-[39px]">배송정보</h3>
          <div className="h-[70px] pt-[12px] pb-[18px]">일반배송</div>
          <div className="h-[69px] pt-[19px] pb-[10px]">창고보관시</div>
          <div className="h-[100px] pt-[20px]"></div>
          <div className="h-[568px]"></div>
        </div>
      </div>
    </>
  );
};

export default Product;
/*{ 
  productId: 290,
  price: 1450000,
  nameEng: ‘Apple iPhone 14 Pro 128GB Silver (Korean Ver.)’,
  brand: ‘Apple’,
  nameKr: ‘애플 아이폰 14 프로 128기가 실버 (국내 정식 발매 제품)’,
  quickdlivery: true,
  imgUrl: ‘https://kream-phinf.pstatic.net/MjAyMjA5MjhfMTk5/MDAxNjY0MzM1MDY3ODc1.U3kxiHRzQarvxPVAyn_9nXWfCJgfGUMEf-Sj9m4sq_Yg.I-kyuffYbWkz8m7ByNbQF3LSKbSavVLLtvCyOZznahwg.JPEG/a_44b4149744b948c7857e3dc929a958e1.jpg?type=m’,
  pid: ‘78864’,
  createdAt: 2022-11-02T07:07:25.791Z
} */
