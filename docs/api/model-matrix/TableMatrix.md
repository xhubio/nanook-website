---
id: TableMatrix
title: Table Matrix
sidebar_label: Table Matrix
---

<a name="TableMatrix"></a>

## TableMatrix ⇐ <code>TableInterface</code>
This is the

**Kind**: global class  
**Extends**: <code>TableInterface</code>  

* [TableMatrix](#TableMatrix) ⇐ <code>TableInterface</code>
    * [.rows](#TableMatrix+rows)
    * [.columns](#TableMatrix+columns)
    * [.tableType](#TableMatrix+tableType) ⇒ <code>string</code>
    * [.getTestcaseForName(testcaseName)](#TableMatrix+getTestcaseForName) ⇒ <code>object</code>
    * [.createTestcaseName()](#TableMatrix+createTestcaseName)
    * [.getTestcasesForExecution()](#TableMatrix+getTestcasesForExecution)
    * [.processRanges(testcaseName)](#TableMatrix+processRanges) ⇒ <code>array</code>

<a name="TableMatrix+rows"></a>

### tableMatrix.rows
Stores the rows meta information.
For each row it creates one object
{
  name:        // The name of this row
  shortName:
  execute:     // If set this means that all the combinations of this row should be executed
  position:    // This name is used to reference this row
  reference:    // A refernce to an other table
  generator:   // A generator used to create the data for this row
  description: // Any description
}

**Kind**: instance property of [<code>TableMatrix</code>](#TableMatrix)  
<a name="TableMatrix+columns"></a>

### tableMatrix.columns
Stores the columns meta information.
For each column it creates one object
{
  name:        // The name of this column
  shortName:
  execute:     // If set this means that all the combinations of this column should be executed
  position:    // This name is used to reference this column
  reference:    // A refernce to an other table
  generator:   // A generator used to apply the column to the row
  description: // Any description
}

**Kind**: instance property of [<code>TableMatrix</code>](#TableMatrix)  
<a name="TableMatrix+tableType"></a>

### tableMatrix.tableType ⇒ <code>string</code>
Stores the type of the table

**Kind**: instance property of [<code>TableMatrix</code>](#TableMatrix)  
**Returns**: <code>string</code> - The type of this table.  
<a name="TableMatrix+getTestcaseForName"></a>

### tableMatrix.getTestcaseForName(testcaseName) ⇒ <code>object</code>
Returns the testcase for the given name. If not found it will throw an exception.
The name in a mtrix table has the following format: 'r<row>:c<column>'

**Kind**: instance method of [<code>TableMatrix</code>](#TableMatrix)  
**Returns**: <code>object</code> - testcaseDefinition  returns the testcase definition  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The name of the testcase |

<a name="TableMatrix+createTestcaseName"></a>

### tableMatrix.createTestcaseName()
creates the field name for a matrix table

**Kind**: instance method of [<code>TableMatrix</code>](#TableMatrix)  
<a name="TableMatrix+getTestcasesForExecution"></a>

### tableMatrix.getTestcasesForExecution()
This generator returns all the testcases which should be executed

**Kind**: instance method of [<code>TableMatrix</code>](#TableMatrix)  
<a name="TableMatrix+processRanges"></a>

### tableMatrix.processRanges(testcaseName) ⇒ <code>array</code>
Parses a testcase name given in a reference. If the name is a range it will return an
Array of names. For example the name 'tc12-14' will be expended to:
tc12, tc13, tc14

**Kind**: instance method of [<code>TableMatrix</code>](#TableMatrix)  
**Returns**: <code>array</code> - tcNames  An array of test case names  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The reference test case name |

