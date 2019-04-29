---
id: TestcaseDefinitionInterface
title: Testcase Definition Interface
sidebar_label: Testcase Definition Interface
---

<a name="TestcaseDefinitionInterface"></a>

## TestcaseDefinitionInterface
Defines the interface for a testcase definition

**Kind**: global class  

* [TestcaseDefinitionInterface](#TestcaseDefinitionInterface)
    * [.id](#TestcaseDefinitionInterface+id)
    * [.multiplicity](#TestcaseDefinitionInterface+multiplicity)
    * [.data](#TestcaseDefinitionInterface+data)
    * [.table](#TestcaseDefinitionInterface+table)
    * [.neverExecute](#TestcaseDefinitionInterface+neverExecute)
    * [.tableType](#TestcaseDefinitionInterface+tableType)
    * [.tableName](#TestcaseDefinitionInterface+tableName)
    * [.tableMeta](#TestcaseDefinitionInterface+tableMeta)
    * [.execute](#TestcaseDefinitionInterface+execute)
    * [.name](#TestcaseDefinitionInterface+name)
    * [.createTags()](#TestcaseDefinitionInterface+createTags) ⇒ <code>array</code>
    * [.createFilter()](#TestcaseDefinitionInterface+createFilter) ⇒ <code>array</code>
    * [.createTodos()](#TestcaseDefinitionInterface+createTodos)

<a name="TestcaseDefinitionInterface+id"></a>

### testcaseDefinitionInterface.id
The id of this testcase

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+multiplicity"></a>

### testcaseDefinitionInterface.multiplicity
Defines how often this test case should be created

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+data"></a>

### testcaseDefinitionInterface.data
The data in the cell for this testcase

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+table"></a>

### testcaseDefinitionInterface.table
The table this testcase comes from

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+neverExecute"></a>

### testcaseDefinitionInterface.neverExecute
Should this test case never be executed. This means if this test case
is referenced from an other test case it will not be executed

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+tableType"></a>

### testcaseDefinitionInterface.tableType
The table type of the table object

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+tableName"></a>

### testcaseDefinitionInterface.tableName
The name of the table stored in the table object

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+tableMeta"></a>

### testcaseDefinitionInterface.tableMeta
The meta information of the stored table object

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+execute"></a>

### testcaseDefinitionInterface.execute
Should this test case be executed or is it only for a reference

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+name"></a>

### testcaseDefinitionInterface.name
The name of this testcase. With this name the
testcase could be found in the table

**Kind**: instance property of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
<a name="TestcaseDefinitionInterface+createTags"></a>

### testcaseDefinitionInterface.createTags() ⇒ <code>array</code>
Returns all the tags found in this test case

**Kind**: instance method of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
**Returns**: <code>array</code> - tags  An Array with all the found tags  
<a name="TestcaseDefinitionInterface+createFilter"></a>

### testcaseDefinitionInterface.createFilter() ⇒ <code>array</code>
Returns all the filter found in this test case

**Kind**: instance method of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
**Returns**: <code>array</code> - filter  An Array with all the found filter  
<a name="TestcaseDefinitionInterface+createTodos"></a>

### testcaseDefinitionInterface.createTodos()
Create all the todos for this testcase definition
const todos = {
  generators :[genTodo,],
  references: [refTodo,],
  static: [staticData],
}

**Kind**: instance method of [<code>TestcaseDefinitionInterface</code>](#TestcaseDefinitionInterface)  
