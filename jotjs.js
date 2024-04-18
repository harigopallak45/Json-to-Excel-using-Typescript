import { readFile } from 'fs';
import { utils, writeFile } from 'xlsx';
// Read the JSON file
readFile('output_data.json', 'utf8', function (err, data) {
    if (err) {
        console.error('Error reading JSON file:', err);
        return;
    }
    try {
        // Parse JSON data
        var jsonData = JSON.parse(data);
        // Create a new workbook
        var workbook = utils.book_new();
        // Create a worksheet
        var worksheet = utils.json_to_sheet([jsonData]); // Wrap the jsonData in an array
        // Append worksheet to workbook
        utils.book_append_sheet(workbook, worksheet, "JSON Data");
        // Write workbook to a file
        writeFile(workbook, 'output_file.xlsx');
        console.log('JSON data successfully converted to Excel sheet and written to output_data.xlsx');
    }
    catch (parseError) {
        console.error('Error parsing JSON data:', parseError);
    }
});
