import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CustomEditor = (props) => {
  const [isDisplayingTeachers, setIsDisplayingTeachers] = useState(false);
  const [submitQuery, setSubmitQuery] = useState(0);
  const [currentQuery, setCurrentQuery] = useState("");
  const [sqlQuery, setSqlQuery] = useState("");
  const [queryNumber, setQueryNumber] = useState(0);

  const toggle = () => {
    setIsDisplayingTeachers(true);
    props.toggleDisplay(true);
  };

  const toggle2 = () => {
    setIsDisplayingTeachers(false);
    props.toggleDisplay(false);
  };

  const displayQuery = () => {
    if (sqlQuery === "select * from students") {
      setQueryNumber(1);
      props.setUserQueryNumberState(1);
    } else if (sqlQuery === "select * from students where grade= 'A'") {
      setQueryNumber(2);
      props.setUserQueryNumberState(2);
    } else if (sqlQuery === "select * from students where country= 'India'") {
      setQueryNumber(3);
      props.setUserQueryNumberState(3);
    } else if (
      sqlQuery === "select * from students where grade= 'A' and city='New York'"
    ) {
      setQueryNumber(4);
      props.setUserQueryNumberState(4);
    } else if (sqlQuery === "select * from students where city='London'") {
      setQueryNumber(5);
      props.setUserQueryNumberState(5);
    } else if (
      sqlQuery === "select * from students where grade= 'A' or city='London'"
    ) {
      setQueryNumber(6);
      props.setUserQueryNumberState(6);
    } else {
      setQueryNumber(7);
      props.setUserQueryNumberState(7);
    }
  };

  const handleChange = (e) => {
    setSqlQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitQuery(currentQuery);
  };

  let queries;
  if (!isDisplayingTeachers) {
    queries = [
      {
        label: "select * from students",
        value: 1,
      },
      {
        label: "select * from students where grade= 'A'",
        value: 2,
      },
      {
        label: "select * from students where country= 'India'",
        value: 3,
      },
    ];
  } else {
    queries = [
      {
        label: "select * from teachers",
        value: 1,
      },
      {
        label: "select * from teachers where subject= 'Math'",
        value: 2,
      },
      {
        label: "select * from teachers where experienceYears= 5",
        value: 3,
      },
    ];
  }

  return (
    <div className="flex justify-between  border-b-4 border-gray-600">
      <div className="px-5 mt-2">
        <Link
          href="/"
          className="w-full font-bold flex items-center justify-center border-2 py-1 px-3 border-sky-400"
        >
          <span style={{ color: "#2026d2" }}>SQL Editor</span>
        </Link>
        <div className="mt-5 mb-2 font-bold uppercase tracking-widest">
          Select Table
        </div>
        <div className="flex flex-col space-y-2 font-semibold">
          <div
            className="cursor-pointer text-center px-4 py-1 border bg-white hover:bg-slate-700 hover:text-white border-gray-400 hover:shadow-sm shadow-slate-300"
            onClick={toggle2}
          >
            Students
          </div>
          <div
            className="cursor-pointer text-center px-4 py-1 border bg-white hover:bg-slate-700 hover:text-white border-gray-400 hover:shadow-sm shadow-slate-300"
            onClick={toggle}
          >
            Teachers
          </div>
        </div>
      </div>

      <div className="border-2 border-slate-600"></div>

      <div className="w-[550px] mt-2">
        <div className="mb-2 font-semibold font-montserrat text-xl text-center">
          Select your query form here
        </div>
        <div className="overflow-y-scroll h-64 ">
          {queries.map((query) => (
            <button
              className="w-full border flex items-center hover:bg-slate-300 bg-white border-slate-300 text-left py-2 px-5 my-1 font-medium rounded-full text-base truncate"
              key={query.value}
              onClick={() => {
                setCurrentQuery(query.label);
                setSubmitQuery(query.value);
                props.onDataReceived(query);
              }}
            >
              <Image src="Images/play.svg" alt="play" width={12} height={12} />
              <span className="ml-2">{query.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="w-[600px] flex flex-col pt-2 border-l-4 border-slate-600">
        <div className="mb-2 font-semibold font-montserrat text-xl text-center">
          Write your query here
        </div>
        <textarea
          className="h-56 bg-slate-700 text-slate-100 px-5 py-2 focus:outline-none"
          type="text"
          placeholder="select * from students"
          onChange={handleChange}
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
