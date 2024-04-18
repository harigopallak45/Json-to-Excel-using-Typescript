const fs = require('fs');
const XLSX = require('xlsx');

// Read the JSON file
fs.readFile('output_data.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    try {
        // Parse JSON data
        const jsonData = JSON.parse(data);

        // Create a new workbook
        const workbook = XLSX.utils.book_new();

        // Create a worksheet
        const worksheet = XLSX.utils.json_to_sheet([jsonData]); // Wrap the jsonData in an array

        // Add worksheet to workbook
        XLSX.utils.book_append_sheet(workbook, worksheet, "JSON Data");

        // Write workbook to a file
        XLSX.writeFile(workbook, 'output_data.xlsx');

        console.log('JSON data successfully converted to Excel sheet and written to output_data.xlsx');
    } catch (parseError) {
        console.error('Error parsing JSON data:', parseError);
    }
});
