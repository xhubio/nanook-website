---
id: sections
title: Decision table sections
sidebar_label: Section
---


## FieldSection

The field section is the main section of an equivalence class table. The field section contains
many field sub sections. It is a kind of parenthesis around fields and a grouping of element.

## FieldSubSection

This section contains all the equivalence classes for one single field.

## MultiRowSections

Multi row sections have multiple rows. One header row and 1..n data rows.

### MultiRowSection

The MultirowSections could be used for your own purpose. These sections are not directly supported by
the test data generator like the field sections. But each data generator has access to the data from the
multi row sections.

### TagSection

The tag section is used to add tags/labels to test cases. These tags could be used for filtering. If a test case
uses references, all tags are collected of the chained test cases and could be filtered.

### FilterSection

The filter section defines filter for test cases. The filter works only in the master test case. So if you have
test cases which uses references, the filter in a referenced test case is not executed.

### GeneratorSwitchSection

The generator switch section defines generators to be switched off. So you can switch of generators on a test case level.

## Single Row Sections

Single row sections are sections which have only one row.

### ExecuteSection

![execute section](/img/model-decision/execute_section.png)

The image shows the execute section. In this example the test case '2' in column
'G' is set to 'F' which is false. So this test case would not be executed.

### NeverExecuteSection

This section is the opposite of the ExecuteSection. If in the ExecuteSection a test case is set to a true value
this test case will be generated. If it is set to a false value the test case is not created. But if this test case
is referenced from an other table it is used and the data is generated. The NeverExecuteSection works the other way around.
If this is set to a true value for a test case, the test case is created. But if this test case is referenced from an
other test case, the referencing test case is not created.

### MultiplicitySection

![multiplicity section](/img/model-decision/multiplicity_section.png)

The image shows the multiplicity section. In this example the test case '1' in column
'f' is set to '10'. This means the data generator will create 10 of these test cases.

### SummarySection

![summary section](/img/model-decision/summary_section.png)

The summary section is not used by the generator. Is only for the user.
