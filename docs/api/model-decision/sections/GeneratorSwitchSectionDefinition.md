---
id: GeneratorSwitchSectionDefinition
title: Generator Switch Section Definition
sidebar_label: Generator Switch Section  Definition
---

<a name="GeneratorSwitchSectionDefinition"></a>

## GeneratorSwitchSectionDefinition ⇐ <code>BaseSectionDefinition</code>
A FilterSection is used to filter test cases when the data generator creates the data out of
theses tables.

**Kind**: global class  
**Extends**: <code>BaseSectionDefinition</code>  

* [GeneratorSwitchSectionDefinition](#GeneratorSwitchSectionDefinition) ⇐ <code>BaseSectionDefinition</code>
    * [.generatorNames](#GeneratorSwitchSectionDefinition+generatorNames)
    * [.values](#GeneratorSwitchSectionDefinition+values)
    * [.comments](#GeneratorSwitchSectionDefinition+comments)
    * [.validate()](#GeneratorSwitchSectionDefinition+validate) ⇒ <code>array</code>

<a name="GeneratorSwitchSectionDefinition+generatorNames"></a>

### generatorSwitchSectionDefinition.generatorNames
Stores the names of the filter processors by there row id

**Kind**: instance property of [<code>GeneratorSwitchSectionDefinition</code>](#GeneratorSwitchSectionDefinition)  
<a name="GeneratorSwitchSectionDefinition+values"></a>

### generatorSwitchSectionDefinition.values
Stores the filter expressions by there rowId

**Kind**: instance property of [<code>GeneratorSwitchSectionDefinition</code>](#GeneratorSwitchSectionDefinition)  
<a name="GeneratorSwitchSectionDefinition+comments"></a>

### generatorSwitchSectionDefinition.comments
Stores the comment entries by there there rowID

**Kind**: instance property of [<code>GeneratorSwitchSectionDefinition</code>](#GeneratorSwitchSectionDefinition)  
<a name="GeneratorSwitchSectionDefinition+validate"></a>

### generatorSwitchSectionDefinition.validate() ⇒ <code>array</code>
Validates this section definition.
- each key field must exists
- the key values should be unique

**Kind**: instance method of [<code>GeneratorSwitchSectionDefinition</code>](#GeneratorSwitchSectionDefinition)  
**Returns**: <code>array</code> - issues  An array of issues found  
