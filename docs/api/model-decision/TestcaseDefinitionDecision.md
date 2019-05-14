---
id: TestcaseDefinitionDecision
title: Testcase Definition Decision
sidebar_label: Testcase Definition Decision
---

<a name="TestcaseDefinitionDecision"></a>

## TestcaseDefinitionDecision ⇐ <code>TestcaseDefinitionInterface</code>
A test case is one column in the test case part. This is the implementation for the decision table.

**Kind**: global class  
**Extends**: <code>TestcaseDefinitionInterface</code>  

* [TestcaseDefinitionDecision](#TestcaseDefinitionDecision) ⇐ <code>TestcaseDefinitionInterface</code>
    * [.isPartOfCompletion](#TestcaseDefinitionDecision+isPartOfCompletion)
    * [.data](#TestcaseDefinitionDecision+data)
    * [.execute](#TestcaseDefinitionDecision+execute)
    * [.name](#TestcaseDefinitionDecision+name)
    * [.clone()](#TestcaseDefinitionDecision+clone) ⇒ <code>object</code>
    * [.createTags()](#TestcaseDefinitionDecision+createTags) ⇒ <code>array</code>
    * [.createFilter()](#TestcaseDefinitionDecision+createFilter) ⇒ <code>array</code>
    * [.createGeneratorSwitches()](#TestcaseDefinitionDecision+createGeneratorSwitches) ⇒ <code>array</code>
    * [._isTrue(val)](#TestcaseDefinitionDecision+_isTrue) ⇒ <code>boolean</code>
    * [.createTodos()](#TestcaseDefinitionDecision+createTodos) ⇒ <code>object</code>
    * [._getGeneratorCommandForSubSection(subSection)](#TestcaseDefinitionDecision+_getGeneratorCommandForSubSection) ⇒ <code>string</code>
    * [._createGeneratorTodo(subSection, generatorCmd, key)](#TestcaseDefinitionDecision+_createGeneratorTodo) ⇒ <code>object</code>
    * [._createReferenceTodo(subSection, generatorCmd, key)](#TestcaseDefinitionDecision+_createReferenceTodo)
    * [._createStaticValueTodo(subSection, generatorCmd, key)](#TestcaseDefinitionDecision+_createStaticValueTodo) ⇒ <code>object</code>
    * [._createMultirowSectionTodo(section)](#TestcaseDefinitionDecision+_createMultirowSectionTodo) ⇒ <code>array</code>
    * [.calculate(sectionRowId, rowIds)](#TestcaseDefinitionDecision+calculate) ⇒ <code>number</code>
    * [.setValue(rowId, value)](#TestcaseDefinitionDecision+setValue)
    * [.getValue(rowId)](#TestcaseDefinitionDecision+getValue) ⇒ <code>string</code>
    * [.validate(section)](#TestcaseDefinitionDecision+validate) ⇒ <code>array</code>

<a name="TestcaseDefinitionDecision+isPartOfCompletion"></a>

### testcaseDefinitionDecision.isPartOfCompletion
Defines if this testcase is included into the completness computation

**Kind**: instance property of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
<a name="TestcaseDefinitionDecision+data"></a>

### testcaseDefinitionDecision.data
The data of this test case

**Kind**: instance property of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
<a name="TestcaseDefinitionDecision+execute"></a>

### testcaseDefinitionDecision.execute
Should this test case be executed or is it only for a reference

**Kind**: instance property of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
<a name="TestcaseDefinitionDecision+name"></a>

### testcaseDefinitionDecision.name
The name of this testcase. With this name the
testcase could be found in the table

**Kind**: instance property of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
<a name="TestcaseDefinitionDecision+clone"></a>

### testcaseDefinitionDecision.clone() ⇒ <code>object</code>
Clone the current testcase definition.

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>object</code> - A clone of this test case definition.  
<a name="TestcaseDefinitionDecision+createTags"></a>

### testcaseDefinitionDecision.createTags() ⇒ <code>array</code>
Returns all the tags found in this test case

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>array</code> - tags  An Array with all the found tags  
<a name="TestcaseDefinitionDecision+createFilter"></a>

### testcaseDefinitionDecision.createFilter() ⇒ <code>array</code>
Returns all the filter found in this test case

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>array</code> - filter  An Array with all the found filter  
<a name="TestcaseDefinitionDecision+createGeneratorSwitches"></a>

### testcaseDefinitionDecision.createGeneratorSwitches() ⇒ <code>array</code>
Returns a list of generator names which should not be executed

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>array</code> - generatorNames  An Array with alle the generator names to be switched off for this test case  
<a name="TestcaseDefinitionDecision+_isTrue"></a>

### testcaseDefinitionDecision.\_isTrue(val) ⇒ <code>boolean</code>
Checks if the given string contains a valid true value

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>boolean</code> - res  TRUE if the value is a valid boolean true value.  

| Param | Type | Description |
| --- | --- | --- |
| val | <code>string</code> | The expression to check |

<a name="TestcaseDefinitionDecision+createTodos"></a>

### testcaseDefinitionDecision.createTodos() ⇒ <code>object</code>
Create all the todos for this testcase definition
const todos = {
  generators :[genTodo,],
  references: [refTodo,],
  static: [staticData],
}

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>object</code> - todos  An object with all the todos by there type  
<a name="TestcaseDefinitionDecision+_getGeneratorCommandForSubSection"></a>

### testcaseDefinitionDecision.\_getGeneratorCommandForSubSection(subSection) ⇒ <code>string</code>
Gets the generator command for a FieldSubSection

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>string</code> - generatorCmd  The generator command from the sub section  

| Param | Type | Description |
| --- | --- | --- |
| subSection | <code>object</code> | The FieldSubSection |

<a name="TestcaseDefinitionDecision+_createGeneratorTodo"></a>

### testcaseDefinitionDecision.\_createGeneratorTodo(subSection, generatorCmd, key) ⇒ <code>object</code>
Creates the generator todo

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>object</code> - todo  A generator Todo  

| Param | Type | Description |
| --- | --- | --- |
| subSection | <code>object</code> | The current FieldSubSection |
| generatorCmd | <code>string</code> | The generator command |
| key | <code>string</code> | The key of the value in the subSection |

<a name="TestcaseDefinitionDecision+_createReferenceTodo"></a>

### testcaseDefinitionDecision.\_createReferenceTodo(subSection, generatorCmd, key)
Creates a reference todo

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  

| Param | Type | Description |
| --- | --- | --- |
| subSection | <code>object</code> | The current FieldSubSection |
| generatorCmd | <code>string</code> | The reference command |
| key | <code>string</code> | The key of the value in the subSection |

<a name="TestcaseDefinitionDecision+_createStaticValueTodo"></a>

### testcaseDefinitionDecision.\_createStaticValueTodo(subSection, generatorCmd, key) ⇒ <code>object</code>
Creates the todo for static values

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>object</code> - todo  A static Todo  

| Param | Type | Description |
| --- | --- | --- |
| subSection | <code>object</code> | The current FieldSubSection |
| generatorCmd | <code>string</code> | The generator command |
| key | <code>string</code> | The key of the value in the subSection |

<a name="TestcaseDefinitionDecision+_createMultirowSectionTodo"></a>

### testcaseDefinitionDecision.\_createMultirowSectionTodo(section) ⇒ <code>array</code>
Create a meta todo

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>array</code> - todos  Aa array of meta Todos  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>object</code> | The current multiRowSection |

<a name="TestcaseDefinitionDecision+calculate"></a>

### testcaseDefinitionDecision.calculate(sectionRowId, rowIds) ⇒ <code>number</code>
Claculates how many entries per section are defined

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>number</code> - count  The number of entries  

| Param | Type | Description |
| --- | --- | --- |
| sectionRowId | <code>string</code> | The id of the section containing these rows |
| rowIds | <code>array</code> | All the arrays of this section |

<a name="TestcaseDefinitionDecision+setValue"></a>

### testcaseDefinitionDecision.setValue(rowId, value)
Set a value for a row in this testcase

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  

| Param | Type | Description |
| --- | --- | --- |
| rowId | <code>string</code> | The rowId for this value |
| value | <code>string</code> | The value to be set |

<a name="TestcaseDefinitionDecision+getValue"></a>

### testcaseDefinitionDecision.getValue(rowId) ⇒ <code>string</code>
Set a value for a row in this testcase

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>string</code> - value  The value of this row id  

| Param | Type | Description |
| --- | --- | --- |
| rowId | <code>string</code> | The rowId for this value |

<a name="TestcaseDefinitionDecision+validate"></a>

### testcaseDefinitionDecision.validate(section) ⇒ <code>array</code>
Validates this section definition.
- A testcase must have a name
- A fieldSection must have at least one subSection
- If mandatory = true for a section, it must have at least one entry
- if multiple = false it must have only one entry per section

**Kind**: instance method of [<code>TestcaseDefinitionDecision</code>](#TestcaseDefinitionDecision)  
**Returns**: <code>array</code> - issues  An array of issues found  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>object</code> | The section to be validated |

