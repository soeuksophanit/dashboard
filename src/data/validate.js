export const compareDate = (start_date, end_date) => {
  const start = new Date(start_date);
  const end = new Date(end_date);

  if (start <= end) {
    return true;
  } else {
    return false;
  }
};
