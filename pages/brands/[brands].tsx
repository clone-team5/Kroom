import React, { useState } from "react";
import { Item } from "../../types";

function Brands() {
  const [isToggle, setIsToggle] = useState();

  return (
    /* Total Container */
    <div className="w-[1280px] mt-[2rem] mb-[40px] mx-auto px-10">
      {/* Top */}
      <div className="mt-[40px] mx-auto">
        <div className="text-[32px] text-[#222222] font-bold flex justify-center">
          Acne
        </div>
        <div className="text-[12px] text-[#22222280] flex justify-center">
          상품923
        </div>
      </div>

      {/* Middle */}
      <div className="max-w-[1280px] pl-[10px] pb-[10px] border-solid border-b">
        <button className="inline-block h-[38px] text-[14px] mr-[8px] py-[10px] px-[12px] bg-[#f4f4f4] rounded-xl align-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1}
            stroke="currentColor"
            className="w-6 h-6">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
        <button className="inline-block h-[38px] text-[14px] mr-[8px] py-[10px] px-[12px] bg-[#f4f4f4] rounded-xl align-top">
          신발
        </button>
        <button className="inline-block h-[38px] text-[14px] mr-[8px] py-[10px] px-[12px] bg-[#f4f4f4] rounded-xl align-top">
          패션잡화
        </button>
        <button className="inline-block h-[38px] text-[14px] mr-[8px] py-[10px] px-[12px] bg-[#f4f4f4] rounded-xl align-top">
          라이프
        </button>
      </div>

      {/* Bottom (filter + betweenBtn + items) */}
      <div className="flex box-border relative my-0 mx-auto">
        {/* filter container */}
        <div className="w-[210px] mr-[10px] pr-[10px] box-border justify-between items-center cursor-pointer">
          <div className="m-0 pt-[23px] pb-[15px] text-[#222222] text-[14px] font-bold justify-between items-center">
            필터
          </div>

          {/* 카테고리 & 모든 카테고리 */}
          {[1, 2, 3, 4, 5, 6].map((e) => (
            <div
              key={e}
              className="box-border border-solid border-b border-[#ebebeb]">
              <div className="flex m-0 py-[16px] box-border justify-between items-center">
                <div className="flex flex-column cursor-pointer">
                  <span className="text-[13px] text-[#222222] font-bold absolute">
                    카테고리
                  </span>
                  <span className="mt-[24px] text-[15px] text-[#22222280] tracking-[-.15px] truncate">
                    모든 카테고리
                  </span>
                </div>

                {/* + btn */}
                <div className="m-0 p-0 h-[20px] cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="gray"
                    className="w-5 h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                </div>
              </div>

              {/* filter box (isToggle == 1) */}
              <div className="m-0 p-0 pb-[24px] box-border">
                <ul className="m-0 p-0 max-h-[315px] overflow-y-hidden box-border list-none">
                  <li className="list-none">
                    <label className="relative flex items-center cursor-pointer">
                      <input
                        className="w-[0.9px]"
                        type="checkbox"
                        value="신발"
                      />
                      {/*  <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="1"
                        className="w-[12px]">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg> */}
                      <span className="pl-2">신발</span>
                    </label>
                    {/*  <a className="text-[14px] tracking-[-.21px] no-underline items-start flex">
                      <></>
                    </a>
                     */}
                  </li>
                </ul>
              </div>
            </div>
          ))}
        </div>
        {/* betweenBtn + items */}
        <div className="flex-1 box-border m-0 p-0">
          <div className="pt-[16px] px-[10px] justify-between flex">
            {/* 빠른배송 & 브랜드배송*/}
            <div>
              <button className="inline-flex w-[88px] h-[28px] text-[13px] mr-[8px] pt-1 px-[9px] bg-[#00000001] border-solid border-[#ebebeb]  border-[1px] rounded-[17px] align-top">
                <img
                  className="w-[10px] h-[12px] mt-[4px] mr-[2px]"
                  src="https://kream.co.kr/_nuxt/img/ico-express.8dac9dc.svg"
                  alt="kream"
                />
                빠른배송
              </button>
              <button className="inline-flex w-[88px] h-[28px] text-[13px] mr-[8px] pt-1 px-[9px] bg-[#00000001] border-solid border-[#ebebeb]  border-[1px] rounded-[17px] align-top">
                브랜드배송
              </button>
            </div>

            {/* 인기순 */}
            <div className="flex items-center flex-row font-bold cursor-pointer box-border">
              인기순
              <button className="inline-flex ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="w-6 h-6">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 7.5L7.5 3m0 0L12 7.5M7.5 3v13.5m13.5 0L16.5 21m0 0L12 16.5m4.5 4.5V7.5"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="mx-[auto] h-auto my-0 p-0 box-border flex justify-between">
            {/* item container */}
            <div>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((e) => (
                <div
                  key={e}
                  className="w-[25%] mx-0 my-[20px] py-0 px-[10px] box-border align-top inline-block relative transition 0.4s ease-in-out">
                  <div className="bg-[#f4f4f4] rounded-[12px]">
                    <img
                      src="https://kream-phinf.pstatic.net/MjAyMTExMjZfMTky/MDAxNjM3OTA0MTc1MTM5.7u1ztveFrIkGQFz_zkyO48FxYRCIaNy5FrZZV6lJh5Ag.0voOw4cwfn4fE2AuT9TfCqQrfkAnK-sS4c4IOckiZcIg.JPEG/a_f0a2f1827f1e43ae911d999b9c25b618.jpg?type=m_webp"
                      alt="item"
                      className="rounded-[12px]"
                    />
                  </div>
                  <div className="m-0 pt-[9px]">
                    <p className="text-[14px] text-[#333333] font-bold leading-4 tracking-[-0.21px] underline underline-offset-[1px] box-border align-top inline-block">
                      Acne Studios
                    </p>
                    <p className="mt-[2px] text-[13px] leading-4 text-ellipsis">
                      Acne Studios Mohair Check Scarf Fuchsia Lilac Pink
                    </p>
                    <p className="mt-[2px] text-[12px] text-[#22222280] leading-4 tracking-[-.06] text-ellipsis">
                      아크네 스튜디오 모헤어 체크 스카프 푸시아 라일락 핑크
                    </p>
                    <div className="text-[11px] relative before:top-[4px] before:left-[3.5px] before:content-[''] before:absolute before:block before:h-[15px] before:w-[11px] before:bg-[url(https://kream.co.kr/_nuxt/img/ico-express.8dac9dc.svg)] text-green-400 py-[4.5px] pr-[5.5px] pl-[17px] inline-block">
                      빠른배송
                    </div>
                    <span className="m-0 p-0 text-[14px] text-[#222222] leading-[17px] font-bold box-border flex">
                      377,000원
                    </span>
                    <p className="m-0 p-0 box-border text-[11px] text-[#22222280] leading-[13px]">
                      즉시 구매가
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brands;
