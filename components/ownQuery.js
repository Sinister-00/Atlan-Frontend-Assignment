const OwnQuery = (props) => {
  let students = [...props.students];
  let rows = [];
  let data;
  data = students;
  if (props.queryNo === 1) {
    students = [...props.students];
    rows = students;
  } else if (props.queryNo === 2) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].year === "Final") {
        rows.push(data[i]);
      }
    }
  } else if (props.queryNo === 3) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].country === "India") {
        rows.push(data[i]);
      }
    }
  } else if (props.queryNo === 4) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].year === "Final" && data[i].city === "Delhi") {
        rows.push(data[i]);
      }
    }
  } else if (props.queryNo === 5) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].city === "London") {
        rows.push(data[i]);
      }
    }
  } else if (props.queryNo === 6) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].year === "Final" || data[i].city === "London") {
        rows.push(data[i]);
      }
    }
  } else {
    rows = [];
  }

  return (
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
      {rows.length === 0 && (
        <div className="text-center">
          <h1 className="text-2xl font-bold">
            No Results Found for the given query
          </h1>
          <div className="text-left">
            <div className="font-semibold text-xl">
              List of available queries are:{" "}
            </div>
            <div className="text-lg">{">"} select * from students</div>
            <div className="text-lg">
              {">"} select * from students where year= &apos;Final&apos;
            </div>
            <div className="text-lg">
              {">"} select * from students where country= &apos;India&apos;
            </div>
            <div className="text-lg">
              {">"} select * from students where year= &apos;Final&apos; and
              city=&apos;Delhi&apos;
            </div>
            <div className="text-lg">
              {">"} select * from students where city=&apos;Delhi&apos;
            </div>
            <div className="text-lg">
              {">"} select * from students where year= &apos;Final&apos;
              or city=&apos;London&apos;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OwnQuery;
