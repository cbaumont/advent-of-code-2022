import fs from 'node:fs';
import readline from 'node:readline';

export function rl(filepath) {
    return readline.createInterface({
        input: fs.createReadStream(filepath),
        crlfDelay: Infinity,
    });
}

export function readLineInThrees(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) return reject(error);

            const rawLines = data.split("\n");
            const lines = rawLines.map(line => line.replace("\r", ""));
            const arrays = [];

            for (let i = 0; i < lines.length; i += 3) {
                arrays.push(lines.slice(i, i + 3));
            }
            resolve(arrays);
        });
    });
}

export function fileToArray(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, "utf8", (error, data) => {
            if (error) return reject(error);

            const rawLines = data.split("\n");
            const lines = rawLines.map(line => line.replace("\r", ""));
            resolve(lines);
        });
    });
}
