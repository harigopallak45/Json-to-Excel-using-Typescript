import * as XLSX from 'xlsx';

// Your JSON data
const jsonData = [
  { userId: 1, id: 1, title: 'Title 1', body: 'Body 1' },
  { userId: 2, id: 2, title: 'Title 2', body: 'Body 2' },
];

// Convert JSON to worksheet
const worksheet = XLSX.utils.aoa_to_sheet(jsonData);

// Generate workbook and add the worksheet
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

// Save to file
XLSX.writeFile(workbook, 'output.xlsx');