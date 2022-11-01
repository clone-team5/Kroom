import { use, useEffect, useRef, useState } from "react";
import useFixoluteBox from "../../hooks/useFixoluteBox";
import { cls } from "../../utils";

const Product = () => {
  const {
    refs: { fixsolute, limit },
    fixoluteStyle,
  } = useFixoluteBox();

  return (
    <>
      <div className="float-left w-32 h-32 relative">
        <div
          className="bg-orange-200 w-32 h-32"
          ref={fixsolute}
          style={fixoluteStyle}
        >
          Enter
        </div>
      </div>
      <div className="float-left bg-orange-400 w-32 h-96">Enter</div>
      <div ref={limit} className="bg-slate-300 float-left w-24 h-[500px]">
        Enter
      </div>
      <div className="bg-slate-300 float-left w-24 h-[1000px]">Enter</div>
    </>
  );
};

export default Product;
