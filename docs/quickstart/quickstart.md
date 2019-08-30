---
id: quickstart
title: The 5 minute Quickstart
sidebar_label: The 5 minute Quickstart
---

This is a tutorial on Nanook – test case generator. It will take you through a
basic overview and examples including simple test data generator setup.
You’ll find detailed description of the tool in our full tutorial and user
manual.

## Equivalence Class Table

Test cases are defined in an ECT - Equivalence Class Table, which refers to
the concept of classes with equivalent behavior within a single application.
For example, the "Not Empty Field" class behavior is the same regardless of type and
number of characters provided.
The ECT can be created with LibreOffice, Microsoft Office, or Google Spreadsheet.

In this Quickstart we’ll look at the example of a simple log-in dialogue. The
ECT representing a login dialogue is shown below.

![equivalence class table quickstart](/img/quickstart/equivalence-class-table-quickstart.png)

In the log-in dialogue the user provides username and password and each may
have three groups of possible values corresponding to the following ECT classes:

For the user-id field the classes are:

  - empty

  - userId not existent

  - valid user id

Classes related to the password field:

  - empty

  - wrong

  - valid password

These classes will result in a maximum of 3\*3=9 test cases. In this example we would like to generate test data for all of these test cases.

The test case definitions are provided in columns "F" to "J" in the above spreadsheet. If we take a closer look at test case 1 (column F), we see that the equivalence
class "empty" for "userId" is marked with an "x". An "x" means: "choose exactly this equivalence class for this field".
The three equivalence classes for the password field are marked with an "e". "e" means: "randomly choose any of the equivalence
classes for this field". In the summary section, you can see the expected result for this test case. The test case should make
sure that no matter what you enter into the password field, the error "The userId must not be empty" appears, as long
as the userId is empty.

Columns G to J define the other test cases we would like to cover.

## Generating test data

Finally, let's generate the test data on the basis of table we just created.
First, the "quickstart-source" repository has to be cloned using the command

``` 
 git clone https://github.com/xhubioTable/quickstart-source.git
```

Then we initiate data generation calling

    yarn install

This will install the required dependencies to run data geneartion. For more information on yarn, please check: <https://yarnpkg.com/en/>

    node src/quickstart.js

And starting our quickstart application in the root folder of the project. For more information on node.js, please check <https://nodejs.org/en/>

In our example the test data will be generated in the form of five JSON files (one for each test case) that can be found in the folder "tdg" (for Test Data Generation),
which is based on the "Generator Function" column of our ECT. It is possible to define static
data as done for the class "valid user id" or dynamic data using a generator function as  shown for the "userId not
existent" class. The corresponding data generator for email generation is present in the "src"-folder (GeneratorPerson.js)
and used in the quickstart.js file.
