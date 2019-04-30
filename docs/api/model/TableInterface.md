---
id: TableInterface
title: Table Interface
sidebar_label: Table Interface
---

<a name="TableInterface"></a>

## TableInterface
Defines the interface for a table. All the table models must Implement
this interface.

**Kind**: global class  

* [TableInterface](#TableInterface)
    * [.name](#TableInterface+name)
    * [.meta](#TableInterface+meta)
    * [.tableType](#TableInterface+tableType)
    * [.getTestcaseForName(testcaseName)](#TableInterface+getTestcaseForName) ⇒ <code>object</code>
    * [.getTestcasesForExecution()](#TableInterface+getTestcasesForExecution)
    * [.processRanges(testcaseName)](#TableInterface+processRanges) ⇒ <code>array</code>

<a name="TableInterface+name"></a>

### tableInterface.name
The name of this table

**Kind**: instance property of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+meta"></a>

### tableInterface.meta
Any meta information the table may have.
For example the original file name.

**Kind**: instance property of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+tableType"></a>

### tableInterface.tableType
The type of this table

**Kind**: instance property of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+getTestcaseForName"></a>

### tableInterface.getTestcaseForName(testcaseName) ⇒ <code>object</code>
Returns the testcase for the given name. If not found it will throw an exception

**Kind**: instance method of [<code>TableInterface</code>](#TableInterface)  
**Returns**: <code>object</code> - testcaseDefinition  returns the testcase definition  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The name of the testcase |

<a name="TableInterface+getTestcasesForExecution"></a>

### tableInterface.getTestcasesForExecution()
This generator returns all the testcases which should be executed

**Kind**: instance method of [<code>TableInterface</code>](#TableInterface)  
<a name="TableInterface+processRanges"></a>

### tableInterface.processRanges(testcaseName) ⇒ <code>array</code>
Parses a testcase name. If the name is a range it will return an
Array of names. For example the name 'tc12-14' will be expanded to:
tc12, tc13, tc14
This is a helper method

**Kind**: instance method of [<code>TableInterface</code>](#TableInterface)  
**Returns**: <code>array</code> - tcNames  An array of test case names  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The reference test case name |

