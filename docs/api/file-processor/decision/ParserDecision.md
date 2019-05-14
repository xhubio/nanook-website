---
id: ParserDecision
title: Parser Decision
sidebar_label: Parser Decision
---

<a name="ParserDecision"></a>

## ParserDecision ⇐ <code>ParserBase</code>
The parser implementation to parse decision tables.

**Kind**: global class  
**Extends**: <code>ParserBase</code>  

* [ParserDecision](#ParserDecision) ⇐ <code>ParserBase</code>
    * [.sectionHandler](#ParserDecision+sectionHandler)
    * [.fieldNameSequence](#ParserDecision+fieldNameSequence)
    * [.parse(sheetName, importer)](#ParserDecision+parse) ⇒ <code>object</code>
    * [.getFieldName()](#ParserDecision+getFieldName) ⇒ <code>string</code>
    * [.parseForTestcases(table, sheetName, importer, testCaseStartColumn, startRow)](#ParserDecision+parseForTestcases) ⇒ <code>number</code>
    * [._updateTestcaseExecute(table)](#ParserDecision+_updateTestcaseExecute)
    * [._updateTestcaseNeverExecute(table)](#ParserDecision+_updateTestcaseNeverExecute)
    * [._getBoolean(val)](#ParserDecision+_getBoolean) ⇒ <code>boolean</code>
    * [._updateTestcaseMultiplicity(table)](#ParserDecision+_updateTestcaseMultiplicity)
    * [._getMultiplicityFromValue(val)](#ParserDecision+_getMultiplicityFromValue) ⇒ <code>boolean</code>
    * [.handleMultiRowSection(table, sheetName, importer, sectionName, startRow, endRow)](#ParserDecision+handleMultiRowSection)
    * [.handleTagSection(table, sheetName, importer, sectionName, startRow, endRow)](#ParserDecision+handleTagSection)
    * [.handleFilterSection(table, sheetName, importer, sectionName, startRow, endRow)](#ParserDecision+handleFilterSection)
    * [.handleGeneratorSwitchSection(table, sheetName, importer, sectionName, startRow, endRow)](#ParserDecision+handleGeneratorSwitchSection)
    * [.handleMultiplicitySection(table, sectionName)](#ParserDecision+handleMultiplicitySection)
    * [.handleExecuteSection(table, sectionName)](#ParserDecision+handleExecuteSection)
    * [.handleNeverExecuteSection(table, sectionName)](#ParserDecision+handleNeverExecuteSection)
    * [.handleSummarySection(table, sectionName)](#ParserDecision+handleSummarySection)
    * [.handleFieldSection(table, sheetName, importer, sectionName, startRow, endRow)](#ParserDecision+handleFieldSection)
    * [._readTestcaseValues(table, sheetName, importer, row, rowId)](#ParserDecision+_readTestcaseValues)
    * [.getNextSubSection(sheetName, importer, startRow, sectionEndRow)](#ParserDecision+getNextSubSection) ⇒ <code>object</code>
    * [.getNextSection(sheetName, importer, startRow, sheetEndRow)](#ParserDecision+getNextSection) ⇒ <code>object</code>

<a name="ParserDecision+sectionHandler"></a>

### parserDecision.sectionHandler
Stores the handler for the different kind of sections.

**Kind**: instance property of [<code>ParserDecision</code>](#ParserDecision)  
<a name="ParserDecision+fieldNameSequence"></a>

### parserDecision.fieldNameSequence
This sequence is used to give each field a unique name.

**Kind**: instance property of [<code>ParserDecision</code>](#ParserDecision)  
<a name="ParserDecision+parse"></a>

### parserDecision.parse(sheetName, importer) ⇒ <code>object</code>
Parses the sheet with the given name und uses the given importer to access
the data.

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  
**Returns**: <code>object</code> - tableModel  The created tablemodel  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |

<a name="ParserDecision+getFieldName"></a>

### parserDecision.getFieldName() ⇒ <code>string</code>
Creates a unique field name.

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  
**Returns**: <code>string</code> - fieldName  New generated fieldName  
<a name="ParserDecision+parseForTestcases"></a>

### parserDecision.parseForTestcases(table, sheetName, importer, testCaseStartColumn, startRow) ⇒ <code>number</code>
Reads the first line until no testcase name found. This
column is the last column which will be read. By the way create emtpy testcases
and add them to the table.

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  
**Returns**: <code>number</code> - The testcase end column  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table object. The new model |
| sheetName | <code>string</code> | The name of the worksheet |
| importer | <code>object</code> | The importer |
| testCaseStartColumn | <code>number</code> | The coumn in which the testcases starts |
| startRow | <code>number</code> | The row in which the testcase names are defined |

<a name="ParserDecision+_updateTestcaseExecute"></a>

### parserDecision.\_updateTestcaseExecute(table)
After the table was loaded it must be checked if there is a 'ExecuteSection'.
If so the values must be set in the testcase.execute property

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to be updated |

<a name="ParserDecision+_updateTestcaseNeverExecute"></a>

### parserDecision.\_updateTestcaseNeverExecute(table)
After the table was loaded it must be checked if there is a 'ExecuteSection'.
If so the values must be set in the testcase.execute property

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to be updated |

<a name="ParserDecision+_getBoolean"></a>

### parserDecision.\_getBoolean(val) ⇒ <code>boolean</code>
Converts a string value into a boolen value

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  
**Returns**: <code>boolean</code> - bool  true is the string is a true value else false  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>string</code> | The value to be checked for a boolean |

<a name="ParserDecision+_updateTestcaseMultiplicity"></a>

### parserDecision.\_updateTestcaseMultiplicity(table)
If this section exists the multiplicity of an testcase must be updated

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to be updated |

<a name="ParserDecision+_getMultiplicityFromValue"></a>

### parserDecision.\_getMultiplicityFromValue(val) ⇒ <code>boolean</code>
Tries to convert a string into a multiplicity value

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  
**Returns**: <code>boolean</code> - bool  true is the string is a true value else false  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>string</code> | The value to be checked for a boolean |

<a name="ParserDecision+handleMultiRowSection"></a>

### parserDecision.handleMultiRowSection(table, sheetName, importer, sectionName, startRow, endRow)
Adds a new MultiRowSection to the table. Updates the data for all the testcases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sectionName | <code>string</code> | The name of this section |
| startRow | <code>number</code> | The row the section begins |
| endRow | <code>number</code> | The row the next section begins |

<a name="ParserDecision+handleTagSection"></a>

### parserDecision.handleTagSection(table, sheetName, importer, sectionName, startRow, endRow)
Adds a new TagSection to the table. Updates the data for all the test cases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sectionName | <code>string</code> | The name of this section |
| startRow | <code>number</code> | The row the section begins |
| endRow | <code>number</code> | The row the next section begins |

<a name="ParserDecision+handleFilterSection"></a>

### parserDecision.handleFilterSection(table, sheetName, importer, sectionName, startRow, endRow)
Adds a new TagSection to the table. Updates the data for all the test cases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sectionName | <code>string</code> | The name of this section |
| startRow | <code>number</code> | The row the section begins |
| endRow | <code>number</code> | The row the next section begins |

<a name="ParserDecision+handleGeneratorSwitchSection"></a>

### parserDecision.handleGeneratorSwitchSection(table, sheetName, importer, sectionName, startRow, endRow)
Adds a new GeneratorSwitch to the table. Updates the data for all the test cases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sectionName | <code>string</code> | The name of this section |
| startRow | <code>number</code> | The row the section begins |
| endRow | <code>number</code> | The row the next section begins |

<a name="ParserDecision+handleMultiplicitySection"></a>

### parserDecision.handleMultiplicitySection(table, sectionName)
Adds a new SummarySection to the table. Updates the data for all the testcases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sectionName | <code>string</code> | The name of this section |

<a name="ParserDecision+handleExecuteSection"></a>

### parserDecision.handleExecuteSection(table, sectionName)
Adds a new ExecuteSection to the table. Updates the data for all the testcases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sectionName | <code>string</code> | The name of this section |

<a name="ParserDecision+handleNeverExecuteSection"></a>

### parserDecision.handleNeverExecuteSection(table, sectionName)
Adds a new NeverExecuteSection to the table. Updates the data for all the testcases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sectionName | <code>string</code> | The name of this section |

<a name="ParserDecision+handleSummarySection"></a>

### parserDecision.handleSummarySection(table, sectionName)
Adds a new SummarySection to the table. Updates the data for all the testcases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sectionName | <code>string</code> | The name of this section |

<a name="ParserDecision+handleFieldSection"></a>

### parserDecision.handleFieldSection(table, sheetName, importer, sectionName, startRow, endRow)
Adds a new FieldSection to the table. Updates the data for all the testcases

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| sectionName | <code>string</code> | The name of this section |
| startRow | <code>number</code> | The row the section begins |
| endRow | <code>number</code> | The row the next section begins |

<a name="ParserDecision+_readTestcaseValues"></a>

### parserDecision.\_readTestcaseValues(table, sheetName, importer, row, rowId)
reads the data for the testcases from the spreadsheet

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table to store the current sheet data |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| row | <code>nuber</code> | The row where to read the data |
| rowId | <code>string</code> | The uuid of this row |

<a name="ParserDecision+getNextSubSection"></a>

### parserDecision.getNextSubSection(sheetName, importer, startRow, sectionEndRow) ⇒ <code>object</code>
Get the definition of the next sub section

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  
**Returns**: <code>object</code> - table  A definition/boundaries of this subSection { startRow, endRow, fieldName }  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| startRow | <code>nuber</code> | The row where to start searching |
| sectionEndRow | <code>number</code> | The last row in the parent section |

<a name="ParserDecision+getNextSection"></a>

### parserDecision.getNextSection(sheetName, importer, startRow, sheetEndRow) ⇒ <code>object</code>
Get the definition of the next section

**Kind**: instance method of [<code>ParserDecision</code>](#ParserDecision)  
**Returns**: <code>object</code> - table  The created table model for the sheet  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| startRow | <code>nuber</code> | The row where to start searching |
| sheetEndRow | <code>number</code> | The last row in this sheet |

