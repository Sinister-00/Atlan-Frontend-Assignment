import React, { useState } from "react";
import CustomEditor from "../components/customEditor";
import Head from "next/head";

const Index = () => {
  const [currentQuery, setCurrentQuery] = useState(1);
  const [userQueryNumber, setUserQueryNumber] = useState("");
  const [receivedData, setReceivedData] = useState("");
  const [isDisplayingTeachers, setIsDisplayingTeachers] = useState(false);

  const toggleDisplay = (data) => {
    setIsDisplayingTeachers(data);
    setCurrentQuery(1);
  };

  const onDataReceived = (childData) => {
    setCurrentQuery(childData.value);
    setReceivedData(childData.label);
  };

  const setUserQueryNumberState = (qno) => {
    setUserQueryNumber(qno);
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4CAF50" />{" "}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins&display=swap"
          rel="stylesheet"
        />
        <title>AtlanSQL Explorer</title>
        <meta name="title" content="AtlanSQL Explorer"></meta>
        <meta
          name="description"
          content="Navigate your data landscape effortlessly with AtlanSQL Explorer, your go-to tool for seamless SQL querying and exploration."
        />
        <meta name="author" content="Swapnil" />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://atlan-frontend-assignment.vercel.app/"
        />
      </Head>
      <CustomEditor
        setUserQueryNumberState={setUserQueryNumberState}
        isDisplayingTeachers={isDisplayingTeachers}
        onDataReceived={onDataReceived}
        showText={receivedData}
        parentData={onDataReceived}
        toggleDisplay={toggleDisplay}
      />

      {/* <div></div> */}
    </>
  );
};
export default Index;
