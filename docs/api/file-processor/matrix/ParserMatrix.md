---
id: ParserMatrix
title: Parser Matrix
sidebar_label: Parser Matrix
---

<a name="ParserMatrix"></a>

## ParserMatrix ⇐ <code>ParserBase</code>
The parser for the matrix tables.

**Kind**: global class  
**Extends**: <code>ParserBase</code>  

* [ParserMatrix](#ParserMatrix) ⇐ <code>ParserBase</code>
    * [.fieldNameSequence](#ParserMatrix+fieldNameSequence)
    * [.parse(sheetName, importer)](#ParserMatrix+parse) ⇒ <code>object</code>
    * [.getFieldName()](#ParserMatrix+getFieldName) ⇒ <code>string</code>
    * [._parseMetaDataColumn(table, sheetName, importer, sheetEndColumn, sheetEndRow)](#ParserMatrix+_parseMetaDataColumn)
    * [._checkForEmptyColumn(sheetName, importer, column, sheetEndRow)](#ParserMatrix+_checkForEmptyColumn)
    * [._parseMetaDataRow(table, sheetName, importer, sheetEndColumn, sheetEndRow)](#ParserMatrix+_parseMetaDataRow)
    * [._checkForEmptyRow(sheetName, importer, row, sheetEndColumn)](#ParserMatrix+_checkForEmptyRow)
    * [._parseFieldData(table, sheetName, importer, sheetEndColumn, sheetEndRow)](#ParserMatrix+_parseFieldData)

<a name="ParserMatrix+fieldNameSequence"></a>

### parserMatrix.fieldNameSequence
This sequence is used to give each field a unique name.

**Kind**: instance property of [<code>ParserMatrix</code>](#ParserMatrix)  
<a name="ParserMatrix+parse"></a>

### parserMatrix.parse(sheetName, importer) ⇒ <code>object</code>
Parses the sheet with the given name und uses the given importer to access
the data.

**Kind**: instance method of [<code>ParserMatrix</code>](#ParserMatrix)  
**Returns**: <code>object</code> - tableModel  The created tablemodel  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |

<a name="ParserMatrix+getFieldName"></a>

### parserMatrix.getFieldName() ⇒ <code>string</code>
Creates a unique field name.

**Kind**: instance method of [<code>ParserMatrix</code>](#ParserMatrix)  
**Returns**: <code>string</code> - fieldName  New generated fieldName  
<a name="ParserMatrix+_parseMetaDataColumn"></a>

### parserMatrix.\_parseMetaDataColumn(table, sheetName, importer, sheetEndColumn, sheetEndRow)
Reads the meta data information of each column and stores it in the
table object

**Kind**: instance method of [<code>ParserMatrix</code>](#ParserMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sheetEndColumn | <code>number</code> | The last column of the sheed (Exclusive) |
| sheetEndRow | <code>number</code> | The last row of the sheet (Exclusive) |

<a name="ParserMatrix+_checkForEmptyColumn"></a>

### parserMatrix.\_checkForEmptyColumn(sheetName, importer, column, sheetEndRow)
Checks that the complete row is empty.
If the column has no name, then the complete row must be null

**Kind**: instance method of [<code>ParserMatrix</code>](#ParserMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| column | <code>number</code> | The current column |
| sheetEndRow | <code>number</code> | The last row of the sheet (Exclusive) |

<a name="ParserMatrix+_parseMetaDataRow"></a>

### parserMatrix.\_parseMetaDataRow(table, sheetName, importer, sheetEndColumn, sheetEndRow)
Reads the meta data information of each row and stores it in the
table object

**Kind**: instance method of [<code>ParserMatrix</code>](#ParserMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sheetEndColumn | <code>number</code> | The last column of the sheed (Exclusive) |
| sheetEndRow | <code>number</code> | The last row of the sheet (Exclusive) |

<a name="ParserMatrix+_checkForEmptyRow"></a>

### parserMatrix.\_checkForEmptyRow(sheetName, importer, row, sheetEndColumn)
Checks that the complete row is empty.
If the column has no name, then the complete row must be null

**Kind**: instance method of [<code>ParserMatrix</code>](#ParserMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| row | <code>number</code> | The current row |
| sheetEndColumn | <code>number</code> | The last column of the sheet (Exclusive) |

<a name="ParserMatrix+_parseFieldData"></a>

### parserMatrix.\_parseFieldData(table, sheetName, importer, sheetEndColumn, sheetEndRow)
Reads the data section of the matrix table

**Kind**: instance method of [<code>ParserMatrix</code>](#ParserMatrix)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sheetEndColumn | <code>number</code> | The last column of the sheed (Exclusive) |
| sheetEndRow | <code>number</code> | The last row of the sheet (Exclusive) |

