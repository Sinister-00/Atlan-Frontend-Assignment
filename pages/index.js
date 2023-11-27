import React, { useState } from "react";
import Head from "next/head";

const Index = () => {
  const [currentQuery, setCurrentQuery] = useState(1);
  const [userQno, setUserQno] = useState("");
  const [receivedData, setReceivedData] = useState("");
  const [displayEmployees, setDisplayEmployees] = useState(false);

  const toggleDisplay = (data) => {
    setDisplayEmployees(data);
    setCurrentQuery(1);
  };

  const onDataReceived = (childData) => {
    setCurrentQuery(childData.value);
    setReceivedData(childData.label);
  };

  const setUserQnoState = (qno) => {
    setUserQno(qno);
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
      <div></div>
    </>
  );
};
export default Index;
