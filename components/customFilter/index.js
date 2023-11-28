import React from 'react';
import { getTeachers, getStudents } from './helper';

const CustomFilter = (props) => {
  const tableData = props.showEmployees
    ? getTeachers(props.query)
    : getStudents(props.query);

  return (
    <div className="flex  w-full flex-col">
      <div className="text-xl py-1 font-medium text-center bg-gray-600 text-white">
        Below Result is from Query that you select from given options
      </div>
      <div className="flex justify-center items-center my-10">
        {!props.showEmployees ? (
          <table className="md:table-fixed border-collapse text-xs">
            <thead>
              <tr className="bg-slate-600 text-slate-50">
                <th className="border border-l-slate-600 border-slate-50 text-center">
                  Student ID
                </th>
                <th className="border border-slate-50 text-center">
                  Student Name
                </th>
                <th className="border border-slate-50 text-center">Year</th>
                <th className="border border-slate-50 text-center">Country</th>
                <th className="border border-slate-50 text-center">City</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr className="cursor-default" key={row.id}>
                  <td className="border border-slate-700 text-center">
                    {row.id}
                  </td>
                  <td className="border border-slate-700 text-center">
                    {row.name}
                  </td>
                  <td className="border border-slate-700 text-center">
                    {row.year}
                  </td>
                  <td className="border border-slate-700 text-center">
                    {row.country}
                  </td>
                  <td className="border border-slate-700 text-center">
                    {row.city}
                  </td>
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
                <th className="border border-slate-50 text-center">
                  Professor Name
                </th>
                <th className="border border-slate-50 text-center">Subject</th>
                <th className="border border-slate-50 text-center">Age</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row) => (
                <tr className="cursor-default" key={row.pId}>
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
    </div>
  );
};

export default CustomFilter;
