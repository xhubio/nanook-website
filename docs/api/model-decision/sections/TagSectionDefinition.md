---
id: TagSectionDefinition
title: Tag Section Definition
sidebar_label: Tag Section Definition
---

<a name="TagSectionDefinition"></a>

## TagSectionDefinition ⇐ <code>BaseSectionDefinition</code>
This section enables the user to add lables to test cases. These lables could
be used to filter test cases with the FilterSection.

**Kind**: global class  
**Extends**: <code>BaseSectionDefinition</code>  

* [TagSectionDefinition](#TagSectionDefinition) ⇐ <code>BaseSectionDefinition</code>
    * [.tags](#TagSectionDefinition+tags)
    * [.comments](#TagSectionDefinition+comments)
    * [.others](#TagSectionDefinition+others)
    * [.validate()](#TagSectionDefinition+validate) ⇒ <code>array</code>

<a name="TagSectionDefinition+tags"></a>

### tagSectionDefinition.tags
stores the 'tag' entries by there there rowID

**Kind**: instance property of [<code>TagSectionDefinition</code>](#TagSectionDefinition)  
<a name="TagSectionDefinition+comments"></a>

### tagSectionDefinition.comments
stores the 'comment' entries by there there rowID

**Kind**: instance property of [<code>TagSectionDefinition</code>](#TagSectionDefinition)  
<a name="TagSectionDefinition+others"></a>

### tagSectionDefinition.others
stores the 'others' entries by there there rowID

**Kind**: instance property of [<code>TagSectionDefinition</code>](#TagSectionDefinition)  
<a name="TagSectionDefinition+validate"></a>

### tagSectionDefinition.validate() ⇒ <code>array</code>
Validates this section definition.
- each key field must exists
- the key values should be unique

**Kind**: instance method of [<code>TagSectionDefinition</code>](#TagSectionDefinition)  
**Returns**: <code>array</code> - issues  An array of issues found  
