---
id: ParserSpecification
title: Parser Specification
sidebar_label: Parser Specification
---

## Classes

<dl>
<dt><a href="#ImporterSpecification">ImporterSpecification</a> ⇐ <code>ParserBase</code></dt>
<dd><p>The parser implementation to parse specification tables.</p>
</dd>
<dt><a href="#SpecificationModel">SpecificationModel</a></dt>
<dd><p>The model for a specification object</p>
</dd>
</dl>

<a name="ImporterSpecification"></a>

## ImporterSpecification ⇐ <code>ParserBase</code>
The parser implementation to parse specification tables.

**Kind**: global class  
**Extends**: <code>ParserBase</code>  

* [ImporterSpecification](#ImporterSpecification) ⇐ <code>ParserBase</code>
    * [.parseSpecification(sheetName, importer)](#ImporterSpecification+parseSpecification) ⇒ <code>object</code>
    * [.checkForUnusedRules(sheetName, importer, severityStartRow, sheetEndColumn, rules)](#ImporterSpecification+checkForUnusedRules)
    * [.parseFields(sheetName, importer, severityStartRow, ruleStartRow, sheetEndColumn)](#ImporterSpecification+parseFields) ⇒ <code>object</code>
    * [.parseSeverities(sheetName, importer, severityStartRow, ruleStartRow, sheetEndColumn)](#ImporterSpecification+parseSeverities) ⇒ <code>map</code>
    * [.parseRules(sheetName, importer, ruleStart, endRow)](#ImporterSpecification+parseRules) ⇒ <code>object</code>
    * [.checkSheetRows(sheetName, importer)](#ImporterSpecification+checkSheetRows) ⇒ <code>object</code>
    * [.getEndColumn(importer, sheetName)](#ImporterSpecification+getEndColumn) ⇒ <code>number</code>

<a name="ImporterSpecification+parseSpecification"></a>

### importerSpecification.parseSpecification(sheetName, importer) ⇒ <code>object</code>
Parses a single Spreadsheet

**Kind**: instance method of [<code>ImporterSpecification</code>](#ImporterSpecification)  
**Returns**: <code>object</code> - specification  The created specification model for the sheet  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |

<a name="ImporterSpecification+checkForUnusedRules"></a>

### importerSpecification.checkForUnusedRules(sheetName, importer, severityStartRow, sheetEndColumn, rules)
Each rule defined must be used. Unused rules should be deleted from the table

**Kind**: instance method of [<code>ImporterSpecification</code>](#ImporterSpecification)  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| severityStartRow | <code>number</code> | The start row of the severities |
| sheetEndColumn | <code>number</code> | The last column of the sheet |
| rules | <code>object</code> | All the existing rules stored by there rule name |

<a name="ImporterSpecification+parseFields"></a>

### importerSpecification.parseFields(sheetName, importer, severityStartRow, ruleStartRow, sheetEndColumn) ⇒ <code>object</code>
Parses the fields out of the Spreadsheet. This is the section where
the fields of the interface are defined

**Kind**: instance method of [<code>ImporterSpecification</code>](#ImporterSpecification)  
**Returns**: <code>object</code> - data  on object with the fields and the fieldOrder  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| severityStartRow | <code>number</code> | The start row of the severities |
| ruleStartRow | <code>number</code> | The start row of the rules |
| sheetEndColumn | <code>number</code> | The last column of the sheet |

<a name="ImporterSpecification+parseSeverities"></a>

### importerSpecification.parseSeverities(sheetName, importer, severityStartRow, ruleStartRow, sheetEndColumn) ⇒ <code>map</code>
Load the rules defined in the rule section

**Kind**: instance method of [<code>ImporterSpecification</code>](#ImporterSpecification)  
**Returns**: <code>map</code> - severities  A map of the existing severities  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| severityStartRow | <code>number</code> | The severity start row |
| ruleStartRow | <code>number</code> | The rule start row |
| sheetEndColumn | <code>number</code> | The last column of the sheet |

<a name="ImporterSpecification+parseRules"></a>

### importerSpecification.parseRules(sheetName, importer, ruleStart, endRow) ⇒ <code>object</code>
Load the rules defined in the rule section

**Kind**: instance method of [<code>ImporterSpecification</code>](#ImporterSpecification)  
**Returns**: <code>object</code> - rules  An object with the rules  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |
| ruleStart | <code>number</code> | The rule start row |
| endRow | <code>number</code> | The last row of the sheet |

<a name="ImporterSpecification+checkSheetRows"></a>

### importerSpecification.checkSheetRows(sheetName, importer) ⇒ <code>object</code>
Checks that the specification contains all the needed sections

**Kind**: instance method of [<code>ImporterSpecification</code>](#ImporterSpecification)  
**Returns**: <code>object</code> - rows  The following parameters {severityStartRow, ruleStartRow}  

| Param | Type | Description |
| --- | --- | --- |
| sheetName | <code>string</code> | The name of the sheet |
| importer | <code>object</code> | The importer |

<a name="ImporterSpecification+getEndColumn"></a>

### importerSpecification.getEndColumn(importer, sheetName) ⇒ <code>number</code>
Parses the sheet to get the last row of the table.

**Kind**: instance method of [<code>ImporterSpecification</code>](#ImporterSpecification)  
**Returns**: <code>number</code> - endRow  The last row of the table  

| Param | Type | Description |
| --- | --- | --- |
| importer | <code>object</code> | The importer |
| sheetName | <code>string</code> | The name of the sheet |

<a name="SpecificationModel"></a>

## SpecificationModel
The model for a specification object

**Kind**: global class  
