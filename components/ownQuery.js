import { Fragment } from 'react';

const OwnQuery = ({ queryNo, students }) => {
  let rows = [];
  let data = students;

  switch (queryNo) {
    case 1:
      rows = students;
      break;
    case 2:
      for (let i = 0; i < data.length; i++) {
        if (data[i].year === 'Final') {
          rows.push(data[i]);
        }
      }
      break;
    case 3:
      for (let i = 0; i < data.length; i++) {
        if (data[i].country === 'India') {
          rows.push(data[i]);
        }
      }
      break;
    case 4:
      for (let i = 0; i < data.length; i++) {
        if (data[i].year === 'Final' && data[i].city === 'Delhi') {
          rows.push(data[i]);
        }
      }
      break;
    case 5:
      for (let i = 0; i < data.length; i++) {
        if (data[i].city === 'London') {
          rows.push(data[i]);
        }
      }
      break;
    case 6:
      for (let i = 0; i < data.length; i++) {
        if (data[i].year === 'Final' || data[i].city === 'London') {
          rows.push(data[i]);
        }
      }
      break;
    default:
      rows = [];
  }

  if (queryNo) return <Fragment />;

  return (
    <div className="flex w-full flex-col">
      <div className="text-xl mb-5 py-1 font-medium text-center bg-gray-600 text-white">
        Below Result is from Query that you put in Code Editor
      </div>
      <div className="mb-5 flex flex-col items-center justify-center">
        {rows.length > 0 && (
          <table className="table-fixed border-collapse text-xs">
            <thead>
              <tr className="bg-slate-600 text-slate-50">
                <th className="border border-slate-50 text-center ">
                  students ID
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
        )}
        {!rows.length && (
          <div className="text-center">
            <div className="flex w-full justify-center items-center h-40 min-h-full">
              <h1 className="text-2xl font-bold">
                No Results Found for the given query
              </h1>
            </div>
            <div className="text-left">
              <div className="font-semibold text-xl">
                List of available queries are:{' '}
              </div>
              <div className="text-lg">{'>'} select * from students</div>
              <div className="text-lg">
                {'>'} select * from students where year= &apos;Final&apos;
              </div>
              <div className="text-lg">
                {'>'} select * from students where country= &apos;India&apos;
              </div>
              <div className="text-lg">
                {'>'} select * from students where year= &apos;Final&apos; and
                city=&apos;Delhi&apos;
              </div>
              <div className="text-lg">
                {'>'} select * from students where city=&apos;Delhi&apos;
              </div>
              <div className="text-lg">
                {'>'} select * from students where year= &apos;Final&apos; or
                city=&apos;London&apos;
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OwnQuery;
