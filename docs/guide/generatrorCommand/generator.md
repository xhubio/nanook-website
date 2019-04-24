---
id: generator
title: Generator commands
sidebar_label: Generator
---


In the generator section the user defines how to generate the data for a field.

![example from a decision table](/img/processor/generator.png)

## Generator command

The generator is used to generate new data.

    gen:<instanceId>:<generatorName>:<any Parameter>

  - instanceId  
    The instance id is an internal id for creating a an instance of a given test case. If no Id is given
    a uuid will be taken by the generator. The instance id allows the user to get the same data set from
    a generator on different fields.  
    For Example there is a generator which creates personal data.
    It will generate a 'firstName', 'lastName' and a email. But the data is needed in three different fields of the table.
    Each time the generator is called it normally creates a new set of data. But this is not what is needed in this case.  
    Assume the data generator is named ''AdressDataGenerator'' and it has a parameter to tell which data to be returned.

<!-- end list -->

``` 
gen:1:AdressDataGenerator:firstName  

gen:1:AdressDataGenerator:lastName   

gen:1:AdressDataGenerator:email      
```

  - The first call of the generator. It will create a new set of data. The data
    will be stores under the instanceId ''1'' And the data for the field ''firstName'' is
    returned.

  - The second call of the generator. The generator find data for the instance id ''1''
    and will not generator new data. Then it will return the data for ''lastName''

  - The same as for 2.

The instanceId allows the user to call the same generator many times but got access to
the same data if needed.
