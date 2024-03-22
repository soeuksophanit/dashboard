export const compareDate = (start_date, end_date) => {
  const start = start_date.split("-");
  const end = end_date.split("-");
  if (Number(start[0]) <= Number(end[0])) {
    if (Number(start[1]) <= Number(end[1])) {
      if (Number(start[2]) <= Number(end[2])) {
        return true;
      }
    }
  }
  return false;
};
