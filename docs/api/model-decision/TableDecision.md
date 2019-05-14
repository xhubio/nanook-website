---
id: TableDecision
title: Table Decision
sidebar_label: Table Decision
---

<a name="TableDecision"></a>

## TableDecision ⇐ <code>TableInterface</code>
The table implementation for a decision table.

**Kind**: global class  
**Extends**: <code>TableInterface</code>  

* [TableDecision](#TableDecision) ⇐ <code>TableInterface</code>
    * [.testcaseOrder](#TableDecision+testcaseOrder)
    * [.testcases](#TableDecision+testcases)
    * [.sections](#TableDecision+sections)
    * [.sectionOrder](#TableDecision+sectionOrder)
    * [.singleCheck](#TableDecision+singleCheck)
    * [.sectionNames](#TableDecision+sectionNames)
    * [.tableType](#TableDecision+tableType) ⇒ <code>string</code>
    * [.getTestcaseForName(testcaseName)](#TableDecision+getTestcaseForName) ⇒ <code>object</code>
    * [.getTestcasesForExecution()](#TableDecision+getTestcasesForExecution)
    * [.processRanges(testcaseName)](#TableDecision+processRanges) ⇒ <code>array</code>
    * [.calculate()](#TableDecision+calculate)
    * [.validate()](#TableDecision+validate)
    * [._validateSection(section, issues)](#TableDecision+_validateSection)
    * [._validateTestcase(section, issues)](#TableDecision+_validateTestcase)
    * [._buildSectionRows(section)](#TableDecision+_buildSectionRows)
    * [._addNewSection(sectionDefinition, position)](#TableDecision+_addNewSection)
    * [.addNewTestcase(name, position)](#TableDecision+addNewTestcase) ⇒ <code>object</code>
    * [.addNewFieldSection(name, position)](#TableDecision+addNewFieldSection) ⇒ <code>object</code>
    * [.addNewMultiRowSection(name, position)](#TableDecision+addNewMultiRowSection) ⇒ <code>object</code>
    * [.addNewTagSection(name, position)](#TableDecision+addNewTagSection) ⇒ <code>object</code>
    * [.addNewFilterSection(name, position)](#TableDecision+addNewFilterSection) ⇒ <code>object</code>
    * [.addNewGeneratorSwitchSection(name, position)](#TableDecision+addNewGeneratorSwitchSection) ⇒ <code>object</code>
    * [.addNewSummarySection(name, position)](#TableDecision+addNewSummarySection) ⇒ <code>object</code>
    * [.addNewExecuteSection(name, position)](#TableDecision+addNewExecuteSection) ⇒ <code>object</code>
    * [.addNewNeverExecuteSection(name, position)](#TableDecision+addNewNeverExecuteSection) ⇒ <code>object</code>
    * [.addNewMultiplicitySection(name, position)](#TableDecision+addNewMultiplicitySection) ⇒ <code>object</code>
    * [._checkParameterAddSection(position)](#TableDecision+_checkParameterAddSection)

<a name="TableDecision+testcaseOrder"></a>

### tableDecision.testcaseOrder
The order of test cases. A list of test case ids

**Kind**: instance property of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+testcases"></a>

### tableDecision.testcases
Stores the testcases by there id

**Kind**: instance property of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+sections"></a>

### tableDecision.sections
The section definitions stored by there id

**Kind**: instance property of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+sectionOrder"></a>

### tableDecision.sectionOrder
The order of the sections. A list of section ids

**Kind**: instance property of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+singleCheck"></a>

### tableDecision.singleCheck
This map is used to verify if sections which must only exists once are
used more often. The map stores the sections by there sectionType.

**Kind**: instance property of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+sectionNames"></a>

### tableDecision.sectionNames
Stores all the section names per type. This is
only to make sure that a section name is not used twice per table.
The value is `${sectionType}-${sectionName}`
Per type the name must be unique

**Kind**: instance property of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+tableType"></a>

### tableDecision.tableType ⇒ <code>string</code>
Stores the type of the table

**Kind**: instance property of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>string</code> - The type of this table.  
<a name="TableDecision+getTestcaseForName"></a>

### tableDecision.getTestcaseForName(testcaseName) ⇒ <code>object</code>
Returns the testcase for the given name. If not found it will throw an exception

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - testcaseDefinition  returns the testcase definition  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The name of the testcase |

<a name="TableDecision+getTestcasesForExecution"></a>

### tableDecision.getTestcasesForExecution()
This generator returns all the testcases which should be executed

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+processRanges"></a>

### tableDecision.processRanges(testcaseName) ⇒ <code>array</code>
Parses a testcase name given in a reference. If the name is a range it will return an
Array of names. For example the name 'tc12-14' will be expended to:
tc12, tc13, tc14

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>array</code> - tcNames  An array of test case names  

| Param | Type | Description |
| --- | --- | --- |
| testcaseName | <code>string</code> | The reference test case name |

<a name="TableDecision+calculate"></a>

### tableDecision.calculate()
Calculates the summary for each section.
The results will be added to the section rows and to the summary section

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+validate"></a>

### tableDecision.validate()
Validates the model. Only field sections are validated.
All the validation issues will be returned. The issue
has the following format:
- A table must have one and only one summary section
- A table must have at least one field section
- The names of the fields must be unique per table
- A table must have at least one testcase

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
<a name="TableDecision+_validateSection"></a>

### tableDecision.\_validateSection(section, issues)
Validates a given section and stores the issues in the given array

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>object</code> | The section to validate |
| issues | <code>array</code> | The array to store the found issues |

<a name="TableDecision+_validateTestcase"></a>

### tableDecision.\_validateTestcase(section, issues)
Validates a given testcase for the given section

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>object</code> | The section to validate |
| issues | <code>array</code> | The array to store the found issues |

<a name="TableDecision+_buildSectionRows"></a>

### tableDecision.\_buildSectionRows(section)
Build an internal mapping for rowIds to the objects

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  

| Param | Type | Description |
| --- | --- | --- |
| section | <code>object</code> | The section to get the rowIDs from |

<a name="TableDecision+_addNewSection"></a>

### tableDecision.\_addNewSection(sectionDefinition, position)
Adds a generic section and definition to the model

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  

| Param | Type | Description |
| --- | --- | --- |
| sectionDefinition | <code>object</code> | The sectionDefinition to be added |
| position | <code>integer</code> | The position where to add the section |

<a name="TableDecision+addNewTestcase"></a>

### tableDecision.addNewTestcase(name, position) ⇒ <code>object</code>
Adds a new testcase to the table. If there are already existing sections these will be added to the testcase

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - testcase  The created testcase  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name of the new testcase |
| position | <code>integer</code> | (optional) The position where to add the new testcase. |

<a name="TableDecision+addNewFieldSection"></a>

### tableDecision.addNewFieldSection(name, position) ⇒ <code>object</code>
Adds a new FieldSection to the model. For each existing testcase
a section will be added.

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewMultiRowSection"></a>

### tableDecision.addNewMultiRowSection(name, position) ⇒ <code>object</code>
Adds a new MultiRowSection to the model. For each existing testcase
a section will be added.

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewTagSection"></a>

### tableDecision.addNewTagSection(name, position) ⇒ <code>object</code>
Adds a new MultiRowSection to the model. For each existing testcase
a section will be added.

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewFilterSection"></a>

### tableDecision.addNewFilterSection(name, position) ⇒ <code>object</code>
Adds a new MultiRowSection to the model. For each existing testcase
a section will be added.

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewGeneratorSwitchSection"></a>

### tableDecision.addNewGeneratorSwitchSection(name, position) ⇒ <code>object</code>
Adds a new GeneratorSectionDefinition to the model. For each existing testcase
a section will be added.

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewSummarySection"></a>

### tableDecision.addNewSummarySection(name, position) ⇒ <code>object</code>
Adds a new SummarySection to the model. Testcases needs not be updated

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewExecuteSection"></a>

### tableDecision.addNewExecuteSection(name, position) ⇒ <code>object</code>
Adds a new ExecuteSection to the model. Testcases needs not be updated

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewNeverExecuteSection"></a>

### tableDecision.addNewNeverExecuteSection(name, position) ⇒ <code>object</code>
Adds a new ExecuteSection to the model. Testcases needs not be updated

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+addNewMultiplicitySection"></a>

### tableDecision.addNewMultiplicitySection(name, position) ⇒ <code>object</code>
Adds a new MultiplicitySection to the model. Testcases needs not be updated

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  
**Returns**: <code>object</code> - sectionDefinition  The created section definition  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | The name for the new section. The name must not be used before |
| position | <code>integer</code> | (optional) The position where to add the new section. |

<a name="TableDecision+_checkParameterAddSection"></a>

### tableDecision.\_checkParameterAddSection(position)
validates the parameter for adding a new section

**Kind**: instance method of [<code>TableDecision</code>](#TableDecision)  

| Param | Type | Description |
| --- | --- | --- |
| position | <code>integer</code> | (optional) The position where to add the new section. |

