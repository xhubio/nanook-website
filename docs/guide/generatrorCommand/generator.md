---
id: generator
title: Generator Commands
sidebar_label: Generator
---


The 'generator' section is where the user defines how to generate the data for a field.

![example from a decision table](/img/processor/generator.png)

## Generator command

The generator is used to generate new data.

    gen:<instanceId>:<generatorName>:<any Parameter>

  - instanceId  
    The instance id is an internal id for creating a a instance of a given test case. If no Id is given, a uuid will be taken by the generator. The instance id allows the user to get the same data set from a generator on different fields.  
    For example: Let's say we have a generator that creates personal data. It will generate a 'firstName', 'lastName' and an email address. But the data is needed in three different fields in the table. Each time the generator is called, it normally creates a new set of data. But this is not what is needed in this case.  
    Let's assume the data generator is named ''AdressDataGenerator'' and it has a parameter for the data to be returned.

<!-- end list -->

``` 
gen:1:AdressDataGenerator:firstName  

gen:1:AdressDataGenerator:lastName   

gen:1:AdressDataGenerator:email      
```

  - The first call of the generator. This will create a new set of data. The data
    will be stored under the instanceId ''1'' And the data for the field ''firstName'' will be returned.

  - The second call of the generator. The generator will find data for the instance id ''1''
    and will not generate new data. Then, it will return the data for ''lastName''

  - The same as for 2.

The instanceId allows the user to call the same generator multiple times but also to access to
the same data if needed.
