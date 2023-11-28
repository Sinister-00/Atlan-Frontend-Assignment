import React, { useState } from "react";
import OwnQuery from "./ownQuery";

function CustomFilter(props) {
  const [code, setCode] = useState("");
  const [qno, setQno] = useState(0);

  const displayQuery = () => {
    if (code === "select * from students") {
      setQno(1);
    } else if (code === "select * from students where year = 'Final'") {
      setQno(2);
    } else if (code === "select * from students where country= 'India'") {
      setQno(3);
    } else if (
      code === "select * from students where year = 'Final' and city='Delhi'"
    ) {
      setQno(4);
    } else if (code === "select * from students where city='Delhi'") {
      setQno(5);
    } else if (
      code === "select * from students where year = 'Final' or city='London'"
    ) {
      setQno(6);
    } else {
      setQno(7);
    }
  };
  const handleChange = (e) => {
    setCode(e.target.value);
  };
  const students = [
    {
      id: 1,
      name: "John Doe",
      year: "Final",
      country: "India",
      city: "Delhi",
    },
    {
      id: 2,
      name: "Jane Doe",
      year: "First",
      country: "India",
      city: "Mumbai",
    },
    {
      id: 3,
      name: "John Smith",
      year: "Second",
      country: "USA",
      city: "New York",
    },
    {
      id: 4,
      name: "Jane Smith",
      year: "Third",
      country: "USA",
      city: "Chicago",
    },
    {
      id: 5,
      name: "John Cena",
      year: "Final",
      country: "India",
      city: "Delhi",
    },
    {
      id: 6,
      name: "Jane Cena",
      year: "First",
      country: "India",
      city: "Mumbai",
    },
    {
      id: 7,
      name: "John Wick",
      year: "Second",
      country: "USA",
      city: "New York",
    },
    {
      id: 8,
      name: "Jane Wick",
      year: "Third",
      country: "USA",
      city: "Chicago",
    },
    {
      id: 9,
      name: "John Snow",
      year: "Final",
      country: "India",
      city: "Delhi",
    },
    {
      id: 10,
      name: "Jane Snow",
      year: "First",
      country: "India",
      city: "Mumbai",
    },
    {
      id: 11,
      name: "John Doe",
      year: "Second",
      country: "USA",
      city: "New York",
    },
    {
      id: 12,
      name: "Jane Doe",
      year: "Third",
      country: "USA",
      city: "Chicago",
    },
    {
      id: 13,
      name: "John Smith",
      year: "Final",
      country: "India",
      city: "Delhi",
    },
    {
      id: 14,
      name: "Jane Smith",
      year: "First",
      country: "India",
      city: "Mumbai",
    },
    {
      id: 15,
      name: "John Cena",
      year: "Second",
      country: "USA",
      city: "New York",
    },
  ];

  const teachers = [
    {
      pId: 101,
      name: "Professor A",
      subject: "Chemistry",
      age: 87,
    },
    {
      pId: 102,
      name: "Professor B",
      subject: "Mathematics",
      age: 88,
    },
    {
      pId: 103,
      name: "Professor C",
      subject: "Physics",
      age: 87,
    },
    {
      pId: 104,
      name: "Professor D",
      subject: "Chemistry",
      age: 88,
    },
    {
      pId: 105,
      name: "Professor E",
      subject: "Mathematics",
      age: 87,
    },
    {
      pId: 106,
      name: "Professor F",
      subject: "Physics",
      age: 88,
    },
    {
      pId: 107,
      name: "Professor G",
      subject: "Chemistry",
      age: 87,
    },
    {
      pId: 108,
      name: "Professor H",
      subject: "Mathematics",
      age: 88,
    },
    {
      pId: 109,
      name: "Professor I",
      subject: "Physics",
      age: 87,
    },
    {
      pId: 110,
      name: "Professor J",
      subject: "Chemistry",
      age: 88,
    },
    {
      pId: 111,
      name: "Professor K",
      subject: "Mathematics",
      age: 87,
    },
    {
      pId: 112,
      name: "Professor L",
      subject: "Physics",
      age: 88,
    },
    {
      pId: 113,
      name: "Professor M",
      subject: "Chemistry",
      age: 87,
    },
    {
      pId: 114,
      name: "Professor N",
      subject: "Mathematics",
      age: 88,
    },
    {
      pId: 115,
      name: "Professor O",
      subject: "Physics",
      age: 87,
    },
    {
      pId: 116,
      name: "Professor P",
      subject: "Chemistry",
      age: 88,
    },
    {
      pId: 117,
      name: "Professor Q",
      subject: "Mathematics",
      age: 87,
    },
    {
      pId: 118,
      name: "Professor R",
      subject: "Physics",
      age: 88,
    },
    {
      pId: 119,
      name: "Professor S",
      subject: "Chemistry",
      age: 87,
    },
  ];

  if (!props.showEmployees) {
    var data = students;
    var rows = [];

    if (props.query === 1) {
      rows = students;
    } else if (props.query === 2) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].year === "Final") {
          rows.push(data[i]);
        }
      }
    } else if (props.query === 3) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].country === "India") {
          rows.push(data[i]);
        }
      }
    } else if (props.query === 4) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].year === "Final" && data[i].city === "Delhi") {
          rows.push(data[i]);
        }
      }
    } else if (props.query === 5) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].city === "London") {
          rows.push(data[i]);
        }
      }
    } else if (props.query === 6) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].year === "Final" || data[i].city === "London") {
          rows.push(data[i]);
        }
      }
    }
  } else {
    var data = teachers;
    var rows = [];

    if (props.query === 1) {
      rows = teachers;
    } else if (props.query === 2) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].subject === "Chemistry") {
          rows.push(data[i]);
        }
      }
    } else if (props.query === 3) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].age === 87) {
          rows.push(data[i]);
        }
      }
    }
  }

  return (
    <div>
      <div className="text-xl py-1 font-medium text-center bg-gray-600 text-white">
        Below Result is from Query that you select from given options
      </div>
      <div className="flex justify-center items-center mt-10">
        {!props.showEmployees ? (
          <table className="md:table-fixed border-collapse text-xs">
            <thead>
              <tr className="bg-slate-600 text-slate-50">
                <th className="border border-l-slate-600 border-slate-50 text-center">
                  Student ID
                </th>
                <th className="border border-slate-50 text-center ">
                  Student Name
                </th>
                <th className="border border-slate-50 text-center ">Year</th>
                <th className="border border-slate-50 text-center ">Country</th>
                <th className="border border-slate-50 text-center ">City</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id}>
                  <td className="border border-slate-700 ">{row.id}</td>
                  <td className="border border-slate-700 ">{row.name}</td>
                  <td className="border border-slate-700 ">{row.year}</td>
                  <td className="border border-slate-700 ">{row.country}</td>
                  <td className="border border-slate-700 ">{row.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <table className="md:table-fixed border-collapse text-xs">
            <thead>
              <tr className="bg-slate-600 text-slate-50">
                <th className="border border-l-slate-600 border-slate-50 text-center">
                  Professor ID
                </th>
                <th className="border border-slate-50 text-center ">
                  Professor Name
                </th>
                <th className="border border-slate-50 text-center ">Subject</th>
                <th className="border border-slate-50 text-center ">Age</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.pId}>
                  <td className="border border-slate-700 ">{row.pId}</td>
                  <td className="border border-slate-700 ">{row.name}</td>
                  <td className="border border-slate-700 ">{row.subject}</td>
                  <td className="border border-slate-700 ">{row.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="text-xl mt-10 mb-5 py-1 font-medium text-center bg-gray-600 text-white">
        Below Result is from Query that you put in Code Editor
      </div>
      {props.qno != 0 && <OwnQuery queryNo={props.qno} students={students} />}
    </div>
  );
}

export default CustomFilter;
