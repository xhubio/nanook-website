---
id: ValidateDouble
title: Validate Double
sidebar_label: Validate Double
---

## Functions

<dl>
<dt><a href="#findDouble">findDouble(table)</a> ⇒ <code>object</code></dt>
<dd><p>Find double testcase definitions.</p>
</dd>
<dt><a href="#findDoubleSub">findDoubleSub(testCaseModel)</a> ⇒ <code>object</code></dt>
<dd><p>Compares each testcase against each other. The double ones are reported.
The values for the fields are converted to binary values. For each field the values
will be combined with binary AND. If there is an integer &gt; 0 for each field, then the testcase
is a double</p>
</dd>
<dt><a href="#findDoubleCompareTestcase">findDoubleCompareTestcase(tc1, tc2)</a> ⇒ <code>object</code></dt>
<dd><p>Compares one testcase with an other and checks if it is a double one.</p>
</dd>
</dl>

<a name="findDouble"></a>

## findDouble(table) ⇒ <code>object</code>
Find double testcase definitions.

**Kind**: global function  
**Returns**: <code>object</code> - errors  The found double testcases  

| Param | Type | Description |
| --- | --- | --- |
| table | <code>object</code> | The table model |

<a name="findDoubleSub"></a>

## findDoubleSub(testCaseModel) ⇒ <code>object</code>
Compares each testcase against each other. The double ones are reported.
The values for the fields are converted to binary values. For each field the values
will be combined with binary AND. If there is an integer > 0 for each field, then the testcase
is a double

**Kind**: global function  
**Returns**: <code>object</code> - errors  The found double testcases  

| Param | Type | Description |
| --- | --- | --- |
| testCaseModel | <code>object</code> | The testcaseModel |

<a name="findDoubleCompareTestcase"></a>

## findDoubleCompareTestcase(tc1, tc2) ⇒ <code>object</code>
Compares one testcase with an other and checks if it is a double one.

**Kind**: global function  
**Returns**: <code>object</code> - results  Object returned only if there are double  

| Param | Type | Description |
| --- | --- | --- |
| tc1 | <code>object</code> | The first testcase |
| tc2 | <code>object</code> | The second testcase |

