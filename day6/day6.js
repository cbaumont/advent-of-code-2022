import { rl as readline } from "../index.js";

function areAllDifferent(buffer) {
    return new Set(buffer).size == buffer.length;
}

function detectFirstMarker(datastream, bufferSize) {
    for (let i = 0; i < datastream.length - bufferSize - 1; i++) {
        let j = i + bufferSize;
        if (areAllDifferent(datastream.slice(i, j))) {
            return j;
        }
    }
    return 0;
}

readline('day6/day6_input.txt').on('line', (line) => {
    console.log(`First start-of-packet detected at position: ${detectFirstMarker(line, 4)}`);
    console.log(`First start-of-message detected at position: ${detectFirstMarker(line, 14)}`);
});
