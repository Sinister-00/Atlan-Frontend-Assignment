import students from '@/store/mockStudents';
import teachers from '@/store/mockTeachers';

export const getStudents = (query) => {
  var data = students;
  var rows = [];

  switch (query) {
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

  return rows;
};

export const getTeachers = (query) => {
  var data = teachers;
  var rows = [];

  if (query === 1) {
    rows = teachers;
  } else if (query === 2) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].subject === 'Chemistry') {
        rows.push(data[i]);
      }
    }
  } else if (query === 3) {
    for (let i = 0; i < data.length; i++) {
      if (data[i].age === 87) {
        rows.push(data[i]);
      }
    }
  }

  return rows;
};
