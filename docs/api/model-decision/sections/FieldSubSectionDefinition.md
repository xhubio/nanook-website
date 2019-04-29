---
id: FieldSubSectionDefinition
title: Field Sub Section Definition
sidebar_label: Field Sub Section Definition
---

<a name="FieldSubSectionDefinition"></a>

## FieldSubSectionDefinition ⇐ <code>BaseSectionDefinition</code>
The sub section of a FieldSectionDefinition. Defines all the equivalence classes for one field

**Kind**: global class  
**Extends**: <code>BaseSectionDefinition</code>  

* [FieldSubSectionDefinition](#FieldSubSectionDefinition) ⇐ <code>BaseSectionDefinition</code>
    * [.equivalenceClasses](#FieldSubSectionDefinition+equivalenceClasses)
    * [.comments](#FieldSubSectionDefinition+comments)
    * [.tdgs](#FieldSubSectionDefinition+tdgs)
    * [.tdgMandatory](#FieldSubSectionDefinition+tdgMandatory)
    * [.mandatory](#FieldSubSectionDefinition+mandatory)
    * [.parent](#FieldSubSectionDefinition+parent)
    * [.validate()](#FieldSubSectionDefinition+validate) ⇒ <code>array</code>

<a name="FieldSubSectionDefinition+equivalenceClasses"></a>

### fieldSubSectionDefinition.equivalenceClasses
Stores the equivalenz class entries by there rowID

**Kind**: instance property of [<code>FieldSubSectionDefinition</code>](#FieldSubSectionDefinition)  
<a name="FieldSubSectionDefinition+comments"></a>

### fieldSubSectionDefinition.comments
Stores the comments by there there rowID

**Kind**: instance property of [<code>FieldSubSectionDefinition</code>](#FieldSubSectionDefinition)  
<a name="FieldSubSectionDefinition+tdgs"></a>

### fieldSubSectionDefinition.tdgs
stores the data generator entries by there there rowID

**Kind**: instance property of [<code>FieldSubSectionDefinition</code>](#FieldSubSectionDefinition)  
<a name="FieldSubSectionDefinition+tdgMandatory"></a>

### fieldSubSectionDefinition.tdgMandatory
Defines if the dataGenerator column is mandatory. Default=false.

**Kind**: instance property of [<code>FieldSubSectionDefinition</code>](#FieldSubSectionDefinition)  
<a name="FieldSubSectionDefinition+mandatory"></a>

### fieldSubSectionDefinition.mandatory
Defines if the section must have at least one value. Default=true

**Kind**: instance property of [<code>FieldSubSectionDefinition</code>](#FieldSubSectionDefinition)  
<a name="FieldSubSectionDefinition+parent"></a>

### fieldSubSectionDefinition.parent
The id of the parentSection

**Kind**: instance property of [<code>FieldSubSectionDefinition</code>](#FieldSubSectionDefinition)  
<a name="FieldSubSectionDefinition+validate"></a>

### fieldSubSectionDefinition.validate() ⇒ <code>array</code>
Validates this section definition.
- The equivalenceClasses must not be empty
- The equivalenceClasses must be unique
If tdg is mandatory it must also be checked

**Kind**: instance method of [<code>FieldSubSectionDefinition</code>](#FieldSubSectionDefinition)  
**Returns**: <code>array</code> - issues  An array of issues found  
