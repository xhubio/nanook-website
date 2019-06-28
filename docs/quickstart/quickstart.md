---
id: quickstart
title: Quickstart
sidebar_label: Quickstart
---


This is a tutorial on Nanook – test case generator. It will take you through a
basic overview and examples including simple test data generator setup.
You’ll find detailed description of the tool in our full tutorial and user
manual.

# The equivalence class table

Test cases are defined in an ECT - Equivalence Class Table, which refers to
the concept of classes with equivalent behavior within a single application.
For example, the "Not Empty Field" class behavior is the same regardless of type and
amount of characters provided.
The ECT can be created with LibreOffice, Microsoft Office, or Google Spreadsheet.

In this Quickstart we’ll look at the example of a simple log-in dialogue. The
ECT representing a login dialogue is shown below.

![equivalence class table quickstart](/img/quickstart/equivalence-class-table-quickstart.png)

In the log-in dialogue the user provides username and a password and each may
take three groups of possible values corresponding to the following ECT classes:

For the user-id field the classes are:

  - empty

  - userId not existent

  - valid user id

Classes related to the password field:

  - empty

  - wrong

  - valid password

These classes will result in a maximum of 3\*3=9 test cases. In this example we would like to generate test data for all
of these test cases.

The test case definitions can be found in columns "F" to "J". If we take a closer look at test case 1 (column F) we see that equivalence
class "empty" of field "userId" is marked with an "x". "x" means to choose exactly this equivalence class of this field.
The three equivalence classes of the password field are marked with an "e". "e" means to choose any of the equivalence
classes of this field randomly. In the summary section you see the expected result of this test case. The test case should make
sure that no matter what you enter into the password field, the error "The userId must not be empty" appears, as long
as the userId is empty.

Columns G to J define the other test cases we would like to cover.

# Generating test data

Finally we generate the test data on basis of the just created table.
First, the "quickstart-source" repository has to be cloned using the command

``` 
 git clone https://github.com/xhubioTable/quickstart-source.git
```

then data generation is started by calling

    yarn install

This will install the required dependencies to run data geneartion. For more information on yarn check: <https://yarnpkg.com/en/>

    node src/quickstart.js

from the root folder of the project. For more information on node.js check <https://nodejs.org/en/>

In our example the test data will be generated in form of five JSON files (one for each testcase) that can be found in the folder "tdg".
Test data generation is based on the "Generator Function" column of our ECT. It is possible to define static
data as done for the class "valid user id" or dynamic data using a generator function like shown for the "userId not
existent" class. The corresponding data generator for email generation is present in the "src"-folder (GeneratorPerson.js)
and used in the quickstart.js file.
