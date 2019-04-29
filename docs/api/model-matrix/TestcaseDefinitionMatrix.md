---
id: TestcaseDefinitionMatrix
title: Testcase Definition Matrix
sidebar_label: Testcase Definition Matrix
---

<a name="TestcaseDefinitionMatrix"></a>

## TestcaseDefinitionMatrix ⇐ <code>TestcaseDefinitionInterface</code>
A test case is one cell in the table.

**Kind**: global class  
**Extends**: <code>TestcaseDefinitionInterface</code>  

* [TestcaseDefinitionMatrix](#TestcaseDefinitionMatrix) ⇐ <code>TestcaseDefinitionInterface</code>
    * [.row](#TestcaseDefinitionMatrix+row)
    * [.column](#TestcaseDefinitionMatrix+column)
    * [.name](#TestcaseDefinitionMatrix+name)
    * [.execute](#TestcaseDefinitionMatrix+execute)
    * [.getFieldName()](#TestcaseDefinitionMatrix+getFieldName)
    * [.createTodos()](#TestcaseDefinitionMatrix+createTodos) ⇒ <code>object</code>
    * [._createGeneratorTodo(generatorCmd, type, meta)](#TestcaseDefinitionMatrix+_createGeneratorTodo) ⇒ <code>object</code>
    * [._createReferenceTodo(generatorCmd, type, meta)](#TestcaseDefinitionMatrix+_createReferenceTodo) ⇒ <code>object</code>
    * [._createStaticValueTodo(generatorCmd, type, meta)](#TestcaseDefinitionMatrix+_createStaticValueTodo) ⇒ <code>object</code>
    * [._createMultirowSectionTodo(section)](#TestcaseDefinitionMatrix+_createMultirowSectionTodo) ⇒ <code>array</code>

<a name="TestcaseDefinitionMatrix+row"></a>

### testcaseDefinitionMatrix.row
the row this test case comes from

**Kind**: instance property of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
<a name="TestcaseDefinitionMatrix+column"></a>

### testcaseDefinitionMatrix.column
the column this test case comes from

**Kind**: instance property of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
<a name="TestcaseDefinitionMatrix+name"></a>

### testcaseDefinitionMatrix.name
The name of this testcase. With this name the
testcase could be found in the table.
The name in a matrix table has the following format: 'r<row>:c<column>'

**Kind**: instance property of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
<a name="TestcaseDefinitionMatrix+execute"></a>

### testcaseDefinitionMatrix.execute
Should this test case be executed or is it only for a reference

**Kind**: instance property of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
<a name="TestcaseDefinitionMatrix+getFieldName"></a>

### testcaseDefinitionMatrix.getFieldName()
Creates a field name. In a matrix table the field name
is the testcase name plus the name given in the row or column

**Kind**: instance method of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
<a name="TestcaseDefinitionMatrix+createTodos"></a>

### testcaseDefinitionMatrix.createTodos() ⇒ <code>object</code>
Create all the todos for this testcase definition
const todos = {
  generators :[genTodo,],
  references: [refTodo,],
  static: [staticData],
}

**Kind**: instance method of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
**Returns**: <code>object</code> - todos  An object with all the todos by there type  
<a name="TestcaseDefinitionMatrix+_createGeneratorTodo"></a>

### testcaseDefinitionMatrix.\_createGeneratorTodo(generatorCmd, type, meta) ⇒ <code>object</code>
Creates the generator todo

**Kind**: instance method of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
**Returns**: <code>object</code> - todo  A generator Todo  

| Param | Type | Description |
| --- | --- | --- |
| generatorCmd | <code>string</code> | The generator command |
| type | <code>string</code> | row or column. Indicating if it is the row or column data |
| meta | <code>object</code> | The meta data of the column or row |

<a name="TestcaseDefinitionMatrix+_createReferenceTodo"></a>

### testcaseDefinitionMatrix.\_createReferenceTodo(generatorCmd, type, meta) ⇒ <code>object</code>
Creates a refernce todo

**Kind**: instance method of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
**Returns**: <code>object</code> - todo  A generator Todo  

| Param | Type | Description |
| --- | --- | --- |
| generatorCmd | <code>string</code> | The generator command |
| type | <code>string</code> | row or column. Indicating if it is the row or column data |
| meta | <code>object</code> | The meta data of the column or row |

<a name="TestcaseDefinitionMatrix+_createStaticValueTodo"></a>

### testcaseDefinitionMatrix.\_createStaticValueTodo(generatorCmd, type, meta) ⇒ <code>object</code>
Creates the todo for static values

**Kind**: instance method of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
**Returns**: <code>object</code> - todo  A static Todo  

| Param | Type | Description |
| --- | --- | --- |
| generatorCmd | <code>string</code> | The generator command |
| type | <code>string</code> | row or column. Indicating if it is the row or column data |
| meta | <code>object</code> | The meta data of the column or row |

<a name="TestcaseDefinitionMatrix+_createMultirowSectionTodo"></a>

### testcaseDefinitionMatrix.\_createMultirowSectionTodo(section) ⇒ <code>array</code>
Create a meta todo

**Kind**: instance method of [<code>TestcaseDefinitionMatrix</code>](#TestcaseDefinitionMatrix)  
**Returns**: <code>array</code> - todos  Aa array of meta Todos  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>object</code> | The current multiRowSection |

