---
id: ValidateMissing
title: Validate Missing
sidebar_label: Validate Missing
---

## Functions

<dl>
<dt><a href="#combineTestcases">combineTestcases(table)</a> ⇒ <code>object</code></dt>
<dd><p>Combines the existing testcases. So it could be easier to find the open ones
Compares each field of a testcase, if all the feields are the same except one,
then this field could be combined in one if the values of one field do not exists
in the other one. XOR logic.
The testcases could be combiened as long as in one loop no new combination was
possible</p>
</dd>
<dt><a href="#combineTestcasesIsDisjunct">combineTestcasesIsDisjunct(val1, val2)</a></dt>
<dd><p>Checks if the both given values are bitwise disjunct.
The parameters are integers. But it could also be an Array
of integers.</p>
</dd>
<dt><a href="#combineTestcasesSub">combineTestcasesSub(tc1, tc2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Combines two testcases into one. This could be done if only one field is different between two testcases.
This one field must also be disjunct. Then it will be combined. The tescase2 will
be combined with testcase1 into testcase1. Testcase1.skip will be set to true;</p>
<p>Format:
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

<a name="combineTestcases"></a>

## combineTestcases(table) ⇒ <code>object</code>
Combines the existing testcases. So it could be easier to find the open ones
Compares each field of a testcase, if all the feields are the same except one,
then this field could be combined in one if the values of one field do not exists
in the other one. XOR logic.
The testcases could be combiened as long as in one loop no new combination was
possible

**Kind**: global function  
**Returns**: <code>object</code> - testCaseModel  The combined testcase model  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table model |

<a name="combineTestcasesIsDisjunct"></a>

## combineTestcasesIsDisjunct(val1, val2)
Checks if the both given values are bitwise disjunct.
The parameters are integers. But it could also be an Array
of integers.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| val1 | <code>integer</code> | The first value. |
| val2 | <code>integer</code> | The second value |

<a name="combineTestcasesSub"></a>

## combineTestcasesSub(tc1, tc2) ⇒ <code>boolean</code>
Combines two testcases into one. This could be done if only one field is different between two testcases.
This one field must also be disjunct. Then it will be combined. The tescase2 will
be combined with testcase1 into testcase1. Testcase1.skip will be set to true;

Format:
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
**Returns**: <code>boolean</code> - isCombined  True if the testcases where combined  

| Param | Type | Description |
| --- | --- | --- |
| tc1 | <code>object</code> | The first testcase |
| tc2 | <code>object</code> | The second testcase |

