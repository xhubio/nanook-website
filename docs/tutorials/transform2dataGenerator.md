---
id: transform2dataGenerator
title: Transform the table into a data generator
sidebar_label: Transform into data generator
---


In the first tutorial, we created a normal equivalence class table. It showed us
that we had to create 39 test cases. And we still had to create the data manually.
It didn't create the data for us.

So let's transform this table into a data generation table. To do this, we'll insert a new column between 'Equivalence class' and 'Description' and type in  'generator' as the header. In this column, we will add the commands to call generators that will create the data for us.

## Format the table

In the previous tutorial, we created an equivalence class table without any
predefined format rules. However, if we want the table to be parsable for the table
processor, we need to follow some formatting rules.

The next sections describe the format required to make the table parseable.

## General Overview

## Layout Equivalence Class Table

![Example table](/img/model-decision/table.jpg)

Here is a sample equivalence class table. The column order is important. The first five columns are fixed. The test case start in the 6th column. The parser finds the end of the test case by parsing the first row and searching for the first empty cell. So if you add an empty column in your table, the parser will stop there.

The table is divided into a few sections.

![Test case side](/img/model-decision/table_testcases.jpg)

The right side shows the test cases. Each column on the right side represents one
test case. The column header of a test case is the name of this test case.
In this example the names are just numbers. Column ''F'' is the first test case with the name ''1''.

The left side of the table describes the fields and the expected result.

On the left, the ''field section'' is the primary data section. The primary data is the data which is directly manipulated in the test. But this is just a name. You can have as many 'FieldSection' elements as you like. A field section consists of one to multiple 'FieldSubSection' elements.

The field section describes the variety of data needed by the test - and therefore the number of tests to be created.

![Field sub section](/img/model-decision/table_field_sub_section.jpg)

A subsection in this case is one field and all the equivalence classes for this field. An equivalence class defines the different kinds of field values with an equivalent behaviour.

For example: Let's say we have a field with a maximum length of 10 characters. Then all values entered with more than 10 chars will lead to an equivalent behaviour of the application. So it is not necessary to test with 11, 12, 13, …​ characters. The equivalence class is 'more than 10 chars'.

One fieldSection may have many fieldSubSections. The FieldSection groups fields together. Having one or multiple fieldSections has no impact on the table itself. All the fieldSubSections have to be combined.

![Multi row section](/img/model-decision/table_multi_row_section.jpg)

The multiple row sections can be used to describe the expected results or error messages. It is up to the user how many of these sections are in the table. It can also contain actions on the UI or other information needed.

## Create the first table for data generation

In this step we will create a simple table with static data generation.

### Create table

Since the current implementation reads Excel spreadsheets, let's create a new Excel file.

  - Set the sheet identifier  
    The parser only considers sheets that have the right identifier set in the first cell.
    So enter '\<DECISION\_TABLE\>' in the first cell.

  - Set the column header  
    Enter the following column headers in the second row.

| Column | Column header      |
| ------ | ------------------ |
| A      | Field Name         |
| B      |                    |
| C      | Equivalence class  |
| D      | Generator Function |
| E      | Comment            |

  - Create the first section (FieldSection)  
    A 'FieldSection' contains 1..n 'FieldSubSection' elements.
    Add a new row with the following columns:

| Column | Data         | Description                    |
| ------ | ------------ | ------------------------------ |
| A      | Primary Data | A name for this 'FieldSection' |
| B      | FieldSection | The 'FieldSection' Identifier. |

  - Create a 'FieldSubSection'  
    For this example we take an email field.
    Add a new row with the following columns:

| Column | Data            | Description                       |
| ------ | --------------- | --------------------------------- |
| A      | email           | The name of the data field        |
| B      | FieldSubSection | The 'FieldSubSection' Identifier. |

  - Create the equivalence class for the email field  
    In this example, we create only one class. Add a new row with the following columns:

| Column | Data              | Description                                                            |
| ------ | ----------------- | ---------------------------------------------------------------------- |
| A      |                   | Leave empty                                                            |
| B      |                   | Leave empty                                                            |
| C      | valid             | The name of this class. 'valid' indicates that we create a valid email |
| D      | <foo.bar@gum.com> | The value to be generated                                              |
| E      |                   | Leave empty                                                            |
| F      | X                 | The x tells the processor that this equivalence class is chosen.       |

Add a name for the test case of column 'F' in the first row.
Just add 'TC1' or any other name you like.

  - Mark the end row of the table.
    An identifier needs to be set to tell the processor that it has reached the end of the table.
    Add a new row with the following columns:

| Column | Data    | Description                                                                    |
| ------ | ------- | ------------------------------------------------------------------------------ |
| A      | \<END\> | This identifier marks the last row of the table. All content below is ignored. |

  - Last, not least: Add some color to the table.

![step2](/img/tutorials/t2/step2.png)

## Create a project for creating the data

### Create an initial npm module

Create a new empty directory. Change into it and run npm init.

``` c
mkdir demo-tdg
cd demo-tdg
mkdir resources
mkdir tdg
mkdir src
npm init
npm install --save @xhubio/nanook-table
```

## Create the script to call the processor

Create a new file 'src/tdg.js' with the following content.

``` js
const path = require('path')
const p = require('@xhubio/nanook-table')
const { LoggerMemory } = require('@xhubio/nanook-table')

async function doIt() {
  const logger = new LoggerMemory()               
  logger.writeConsole = true                      

  const fileProcessor = await p.createDefaultFileProcessor(logger)
                                                  

  const processor = new p.Processor({             
    logger,
    generatorRegistry: p.createDefaultGeneratorRegistry(),
    writer: p.createDefaultWriter(logger)
  })

  await fileProcessor.load(path.join('resources', 'demo.xlsx'))
                                                  

  processor.tables = fileProcessor.tables         

  await processor.process()                       
}


doIt().then(() => {
  console.log('Finish')
}).catch(err => {
  console.log(err)
})
```

  - Creates a logger. For all tutorials, we will be using the Memory Logger. This
    logger stores all the log entries. It is a good logger for unit testing.

  - Tells the Memory Logger to also write out the logs to console.

  - Creates a file processor. The file processor is responsible for loading an Excel sheet and transforming it into a table object as it is used by the processor.

  - Creates the processor.  
    The processor needs a registry in which all the available generators are registered. In the current example, the registry is empty. But a registry is required. The writer is responsible for writing the created test data in the desired format. The default writer simply writes the test case data as a JSON file. You can add as many writers as you like.

  - Loads the spreadsheet and creates the table object. You can call the load function multiple times depending on how many spreadsheets you would like to load. Each spreadsheet may have multiple tables. The table names must be unique across all spreadsheets. The path must point to the file you created in the previous step.

  - Gets the loaded table objects and inserts them into the processor.

  - Processes all tables and generates the data.

Create a directory 'resources' and copy the excel file you created into it. The Excel file must be named 'demo.xlsx'.

### Run the script

To run the script, execute:

    node src/tdg.js

After doing this, you should find a new file called 'tdg/TC1/testcaseData.json'. This file was written by the default writer.

### Understand the generated data

The content of the file should look like this:

``` json
{
  "tableName": "Sheet1",      
  "name": "TC1",              
  "data": {                   
    "Sheet1": {               
      "ab0dc423-2338-44eb-a230-bbab1040c8ff": {
                              

        "email": "foo.bar@gum.com"
                              
      }
    }
  },
  "instanceId": "ab0dc423-2338-44eb-a230-bbab1040c8ff",
                              
  "callTree": {               
    "instanceId": "3dd74281-c117-4c51-b8f5-f1262116124a",
    "tableName": "Sheet1",
    "testcaseName": "TC1",
    "children": []
  }
}
```

  - The name of the table which creates this test case. (Later on we will learn the details of this.)

  - The name of the test case. This corresponds to the content of the header column in the sheet.

  - The data object containing all the generated data.

  - The name of the sheet again.

  - The instance of the created test case data. (An instanceId belongs to an instance of a given test case and is explained later in detail. For the moment just accept that the id exist and that it makes sense).

  - The generated data.

  - The main instanceId of this test case.

  - The call tree of the tables. (This is for debugging your test data. More on this later.)

Each time we call the script, we generate the same data since we added static data in the table. Only the instanceIds change with each script call. In the next section, we will replace the static data with a generator.

> **Note**
> 
> The example code is located at:  
> src/t2/step3  
> In there, simply run:  
> node tdg.js
