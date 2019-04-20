---
id: transform2dataGenerator
title: Transform the table to a data generator
sidebar_label: Transform to data generator
---


In the first tutorial we have created a normal equivalence class table. It shows us
that we need to create 39 test cases. But we still need to create the data manually.
It does not create the data for us.

So let us transform this table into a data generation table. To do this create a new column between 'Equivalence class' and 'Description'.
The column header is 'generator'. In this column we add the commands to call generators which will create
the data for us.

# Format the table

In the previous tutorial we have created an equivalence class table without any
predefined format rules. But to make the table parsable for the table
processor we need to follow some formatting rules.

The next sections describe the format of the table to make it parseable.

## General Overview

# Layout Equivalence Class Table

![Example table](/img/model-decision/table.jpg)

This image shows an example of an equivalence class table.
The column order is important. The first five columns are fix. In the
6th column the test cases starts. The parser finds the end of the test case
by parsing the first row and searching for the first empty cell. So if you
add an empty column in your table the parser will stop there.

The table is divided into a few sections.

![Test case side](/img/model-decision/table_testcases.jpg)

The right side shows the test cases. Each column on the right side is one
test case. The column header of a test case is the name of this test case.
In this example the names are just numbers. Column ''F'' is the first test case with the
name ''1''.

The left side of the table describes the fields and the expected result.

On the left side the ''field section'' is the primary data section. The primary data is the data
which is directly manipulated in the test. But this is just a name. You can have as many
'FieldSection' elements as you like. A field section consists of one to many 'FieldSubSection' elements.

The field section describes the variety of data needed by the test. And therefore the amount of tests
to be created.

![Field sub section](/img/model-decision/table_field_sub_section.jpg)

A sub section in this case is one field and all the equivalence classes for this field.
An equivalence class defines the different kinds of field values with an equivalent behaviour.

For example there is a field with a maximum length of 10 characters. Then all values entered with more then
10 chars will lead to an equivalent behaviour of the application. So it is not necessary
to test with 11, 12, 13, …​ characters. The equivalence class is 'more than 10 chars'.

One fieldSection may have many fieldSubSections. The FieldSection groups fields together. If you have one or many
fieldSections has no impact on the table itself. All the fieldSubSections have to be combined.

![Multi row section](/img/model-decision/table_multi_row_section.jpg)

The multi row sections can be used to describe the expected results or error messages. It is free to the user
how many of these sections are in the table. It can also contain actions on the UI or other information needed.

# Create the first table for data generation

In this step we create a simple table with static data generation.

## Create table

As the current implementation reads Excel Spreadsheets create a new Excel file.

  - Set the sheet identifier  
    The parser only considers sheets which have the right identifier set in the first cell.
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
    Add a new row with the following columns

| Column | Data         | Description                    |
| ------ | ------------ | ------------------------------ |
| A      | Primary Data | A name for this 'FieldSection' |
| B      | FieldSection | The 'FieldSection' Identifier. |

  - Create a 'FieldSubSection'  
    For this example we take an email field.
    Add a new row with the following columns

| Column | Data            | Description                       |
| ------ | --------------- | --------------------------------- |
| A      | email           | The name of the data field        |
| B      | FieldSubSection | The 'FieldSubSection' Identifier. |

  - Create the equivalence class for the email field  
    In this example we just create one class.
    Add a new row with the following columns

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

  - Mark the end row of the table  
    To tell the processor that the table ends an identifier needs to be set.
    Add a new row with the following columns

| Column | Data    | Description                                                                    |
| ------ | ------- | ------------------------------------------------------------------------------ |
| A      | \<END\> | This identifier marks the last row of the table. All content below is ignored. |

  - Last but not least, add some colour to the table.

![step2](/img/tutorials/t2/step2.png)

# Create a project for creating the data

## Create an initial npm module

Create a new empty directory. Change into it and do npm init.

``` c
mkdir demo-tdg
cd demo-tdg
mkdir resources
mkdir tdg
mkdir src
npm init
npm install --save @xhubiotable/processor
```

## Create the script to call the processor

Create a new file 'src/tdg.js' with the following content.

``` js
const path = require('path')
const p = require('@xhubiotable/processor')
const { LoggerMemory } = require('@xhubiotable/logger')

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

  - Create a logger. For all tutorials we will take the Memory Logger. This
    logger stores all the log entries. It is a good logger for unit testing.

  - Tells the memory logger that it should also write the logs to console out.

  - Creates a file processor. The file processor is responsible for loading an Excel sheet and transforming
    it into a table object as it is used by the processor.

  - Creates the processor.  
    The processor needs a registry where all the available generators are registered. In
    the current example the registry is empty. But a registry is required.  
    The writer is responsible to write the created test data into the desired format. The default writer
    just writes the test case data as a JSON file. You can add as many writers as you like.

  - Loads the spread sheet and creates the table object. You an call the load function
    multiple times depending on how many spreadsheets you would like to load.
    Each spread sheet may have multiple tables. The table names must be unique across all the
    spread sheets.
    The path must point to the file you have created in the previous step.

  - Get the loaded table objects and insert them into the processor.

  - Processes all tables and generates the data.

Create a directory 'resources' and copy the excel file you have created before into it.
The Excel file must be named 'demo.xlsx'.

## Run the script

To run the script execute:

    node src/tdg.js

After this you should find a new file called 'tdg/TC1/testcaseData.json'. This file was written by the default writer.

## Understand the generated data

The content of the file should look like the following:

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

  - The name of the table which creates this test case. (Later on we learn the details on this.)

  - The name of the test case. The content of the header column in the sheet.

  - The data object contains all the generated data.

  - The name of the sheet again.

  - The instance of the created test case data. (An instanceId belongs to an instance of a given test case and is
    explained later in detail. For the moment just accept that the id exist and that it makes sense).

  - The generated data.

  - The main instanceId of this test case.

  - The call tree of the tables. (This is for debugging your test data. More on this later.)

Each time you call the script we generate the same data as we added static data in the table. Only the instanceIds
are changing with each call of the script. In the next section we replace the static data with a generator.

> **Note**
> 
> The example code is located at:  
> src/t2/step3  
> Just type there:  
> node tdg.js

# Create your own generator

First of all we need to update the Excel sheet to use the
new generator.

![step4](/img/tutorials/t2/step4.png)

As you can see in the image we added two new 'FieldSubSection'. Also three more
test cases are added just to make it more interesting.

Also we removed the static email and replaced it with a generator call.
We used the same generator three times with different parameter.

Let’s create a generator which creates a person data record.
The data to be generated is:  

  - firstName

  - lastName

  - email

We would like to have an email generated out of the first name and the last name
of the person. And the generated emails must be unique.

Create a new file called /src/GeneratorPerson.js. The generator
extends the 'DataGeneratorBase' class.

``` js
const DataGeneratorBase = require('@xhubiotable/data-generator').DataGeneratorBase

class GeneratorPerson extends DataGeneratorBase {

}
```

Then add a method to create the data we need. The generator should create a
person object with a unique email address.

``` js
async _doGenerate(instanceId, testcase, todoGenerator) {
  const firstName = FIRST_NAMES[Math.floor(Math.random() * FIRST_NAMES.length)];
                               

  const lastName = LAST_NAMES[Math.floor(Math.random() * LAST_NAMES.length)];
                               

  const domain = FREE_MAILER[Math.floor(Math.random() * FREE_MAILER.length)];
                               

  const email = this.makeUnique(firstName, lastName, domain)
                               

  return {                     
    firstName,
    lastName,
    email
  }
}

// ensure that the email is unique
makeUnique(firstName, lastName, domain) {
  let email = `${firstName}.${lastName}@${domain}`
  let counter = 1
  while (this.uniqueSet.has(email)) {
                              
    email = `${firstName}.${lastName}-${counter}@${domain}`
    counter++
  }
  return email
}
```

  - The first name is chosen out of an array with first names

  - The last name is chosen out of an array with last names

  - Choose a random domain

  - Depending on the size of the name and domain arrays the chance to create
    duplicate email addresses is high. So we need a way to make the email unique
    but the names should still be included.

  - Return the person object.

  - The 'DataGenerator' has an internal SET which is used to store the values which need to be unique.
    The Generator now returns a person object, but in our table we would like to have
    an 'email' or a 'firstName' not an object.

Create another function to return strings in for the given parameter.

``` js
async generate(instanceId, testcase, todoGenerator) {
  const param = todoGenerator.config      

  if (instanceId && this.instanceData.has(instanceId)) {
                                          
    const valObj = this.instanceData.get(instanceId)
    return valObj[param]
  }

  const genData = await this._doGenerate( 
    instanceId,
    testcase,
    todoGenerator
  )
  if (genData !== undefined && instanceId) {
                                          
    this.instanceData.set(instanceId, genData)
  }
  return genData[param]                   
}
```

  - Get the parameter from the excel sheet. The parameter tells the generator
    for which field the data should be created.

  - Here we see the instanceId in action. Each time the generator is called
    with the same instanceId it will return the same data. In our case we call the same
    generator three times with a different parameter. The generator should return fields from the
    same object.

  - If there is no data for the instanceId it will create a new one.

  - Store the newly generated data under the current instanceId.

  - Return the new data.

Now let’s have a look at the generated result.
In the 'tdg' sub folder are four sub directories 'TC1' to 'TC4'.
For each test case one folder was created.

![step4.1](/img/tutorials/t2/step4.1.png)

Open one of the generated JSON files in one of the folders.
The result should look like this.

``` json
{
  "tableName": "Sheet1",
  "name": "TC1",
  "data": {
    "Sheet1": {
      "a9dad54a-c12e-46d8-914e-926b32e82424": {
        "first name": "Anastasia",     
        "last name": "Lukoschek",      
        "email": "Anastasia.Lukoschek@hotmail.com"
                                       
      }
    }
  },
  "instanceId": "a9dad54a-c12e-46d8-914e-926b32e82424",
  "callTree": {
    "instanceId": "364c485f-d863-490c-8600-b419f4504ad1",
    "tableName": "Sheet1",
    "testcaseName": "TC1",
    "children": []
  }
}
```

  - The generated first name

  - The generated last name

  - The email build out of the first name and the last name

Now each time the processor is called it will create new data for the four test cases and the data will always change.
Also the email will always be unique.

> **Note**
> 
> The example code is located at:  
> src/t2/step4  
> Just type there:  
> node tdg.js
