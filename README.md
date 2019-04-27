# rsf-reader-writer
To make each rsf-operator in an rsf-sequence decoupled, read inputs from JSON files with a standard name, and write outputs to JSON files with a standard name

## Installation
```
npm install --save rfs-reader-writer
```

## API

### `INPUT_FILE_NAME`
the string representing the standard file name for the files used as input files by this package

### `OUTPUT_FILE_NAME`
the string representing the standard file name for the files used as output files by this package

### `readInput(dir)`
read the standard input file (`INPUT_FILE_NAME`) from the filesystem from the given `dir` path, parse it to a JSON object, and return it


### `writeOutput(dir, result)`
take the given result, stringify it to JSON, and then write it to the standard output file (`OUTPUT_FILE_NAME`) in the given `dir` path on the filesystem