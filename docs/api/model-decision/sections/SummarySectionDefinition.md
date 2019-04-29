---
id: SummarySectionDefinition
title: Summary Section Definition
sidebar_label: Summary Section Definition
---

<a name="SummarySectionDefinition"></a>

## SummarySectionDefinition ⇐ <code>BaseSectionDefinition</code>
The summary section stores the calculations for the table

**Kind**: global class  
**Extends**: <code>BaseSectionDefinition</code>  

* [SummarySectionDefinition](#SummarySectionDefinition) ⇐ <code>BaseSectionDefinition</code>
    * [.total](#SummarySectionDefinition+total)
    * [.done](#SummarySectionDefinition+done)
    * [.percent](#SummarySectionDefinition+percent)
    * [.multiInstancesAllowed](#SummarySectionDefinition+multiInstancesAllowed)
    * [.createDataRow()](#SummarySectionDefinition+createDataRow) ⇒ <code>string</code>
    * [.getRowIds()](#SummarySectionDefinition+getRowIds) ⇒ <code>array</code>

<a name="SummarySectionDefinition+total"></a>

### summarySectionDefinition.total
The amount of all test combinations

**Kind**: instance property of [<code>SummarySectionDefinition</code>](#SummarySectionDefinition)  
<a name="SummarySectionDefinition+done"></a>

### summarySectionDefinition.done
The amount of done test combinations

**Kind**: instance property of [<code>SummarySectionDefinition</code>](#SummarySectionDefinition)  
<a name="SummarySectionDefinition+percent"></a>

### summarySectionDefinition.percent
The percantage of test combinations done

**Kind**: instance property of [<code>SummarySectionDefinition</code>](#SummarySectionDefinition)  
<a name="SummarySectionDefinition+multiInstancesAllowed"></a>

### summarySectionDefinition.multiInstancesAllowed
The summary section must exists only once in ad model

**Kind**: instance property of [<code>SummarySectionDefinition</code>](#SummarySectionDefinition)  
<a name="SummarySectionDefinition+createDataRow"></a>

### summarySectionDefinition.createDataRow() ⇒ <code>string</code>
Creates a new row for this section.
generates a new UUID and add it to the row array.

**Kind**: instance method of [<code>SummarySectionDefinition</code>](#SummarySectionDefinition)  
**Returns**: <code>string</code> - id  The new created row id  
<a name="SummarySectionDefinition+getRowIds"></a>

### summarySectionDefinition.getRowIds() ⇒ <code>array</code>
Return an array with all the row IDs of this section.

**Kind**: instance method of [<code>SummarySectionDefinition</code>](#SummarySectionDefinition)  
**Returns**: <code>array</code> - ids  An array of row ids  
