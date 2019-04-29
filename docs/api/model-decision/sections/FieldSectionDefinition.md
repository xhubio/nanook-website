---
id: FieldSectionDefinition
title: Field Section Definition
sidebar_label: Field Section Definition
---

<a name="FieldSectionDefinition"></a>

## FieldSectionDefinition ⇐ <code>BaseSectionDefinition</code>
This is the most important section for a decision table. This section
is devided into 1..n sub sections. It is the section containing the relevant data.

**Kind**: global class  
**Extends**: <code>BaseSectionDefinition</code>  

* [FieldSectionDefinition](#FieldSectionDefinition) ⇐ <code>BaseSectionDefinition</code>
    * [.subSections](#FieldSectionDefinition+subSections)
    * [.tdgMandatory](#FieldSectionDefinition+tdgMandatory)
    * [.mandatory](#FieldSectionDefinition+mandatory)
    * [.validate()](#FieldSectionDefinition+validate) ⇒ <code>array</code>
    * [.createNewRow()](#FieldSectionDefinition+createNewRow) ⇒ <code>string</code>
    * [.createNewField(fieldName)](#FieldSectionDefinition+createNewField) ⇒ <code>string</code>

<a name="FieldSectionDefinition+subSections"></a>

### fieldSectionDefinition.subSections
{object} The subSections of this fieldSection. The section definitions stored by there id

**Kind**: instance property of [<code>FieldSectionDefinition</code>](#FieldSectionDefinition)  
<a name="FieldSectionDefinition+tdgMandatory"></a>

### fieldSectionDefinition.tdgMandatory
Defines if the dataGenerator column is mandatory. Default=false.

**Kind**: instance property of [<code>FieldSectionDefinition</code>](#FieldSectionDefinition)  
<a name="FieldSectionDefinition+mandatory"></a>

### fieldSectionDefinition.mandatory
Defines if the section must have at least one value. Default=true

**Kind**: instance property of [<code>FieldSectionDefinition</code>](#FieldSectionDefinition)  
<a name="FieldSectionDefinition+validate"></a>

### fieldSectionDefinition.validate() ⇒ <code>array</code>
Validates this section definition.
A fieldSection must have at least one subSection.

**Kind**: instance method of [<code>FieldSectionDefinition</code>](#FieldSectionDefinition)  
**Returns**: <code>array</code> - issues  An array of issues found  
<a name="FieldSectionDefinition+createNewRow"></a>

### fieldSectionDefinition.createNewRow() ⇒ <code>string</code>
Creates a new row for this section.
generates a new UUID and add it to the row array.

**Kind**: instance method of [<code>FieldSectionDefinition</code>](#FieldSectionDefinition)  
**Returns**: <code>string</code> - id  The new created row id  
<a name="FieldSectionDefinition+createNewField"></a>

### fieldSectionDefinition.createNewField(fieldName) ⇒ <code>string</code>
Adds a new empty field

**Kind**: instance method of [<code>FieldSectionDefinition</code>](#FieldSectionDefinition)  
**Returns**: <code>string</code> - subSection  The new created sub section  

| Param | Type | Description |
| --- | --- | --- |
| fieldName | <code>string</code> | The name of the new field |

