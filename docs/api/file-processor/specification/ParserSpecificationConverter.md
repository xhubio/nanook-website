---
id: ParserSpecificationConverter
title: Parser Specification Converter
sidebar_label: Parser Specification Converter
---

<a name="ParserSpecificationConverter"></a>

## ParserSpecificationConverter
Converts a specification object into a decision table model.
It takes a loaded specification table and converts it.

**Kind**: global class  

* [ParserSpecificationConverter](#ParserSpecificationConverter)
    * [.convert(specification)](#ParserSpecificationConverter+convert) ⇒ <code>object</code>
    * [._createTestcases(table, rowIdObjects, secDataObject)](#ParserSpecificationConverter+_createTestcases)
    * [._createPrimaryDataSection(specification, table)](#ParserSpecificationConverter+_createPrimaryDataSection) ⇒ <code>array</code>
    * [._createFieldSubSection(section, fieldName, classes)](#ParserSpecificationConverter+_createFieldSubSection) ⇒ <code>object</code>
    * [._getClassesForRules(specification, table, fieldData, fieldRules)](#ParserSpecificationConverter+_getClassesForRules) ⇒ <code>object</code>
    * [._createExecutionMultirowSection(table)](#ParserSpecificationConverter+_createExecutionMultirowSection)
    * [._createSeveritySection(specification, table)](#ParserSpecificationConverter+_createSeveritySection)
    * [._createSecondaryDataSection(specification, table)](#ParserSpecificationConverter+_createSecondaryDataSection) ⇒ <code>object</code>
    * [._createSummarySection(table)](#ParserSpecificationConverter+_createSummarySection)

<a name="ParserSpecificationConverter+convert"></a>

### parserSpecificationConverter.convert(specification) ⇒ <code>object</code>
Do the conversion

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  
**Returns**: <code>object</code> - table  The created decision table model  

| Param | Type | Description |
| --- | --- | --- |
| specification | <code>object</code> | The specification object |

<a name="ParserSpecificationConverter+_createTestcases"></a>

### parserSpecificationConverter.\_createTestcases(table, rowIdObjects, secDataObject)
Creates the default testcases for this decision table

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The decision table model |
| rowIdObjects | <code>array</code> | An array with all the primary data rowIdObjects |
| secDataObject | <code>object</code> | The secondary rowidObjewct |

<a name="ParserSpecificationConverter+_createPrimaryDataSection"></a>

### parserSpecificationConverter.\_createPrimaryDataSection(specification, table) ⇒ <code>array</code>
Creates the primary data section and returns an array
of rowIdObjects

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  
**Returns**: <code>array</code> - rowIdObjects  an array of rowIdObjects  

| Param | Type | Description |
| --- | --- | --- |
| specification | <code>object</code> | The specification object |
| table | <code>object</code> | The decision table model |

<a name="ParserSpecificationConverter+_createFieldSubSection"></a>

### parserSpecificationConverter.\_createFieldSubSection(section, fieldName, classes) ⇒ <code>object</code>
Create one field of the primary data section. Also adds the rowId to the class.
Returns an object of the following format:
obj = {
    valid : [rowIds]
    error : [rowIds]
}

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  
**Returns**: <code>object</code> - rowIdObj  The object containing all the rowIds by there type  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>object</code> | The primary data field section |
| fieldName | <code>string</code> | The name of the field |
| classes | <code>object</code> | The equivalenceClasses for this field |

<a name="ParserSpecificationConverter+_getClassesForRules"></a>

### parserSpecificationConverter.\_getClassesForRules(specification, table, fieldData, fieldRules) ⇒ <code>object</code>
Create all the equivalenceClasses for one field

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  
**Returns**: <code>object</code> - classes  The created equivalenceClasses for this field  

| Param | Type | Description |
| --- | --- | --- |
| specification | <code>object</code> | The specification object. Only the Rules description is neded |
| table | <code>object</code> | The decision table model |
| fieldData | <code>object</code> | The field data from the specification model |
| fieldRules | <code>object</code> | All the rules for this field |

<a name="ParserSpecificationConverter+_createExecutionMultirowSection"></a>

### parserSpecificationConverter.\_createExecutionMultirowSection(table)
Creates a multirow section which defines if a testcase should be executed or is testdata only

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The decision table model |

<a name="ParserSpecificationConverter+_createSeveritySection"></a>

### parserSpecificationConverter.\_createSeveritySection(specification, table)
Creates a multirow section for the serverities

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  

| Param | Type | Description |
| --- | --- | --- |
| specification | <code>object</code> | The specification object |
| table | <code>object</code> | The decision table model |

<a name="ParserSpecificationConverter+_createSecondaryDataSection"></a>

### parserSpecificationConverter.\_createSecondaryDataSection(specification, table) ⇒ <code>object</code>
Creates a secondary data section if the specification has a primary key rule.
Adds two fields to it
Returns an object of the following format:
rowIdObj = {
    valid : [rowIds]
    error : [rowIds]
}

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  
**Returns**: <code>object</code> - rowIdObj  An object with the rowIds  

| Param | Type | Description |
| --- | --- | --- |
| specification | <code>object</code> | The specification object |
| table | <code>object</code> | The decision table model |

<a name="ParserSpecificationConverter+_createSummarySection"></a>

### parserSpecificationConverter.\_createSummarySection(table)
Creates the summary section for this table

**Kind**: instance method of [<code>ParserSpecificationConverter</code>](#ParserSpecificationConverter)  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The decision table model |

