---
id: MultiRowSectionDefinition
title: Multi Row Section Definition
sidebar_label: Multi Row Section Definition
---

<a name="MultiRowSectionDefinition"></a>

## MultiRowSectionDefinition ⇐ <code>BaseSectionDefinition</code>
A section with multiple rows. This section has no defined functionality. The data is just
transfered to the data model when the data is generated. It is used to add attributes to test cases.

**Kind**: global class  
**Extends**: <code>BaseSectionDefinition</code>  

* [MultiRowSectionDefinition](#MultiRowSectionDefinition) ⇐ <code>BaseSectionDefinition</code>
    * [.keys](#MultiRowSectionDefinition+keys)
    * [.comments](#MultiRowSectionDefinition+comments)
    * [.others](#MultiRowSectionDefinition+others)
    * [.validate()](#MultiRowSectionDefinition+validate) ⇒ <code>array</code>

<a name="MultiRowSectionDefinition+keys"></a>

### multiRowSectionDefinition.keys
Stores the 'key' entries by there there rowID

**Kind**: instance property of [<code>MultiRowSectionDefinition</code>](#MultiRowSectionDefinition)  
<a name="MultiRowSectionDefinition+comments"></a>

### multiRowSectionDefinition.comments
Stores the 'comment' entries by there there rowID

**Kind**: instance property of [<code>MultiRowSectionDefinition</code>](#MultiRowSectionDefinition)  
<a name="MultiRowSectionDefinition+others"></a>

### multiRowSectionDefinition.others
Stores the 'other' entries by there there rowID

**Kind**: instance property of [<code>MultiRowSectionDefinition</code>](#MultiRowSectionDefinition)  
<a name="MultiRowSectionDefinition+validate"></a>

### multiRowSectionDefinition.validate() ⇒ <code>array</code>
Validates this section definition.
- each key field must exists
- the key values should be unique

**Kind**: instance method of [<code>MultiRowSectionDefinition</code>](#MultiRowSectionDefinition)  
**Returns**: <code>array</code> - issues  An array of issues found  
