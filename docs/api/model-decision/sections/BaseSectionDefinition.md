---
id: BaseSectionDefinition
title: Base Section Definition
sidebar_label: Base Section Definition
---

<a name="BaseSectionDefinition"></a>

## BaseSectionDefinition
Base class for all the sections used in the decision table.
A decision table is devided in different sections.
Each section has different funktionality.

**Kind**: global class  

* [BaseSectionDefinition](#BaseSectionDefinition)
    * [.sectionType](#BaseSectionDefinition+sectionType)
    * [.name](#BaseSectionDefinition+name)
    * [.mandatory](#BaseSectionDefinition+mandatory)
    * [.multiple](#BaseSectionDefinition+multiple)
    * [.headerRow](#BaseSectionDefinition+headerRow)
    * [.dataRows](#BaseSectionDefinition+dataRows)
    * [.multiInstancesAllowed](#BaseSectionDefinition+multiInstancesAllowed)
    * [.isHeader()](#BaseSectionDefinition+isHeader)
    * [.createNewRow()](#BaseSectionDefinition+createNewRow) ⇒ <code>string</code>
    * [.getRowIds()](#BaseSectionDefinition+getRowIds) ⇒ <code>array</code>
    * [.validate()](#BaseSectionDefinition+validate) ⇒ <code>array</code>

<a name="BaseSectionDefinition+sectionType"></a>

### baseSectionDefinition.sectionType
The type of a section. To be overwrite by a sub class.

**Kind**: instance property of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+name"></a>

### baseSectionDefinition.name
The name of this section.

**Kind**: instance property of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+mandatory"></a>

### baseSectionDefinition.mandatory
Defines if the section must have at least one value.

**Kind**: instance property of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+multiple"></a>

### baseSectionDefinition.multiple
defines if this section may have more than one row.

**Kind**: instance property of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+headerRow"></a>

### baseSectionDefinition.headerRow
This id is used to identify a row or section in the model.
All rows and columns are identified by auch an id.

**Kind**: instance property of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+dataRows"></a>

### baseSectionDefinition.dataRows
Stores the IDs of the data rows. Not the rows itself.

**Kind**: instance property of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+multiInstancesAllowed"></a>

### baseSectionDefinition.multiInstancesAllowed
If set to false only one section of this type is allowed per model.

**Kind**: instance property of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+isHeader"></a>

### baseSectionDefinition.isHeader()
Returns true if the given row id is from a header row.

**Kind**: instance method of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
<a name="BaseSectionDefinition+createNewRow"></a>

### baseSectionDefinition.createNewRow() ⇒ <code>string</code>
Creates a new row for this section.
Generates a new UUID and add it to the row array.

**Kind**: instance method of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
**Returns**: <code>string</code> - id  The new created row id  
<a name="BaseSectionDefinition+getRowIds"></a>

### baseSectionDefinition.getRowIds() ⇒ <code>array</code>
Return an array with all the row IDs of this section.

**Kind**: instance method of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
**Returns**: <code>array</code> - ids  An array of row ids  
<a name="BaseSectionDefinition+validate"></a>

### baseSectionDefinition.validate() ⇒ <code>array</code>
Validates this section definition.
Checks that the name of the section exists.

**Kind**: instance method of [<code>BaseSectionDefinition</code>](#BaseSectionDefinition)  
**Returns**: <code>array</code> - issues  An array of issues found  
