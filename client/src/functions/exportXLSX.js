import * as XLSX from "xlsx";

export const exportXLSX = (name, data) => {
  var wb = XLSX.utils.book_new();
  let ws = XLSX.utils.json_to_sheet(data);

  XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

  XLSX.writeFile(wb, name);
};
