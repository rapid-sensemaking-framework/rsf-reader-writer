const fs = require('fs')
const path = require('path')

const INPUT_FILE_NAME = 'input.json'
module.exports.INPUT_FILE_NAME = INPUT_FILE_NAME

const OUTPUT_FILE_NAME = 'output.json'
module.exports.OUTPUT_FILE_NAME = OUTPUT_FILE_NAME

const readInput = (dir) => {
    return JSON.parse(fs.readFileSync(path.join(dir, INPUT_FILE_NAME)))
}
module.exports.readInput = readInput

const writeOutput = (dir, result) => {
    return fs.writeFileSync(path.join(dir, OUTPUT_FILE_NAME), JSON.stringify(result))
}
module.exports.writeOutput = writeOutput