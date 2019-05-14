---
id: GeneratorFaker
title: Generator Faker
sidebar_label: Generator Faker
---

<a name="GeneratorFaker"></a>

## GeneratorFaker
This is a Generator using Faker to create Data. The Faker function to be used is
given as a parameter.

**Kind**: global class  

* [GeneratorFaker](#GeneratorFaker)
    * [.logger](#GeneratorFaker+logger)
    * [.unique](#GeneratorFaker+unique)
    * [.generate(instanceId, testcase, todoGenerator)](#GeneratorFaker+generate) ⇒ <code>object</code>

<a name="GeneratorFaker+logger"></a>

### generatorFaker.logger
The logger used for logging

**Kind**: instance property of [<code>GeneratorFaker</code>](#GeneratorFaker)  
<a name="GeneratorFaker+unique"></a>

### generatorFaker.unique
Defines if the generated value must be unique. Default is 'false'

**Kind**: instance property of [<code>GeneratorFaker</code>](#GeneratorFaker)  
<a name="GeneratorFaker+generate"></a>

### generatorFaker.generate(instanceId, testcase, todoGenerator) ⇒ <code>object</code>
Generates the value and saves it for the given instance.

**Kind**: instance method of [<code>GeneratorFaker</code>](#GeneratorFaker)  
**Returns**: <code>object</code> - data  The genrated data. If the data could not be generated because of missing data
then the generator should return 'undefined'. So it could be called later. This may be the case if the generator
needs referenced data which is not generated yet.  

| Param | Type | Description |
| --- | --- | --- |
| instanceId | <code>string</code> | The testcase instance id. for the same instance id the same data object will be returned. If this is undefined then always a new value will be created. |
| testcase | <code>object</code> | The already generated testcase data object. |
| todoGenerator | <code>object</code> | The generator todo |

