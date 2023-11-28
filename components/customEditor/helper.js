export function getQueries(showEmployees) {
  const queries = [];
  if (!showEmployees) {
    queries.push({ label: "select * from students", value: 1 });
    queries.push({
      label: "select * from students where year= 'Final'",
      value: 2,
    });
    queries.push({
      label: "select * from students where country= 'India'",
      value: 3,
    });
  } else {
    queries.push({ label: "select * from teachers", value: 1 });
    queries.push({
      label: "select * from teachers where subject = 'chemistry'",
      value: 2,
    });
    queries.push({
      label: "select * from teachers where yearId = 87",
      value: 3,
    });
  }
  return queries;
}
