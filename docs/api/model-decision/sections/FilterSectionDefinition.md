---
id: FilterSectionDefinition
title: Filter Section Definition
sidebar_label: Filter Section Definition
---

<a name="FilterSectionDefinition"></a>

## FilterSectionDefinition ⇐ <code>BaseSectionDefinition</code>
A FilterSection is used to filter test cases when the data generator creates the data out of
theses tables.

**Kind**: global class  
**Extends**: <code>BaseSectionDefinition</code>  

* [FilterSectionDefinition](#FilterSectionDefinition) ⇐ <code>BaseSectionDefinition</code>
    * [.filterProcessorNames](#FilterSectionDefinition+filterProcessorNames)
    * [.expressions](#FilterSectionDefinition+expressions)
    * [.comments](#FilterSectionDefinition+comments)
    * [.validate()](#FilterSectionDefinition+validate) ⇒ <code>array</code>

<a name="FilterSectionDefinition+filterProcessorNames"></a>

### filterSectionDefinition.filterProcessorNames
Stores the names of the filter processors by there row id

**Kind**: instance property of [<code>FilterSectionDefinition</code>](#FilterSectionDefinition)  
<a name="FilterSectionDefinition+expressions"></a>

### filterSectionDefinition.expressions
Stores the filter expressions by there rowId

**Kind**: instance property of [<code>FilterSectionDefinition</code>](#FilterSectionDefinition)  
<a name="FilterSectionDefinition+comments"></a>

### filterSectionDefinition.comments
Stores the comment entries by there there rowID

**Kind**: instance property of [<code>FilterSectionDefinition</code>](#FilterSectionDefinition)  
<a name="FilterSectionDefinition+validate"></a>

### filterSectionDefinition.validate() ⇒ <code>array</code>
Validates this section definition.
- each key field must exists
- the key values should be unique

**Kind**: instance method of [<code>FilterSectionDefinition</code>](#FilterSectionDefinition)  
**Returns**: <code>array</code> - issues  An array of issues found  
