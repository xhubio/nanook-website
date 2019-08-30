---
id: fileProcessor
title: File Processor
sidebar_label: File Processor
---


The file processor works on the data imported by an importer to create a table model.
For the file processor, it is transparent which importer was used.
The importer must implement the importer interface.

# ImporterInterface

The importer is responsible for loading data from a spreadsheet. This interface must be implemented
to use the custom importer. The Importer is used by a parser to read the files and create the table model.
The importer does not care about the content of the spreadsheet - it's just an abstract spreadsheet reader.

## Functions

``` js
/**
 * Opens a file and loads it. This could be spreadsheet or whatever
 * file.
 * @param fileName {string} The file to open
 */
async loadFile(fileName) {}
```

``` js
/**
 * Returns all the loaded sheet names
 * @return sheets {array} A list of sheet names
 */
sheetNames() {}
```

``` js
/**
 * Returns the Cell value from the sheet with the given name
 * @param sheetName {string} The name of the sheet
 * @param column {number} The column number start with '0'
 * @param row {number} The row number start with '0'
 * @return value {string} The Cell value
 */
cellValue(sheetName, column, row) {}
```

``` js
/**
 * Deletes all the loaded data in the importer
 */
clear() {}
```

# ParserInterface

For each table type, a specific parser is needed. All parsers
must implement this interface.

## Functions

``` js
/**
 * Parser the sheet with the given name
 * @param sheetName {string} The name of the sheet
 * @param importer {object} The importer
 * @return tableModel {object} The created table model
 */
async parse(sheetName, importer) {}
```

  - This module provides the following parsers
    
      - ParserDecision  
        Parses decision tables.
    
      - ParserMatrix  
        Parses matrix tables.
    
      - ParserSpecification  
        Parses specification tables and returns decisionTable models.
