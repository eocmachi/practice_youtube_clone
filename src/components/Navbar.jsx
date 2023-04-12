import React from "react";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="fixed flex items-center w-full px-[6.25rem] py-8 bg-white">
      <h1
        className="w-48 cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={process.env.PUBLIC_URL + "./image/logo.png"} alt="" />
      </h1>
      <form
        className="absolute translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 flex border border-[#ccc] rounded-full overflow-hidden"
        action=""
      >
        <input className="w-[60rem] px-8" type="text" placeholder="검색" />
        <button className="bg-[#f8f8f8] border-l py-4 px-9">
          <CiSearch />
        </button>
      </form>
    </div>
  );
}
