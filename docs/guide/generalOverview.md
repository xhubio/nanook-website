---
id: generalOverview
title: Overview of Nanook Table
sidebar_label: Nanook Table Overview
---


![nanookTableDataCreation](/img/nanookTableDataCreation.svg)

What is Nanook Table?

It's a processor that reads spreadsheets to define test cases
and test data. It processes the spreadsheets and generates test cases and test data.
This way you can recreate the test cases and test data while you're working on the specification of test cases in the spreadsheet files.

The spreadsheets enable to keep track of the test cases and the
test coverage. But it complicated when you need to modify the tests and update all the test data of you test cases. This is where Nanook Table comes in.

Overview of Nanook Table Components

![nanookTableOverview](/img/nanookTableOverview.svg)

## File Reader

A file reader takes care of reading spreadsheet files and providing
a generic interface for a parser. There is a file reader for Microsoft Excel files and another one for OpenOffice
documents.

## Importer Map

The file readers are registered in a map by the file extension they
handle. For example:  
The Excel file reader is registered with the extensions 'xls' and 'xlsx'.
So the same reader may be registered multiple times.

## Table Parser

The table parser is responsible for reading a table format. There is a parser to read the equivalence class table and another one to read the matrix table format.

## Parser Map

Each parser is registered in a map by the table it understands. For example the equivalence class table reader is registered with the key '\<DECISION\_TABLE\>'.
This key must be in the first cell of the table. The same parser may be registered under different keys.

## File Processor

The file processor takes a file name as input. Then it extracts the extension and checks if an
importer is registered for this extension. If that's the case, the file is read. One file (a workbook) may
contain multiple tables. The file processor reads the first cell of each table and checks if a
parser is registered for this table type. Tables for which no parser is registered are ignored.

If a parser is registered for this kind of table, the file processor gives over the table to
the parser. The result of parsing is a table model.

All the table models are stored in an array.

## Generator

A generator is responsible for generating data. The generator returns a value or may directly
change or insert data to the given 'testcaseData' object.

## Service Registry

All the generators are registered in a 'ServiceRegistry'. The name under which the generator is registered is the same name that is used in the table to call the generator. Also, each generator has access to the service
registry and can call other generators this way.

## Writer

A writer is responsible for creating the output data in the format needed for the test. All the generated data is stored internally in a JSON structure. This object may be exported to multiplie files of varying format and content. This is the domain of the writer.

## Writer Array

All the writers are stored in an array. For each test case all the writers are called in the order in which they are stored in the array.

## Filter

A filter can be applied to created test cases. If you tag your tests with a priority, for example, you can later on filter for priorities.

## Filter Map

All the filter are stored in a map by the filter name.

## Processor

The processor keeps it all together. It gets the tables from the 'File Processor' and then it executes all the tables
with the help of the generators and writers.
