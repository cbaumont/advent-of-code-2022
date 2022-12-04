import fs from 'node:fs';
import readline from 'node:readline';

export function rl(filepath) {
    return readline.createInterface({
        input: fs.createReadStream(filepath),
        crlfDelay: Infinity,
    });
}
