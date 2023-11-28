import React, { useState } from 'react';
import Head from 'next/head';
import OwnQuery from '@/components/ownQuery';
import students from '@/store/mockStudents';
import CustomEditor from '@/components/customEditor';
import CustomFilter from '@/components/customFilter';

const Index = () => {
  const [query, setQuery] = useState(1);
  const [ownQno, setOwnQno] = useState('');
  const [data, setData] = useState('');
  const [showEmployees, setShowEmployees] = useState(false);

  const toggle = (data) => {
    setShowEmployees(data);
    setQuery(1);
  };

  const dataPass = (childData) => {
    setQuery(childData.value);
    setData(childData.label);
  };

  const qno = (qno) => {
    setOwnQno(qno);
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4CAF50" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <title>Atlan Assessment</title>
        <meta name="title" content="Atlan Assessment"></meta>
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
        qno={qno}
        showEmployees={showEmployees}
        parentData={dataPass}
        show={toggle}
      />
      <div className="flex w-full">
        <CustomFilter
          qno={ownQno}
          showEmployees={showEmployees}
          showText={data}
          query={query}
        />
        <OwnQuery queryNo={ownQno} students={students} />
      </div>
    </>
  );
};
export default Index;
