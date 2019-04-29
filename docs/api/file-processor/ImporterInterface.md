---
id: ImporterInterface
title: Importer Interface
sidebar_label: Importer Interface
---

<a name="ImporterInterface"></a>

## ImporterInterface
Defines the interface for an importer.
An importer loads an Spreadsheet file and returns a map of sheets

**Kind**: global class  

* [ImporterInterface](#ImporterInterface)
    * [.loadFile(fileName)](#ImporterInterface+loadFile)
    * [.sheetNames()](#ImporterInterface+sheetNames) ⇒ <code>array</code>
    * [.cellValue(sheetName, column, row)](#ImporterInterface+cellValue) ⇒ <code>string</code>
    * [.clear()](#ImporterInterface+clear)

<a name="ImporterInterface+loadFile"></a>

### importerInterface.loadFile(fileName)
Opens a file and loads it. This could be spreadsheet or whatever
file.

**Kind**: instance method of [<code>ImporterInterface</code>](#ImporterInterface)  

| Param | Type | Description |
| --- | --- | --- |
| fileName | <code>string</code> | The file to open |

<a name="ImporterInterface+sheetNames"></a>

### importerInterface.sheetNames() ⇒ <code>array</code>
Returns all the loaded sheet names

**Kind**: instance method of [<code>ImporterInterface</code>](#ImporterInterface)  
**Returns**: <code>array</code> - sheets  A list of sheet names  
<a name="ImporterInterface+cellValue"></a>

### importerInterface.cellValue(sheetName, column, row) ⇒ <code>string</code>
Returns the Cell value from the sheet with the given name

**Kind**: instance method of [<code>ImporterInterface</code>](#ImporterInterface)  
**Returns**: <code>string</code> - value  The Cell value  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| column | <code>number</code> | The column number start with '0' |
| row | <code>number</code> | The row number start with '0' |

<a name="ImporterInterface+clear"></a>

### importerInterface.clear()
Free some memory

**Kind**: instance method of [<code>ImporterInterface</code>](#ImporterInterface)  
