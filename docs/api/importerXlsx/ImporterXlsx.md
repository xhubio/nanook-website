---
id: ImporterXlsx
title: Importer xlsx
sidebar_label: Importer xlsx
---

<a name="ImporterXlsx"></a>

## ImporterXlsx
An importer to load Excel Spreadsheets. This importer is used by the file
processor. So it is possible to create importer for different kind of files.

**Kind**: global class  

* [ImporterXlsx](#ImporterXlsx)
    * [.sheets](#ImporterXlsx+sheets)
    * [.converter](#ImporterXlsx+converter)
    * [.sheetNames](#ImporterXlsx+sheetNames) ⇒ <code>array</code>
    * [.clear()](#ImporterXlsx+clear)
    * [.loadFile(fileName)](#ImporterXlsx+loadFile)
    * [.cellValue(sheetName, column, row)](#ImporterXlsx+cellValue) ⇒ <code>string</code>

<a name="ImporterXlsx+sheets"></a>

### importerXlsx.sheets
{Map} Stores the sheets by there name

**Kind**: instance property of [<code>ImporterXlsx</code>](#ImporterXlsx)  
<a name="ImporterXlsx+converter"></a>

### importerXlsx.converter
A converter to map Excel columns to numbers. The first column starts with '0'

**Kind**: instance property of [<code>ImporterXlsx</code>](#ImporterXlsx)  
<a name="ImporterXlsx+sheetNames"></a>

### importerXlsx.sheetNames ⇒ <code>array</code>
Returns the list with the names of the loaded sheet in the original order

**Kind**: instance property of [<code>ImporterXlsx</code>](#ImporterXlsx)  
**Returns**: <code>array</code> - sheets  A list of sheet names  
<a name="ImporterXlsx+clear"></a>

### importerXlsx.clear()
Frees some memory. Cleats the existing loaded sheets

**Kind**: instance method of [<code>ImporterXlsx</code>](#ImporterXlsx)  
<a name="ImporterXlsx+loadFile"></a>

### importerXlsx.loadFile(fileName)
Opens the Spreadsheet file and loads it.

**Kind**: instance method of [<code>ImporterXlsx</code>](#ImporterXlsx)  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | The file to open |

<a name="ImporterXlsx+cellValue"></a>

### importerXlsx.cellValue(sheetName, column, row) ⇒ <code>string</code>
Returns the Cell value from a given sheet

**Kind**: instance method of [<code>ImporterXlsx</code>](#ImporterXlsx)  
**Returns**: <code>string</code> - value  The Cell value  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| column | <code>number</code> | The column number start with '0' |
| row | <code>number</code> | The row number start with '0' |

