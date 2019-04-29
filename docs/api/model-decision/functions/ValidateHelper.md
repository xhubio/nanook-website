---
id: ValidateHelper
title: Validate Helper
sidebar_label: Validate Helper
---

## Functions

<dl>
<dt><a href="#buildRowModel">buildRowModel(table)</a> ⇒ <code>object</code></dt>
<dd><p>Create a model containing the rowIds for all the fields.
This is a model of the definition columns and rows.</p>
</dd>
<dt><a href="#buildTestcaseModel">buildTestcaseModel(table, rowModel)</a> ⇒ <code>object</code></dt>
<dd><p>Build the tescase model. This model is an array of testcase objects
const testcase = {
  id: testcaseId
  data : {
    sectionId : {
      parentSectionId: parentSecId
      rows: [rowIds]
      val: 2324323
      if section has more than 31 rows the values are splitted
      val = [2323213,2323232]
    }
  }
}</p>
</dd>
</dl>

<a name="buildRowModel"></a>

## buildRowModel(table) ⇒ <code>object</code>
Create a model containing the rowIds for all the fields.
This is a model of the definition columns and rows.

**Kind**: global function  
**Returns**: <code>object</code> - model  The Row model mode[subSectionRowId] = {rows: rowIds, parentSectionId = sectionRowId};  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table model |

<a name="buildTestcaseModel"></a>

## buildTestcaseModel(table, rowModel) ⇒ <code>object</code>
Build the tescase model. This model is an array of testcase objects
const testcase = {
  id: testcaseId
  data : {
    sectionId : {
      parentSectionId: parentSecId
      rows: [rowIds]
      val: 2324323
      if section has more than 31 rows the values are splitted
      val = [2323213,2323232]
    }
  }
}

**Kind**: global function  
**Returns**: <code>object</code> - model  The testcase model  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table model |
| rowModel | <code>object</code> | The row model |

