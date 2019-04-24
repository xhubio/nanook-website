---
id: model
title: Model
sidebar_label: Model
---


This Package is the base for the table models and test cases

# TableInterface

The TableInterface describes the basic Interface for the table.
This is common for all the tables like decision tables or the matrix tables.

## Properties

  - tableType  
    Returns the type of the table

## Functions

``` js
/**
 * Returns the testcase for the given name. If not found it will throw an exception
 * @param testcaseName {string} The name of the testcase
 * @return testcaseDefinition {object} returns the testcase definition object
 */
getTestcaseForName(testcaseName) {}
```

``` js
/**
 * This generator returns all the testcases which should be executed
 */
*getTestcasesForExecution() {}
```

``` js
/**
 * Parses a testcase name. If the name is a range it will return an
 * Array of names. For example the name 'tc12-14' will be expanded to:
 * tc12, tc13, tc14
 * This is a helper method
 * @param testcaseName {string} The reference test case name
 * @return tcNames {array} An array of test case names
 */
processRanges(testcaseName) {}
```

# Todos

The Todos defines what is needed to create the test cases.
Each Generator cmd or each reference creates a 'todo'.
There are different types of todos.

# TodoStatic

All the values from the generator column which are NOT a special cmd (like 'gen' for generator)
are taken as static values. These data will be directly written to the result data.

## Properties

  - value  
    The static data

# TodoMeta

The meta data of a test case. These data depends on the kind of table.

## Properties

  - fieldName  
    The name of the field in the table

  - tableName  
    The table this todo comes from

  - tableType  
    The table type of the table this todo comes from

  - testcaseName  
    The name of the test case this todo comes from

  - meta  
    The meta data itself. Depends from which table the data comes from

# TodoGenerator

Each todo is a call to the generator.

## Properties

  - generatorName  
    The name of the generator to call. This is the name the generator was registered in the
    generator registry

  - config  
    The parameters for calling the generator

  - tableType  
    The table type of the table this todo comes from

  - instanceIdSuffix  
    A suffix for the current instance id

  - order  
    The order number. Before the generator todos are executed they are sorted by this
    number. So the user can define an execution order for the generators. The default
    order number is '1000'.

# TodoReference

For each reference a TodoReference is created.

## Properties

  - targetTableName  
    The table name of the target table

  - targetFieldName  
    The name of the field in the target table

  - targetTestcaseName  
    The name of the test case in the target table

  - instanceIdSuffix  
    A suffix for the current instance id
