---
id: reference
title: References
sidebar_label: References
---


A references points to another test case in the same table or a different one. Each time a reference is solved, a new instance of the referenced test case is created. Also a reference can point to a range of test cases. In that case, the calling test case will be doubled for each particular test case within the range.

## Syntax of a Reference

Here are two examples of syntax for a reference.

![referencesSyntax](/img/processor/referencesSyntax.svg)

![referencesRangeSyntax](/img/processor/referencesRangeSyntax.svg)

The range is enclosed in '\[\]' brackets. In the example above, the reference
points to test cases 'tc2', 'tc3' and 'tc4'.

## Self-Reference

A self-reference references another field in the same test case. A good example for this is for the second password entry in a registration dialog, where the second password entered must be the same as the first one.

**Field password2.**

    ref::Person:password:

> **Note**
> 
> For a self-reference, the test case name and the instanceIdSuffix must be undefined.

**without table name.**

    ref:::password:

Also, the table name could be omitted.

## Range Reference

A normal reference does not influence the calling test case. For a range reference, the behaviour
is different. To solve a range the processor must create an instance of the calling test case for
each test case in the range.

The following illustrates this:

![rangeReferenceSolved](/img/processor/rangeReferenceSolved.svg)

The test case 'T1 in the table 'Person' has three references.

  - Reference 1  
    This reference points to the field 'email' of test case 'T2' in the table 'Person' (the same table). The instanceId is set to '1'

  - Reference 2  
    This reference points to the same location as 'Reference 1', but to a different field. The field here is 'name'. As the instanceId is in both cases '1' no new instance of the target is created for the second reference. So both references point to the same instance of test case data.

  - Reference 3  
    This reference points to the table 'Range2'. As a target test case, a range of 'T3-4' is given, test case 'T3' and test case 'T4'. To solve this two instances of test case 'Person:T1' are needed. In the figure, these are name a' and a''. For a range reference the instanceId must be empty.

## Reference Default Values 

  - Table name  
    If the table name is not given, the processor expects the current table.

  - InstanceId  
    If no instanceId is given, each reference creates a new instance of the target test case.

  - FieldName  
    If no field name is given, no data is included.

  - Test case name  
    This is mandatory.
