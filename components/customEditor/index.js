import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { getQueries } from "./helper";

const CustomEditor = ({ showEmployees, show, setOwnQno, parentData }) => {
  const [code, setCode] = useState("");

  const displayQuery = () => {
    if (code === "select * from students") {
      setOwnQno(1);
    } else if (code === "select * from students where year = 'Final'") {
      setOwnQno(2);
    } else if (code === "select * from students where country = 'India'") {
      setOwnQno(3);
    } else if (
      code === "select * from students where year = 'Final' and city = 'Delhi'"
    ) {
      setOwnQno(4);
    } else if (code === "select * from students where city = 'Delhi'") {
      setOwnQno(5);
    } else if (
      code === "select * from students where year = 'Final' or city = 'London'"
    ) {
      setOwnQno(6);
    } else {
      setOwnQno(7);
    }
  };

  const queries = getQueries(showEmployees);

  return (
    <div className="flex justify-between border-b-4 border-gray-600 h-[350px]">
      <div className="px-5 mt-2 h-full">
        <Link
          href="#"
          className="w-full font-bold flex flex-col gap-2 py-4 items-center justify-center border-2 border-sky-400"
        >
          <Image
            src="/images/atlan-logo.png"
            alt="play"
            className="h-[50px] w-[150px]"
            height={50}
            width={150}
          />
          <span style={{ color: "#2026d2" }}>SQL Editor</span>
        </Link>
        <div className="mt-5 mb-2 font-bold uppercase tracking-widest text-center">
          Select Table
        </div>
        <div className="flex flex-col items-center justify-center md:flex-row gap-2 font-semibold">
          <div
            className="cursor-pointer text-center px-4 py-1 border bg-white hover:bg-slate-700 hover:text-white border-gray-400 hover:shadow-sm shadow-slate-300"
            onClick={() => show(false)}
          >
            Students
          </div>
          <div
            className="cursor-pointer text-center px-4 py-1 border bg-white hover:bg-slate-700 hover:text-white border-gray-400 hover:shadow-sm shadow-slate-300"
            onClick={() => show(true)}
          >
            Teachers
          </div>
        </div>
      </div>

      <div className="border-2 border-slate-600"></div>

      <div className="w-[40%] mt-2 flex flex-col items-center">
        <div className="mb-2 font-semibold font-montserrat text-xl text-center mt-2 mb-6">
          Select your query form here
        </div>
        <div className="overflow-y-scroll h-full">
          {queries.map((query) => (
            <button
              className="w-full border flex items-center hover:bg-slate-300 bg-white border-slate-300 text-left py-2 px-5 my-1 font-medium rounded-full text-base truncate"
              key={query.value}
              onClick={() => parentData(query)}
            >
              <Image src="images/play.svg" alt="play" width={12} height={12} />
              <span className="ml-2">{query.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-[45%] h-full flex flex-col pt-2 border-l-4 border-slate-600">
        <div className="mb-2 font-semibold font-montserrat text-xl text-center">
          Write your query here
        </div>
        <textarea
          className="h-full bg-slate-700 text-slate-100 px-5 py-2 focus:outline-none"
          type="text"
          placeholder="select * from students"
          onChange={(e) => setCode(e.target.value)}
        ></textarea>
        <button
          className="bg-gray-600 text-white py-2 font-medium tracking-widest border-b border-b-slate-50"
          onClick={displayQuery}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default CustomEditor;
