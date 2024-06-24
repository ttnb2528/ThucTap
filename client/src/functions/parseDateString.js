export const parseDateString = (dateString) => {
  if (dateString.length !== 8) {
    return null;
  }

  const day = dateString.substr(0, 2);
  const month = dateString.substr(2, 2) - 1; // month begin 0
  const year = dateString.substr(4, 4);

  const dateObject = new Date(year, month, day);

  return dateObject;
};
