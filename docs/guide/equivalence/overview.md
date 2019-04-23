---
id: overview
title: Decision table overview
sidebar_label: Overview
---


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
