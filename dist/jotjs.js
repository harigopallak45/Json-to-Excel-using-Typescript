var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import fs from 'fs';
const filePath = 'data.json';
function readJsonFile(filePath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = yield fs.promises.readFile(filePath, 'utf8');
            return JSON.parse(data);
        }
        catch (error) {
            throw error;
        }
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const jsonData = yield readJsonFile(filePath);
            console.log('Data from JSON file:', jsonData);
        }
        catch (error) {
            console.error('Error reading JSON file:', error);
        }
    });
}
main();
