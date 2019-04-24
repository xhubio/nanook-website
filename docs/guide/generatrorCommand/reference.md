---
id: reference
title: References
sidebar_label: References
---


A references points to an other test case in the same table or a different one. Each time a reference is solved
a new instance of the referenced test case is created.
Also a reference can point to a range of test cases. Then for each particular test case in the range also the calling
test case will be doubled.

## Syntax of a Reference

The following two pictures showing the syntax of a reference.

![referencesSyntax](/img/processor/referencesSyntax.svg)

![referencesRangeSyntax](/img/processor/referencesRangeSyntax.svg)

A range is enclosed in '\[\]' brackets. In the example above the reference
points to the test cases 'tc2', 'tc3' and 'tc4'.

## Self Reference

A self reference references an other field in the same test case. A good example
for this is for the second password in a registration dialog.
There the second password must be the same as the first one.

**Field password2.**

    ref::Person:password:

> **Note**
> 
> For a self reference the test case name and the instanceIdSuffix must be undefined.

**without table name.**

    ref:::password:

Also the table name could be omitted.

## Range Reference

A normal reference does not influence the calling test case. For a range reference the behaviour
is different. To solve a range the processor must create an instance of the calling test case for
each test case in the range.

The following picture shows this.

![rangeReferenceSolved](/img/processor/rangeReferenceSolved.svg)

The test case 'T1 in the table 'Person' has three references.

  - Reference 1  
    This reference points to the field 'email' of test case 'T2' in the table 'Person' (the same table). The instanceId
    is set to '1'

  - Reference 2  
    This reference points to the same location as 'Reference 1' but to a different field. The field here is 'name'.
    As the instanceId is in both cases '1' no new instance of the target is created for the second reference.
    So both references point to the same instance of test case data.

  - Reference 3  
    This reference points to the table 'Range2'. As a target test case a range is given 'T3-4'. This means
    the test cases 'T3' and test case 'T4'. To solve this two instances of test case 'Person:T1' are needed. In the
    pictures these are name a' and a''. For a range reference the instanceId must be empty.

## Default values in Reference

  - Table name  
    If the table name is not given the processor expects the current table.

  - InstanceId  
    If no instanceId is given each reference creates a new instance of the target test case.

  - FieldName  
    If no field name is given, no data is included.

  - Test case name  
    This is mandatory.
