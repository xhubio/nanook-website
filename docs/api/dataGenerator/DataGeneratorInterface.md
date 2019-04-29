---
id: DataGeneratorInterface
title: Data Generator Interface
sidebar_label: Data Generator Interface
---

<a name="DataGeneratorInterface"></a>

## DataGeneratorInterface
The interface definition for all the data generators.
The Processor uses the data generators to create the data.

**Kind**: global class  

* [DataGeneratorInterface](#DataGeneratorInterface)
    * [.DataGeneratorInterface](#DataGeneratorInterface+DataGeneratorInterface)
        * [new exports.DataGeneratorInterface(serviceRegistry, args)](#new_DataGeneratorInterface+DataGeneratorInterface_new)
    * [.logger](#DataGeneratorInterface+logger)
    * [.serviceRegistry](#DataGeneratorInterface+serviceRegistry)
    * [.unique](#DataGeneratorInterface+unique)
    * [.maxUniqueTries](#DataGeneratorInterface+maxUniqueTries)
    * [.uniqueSet](#DataGeneratorInterface+uniqueSet)
    * [.instanceData](#DataGeneratorInterface+instanceData)
    * [.varDir](#DataGeneratorInterface+varDir)
    * [.useStore](#DataGeneratorInterface+useStore)
    * [.name](#DataGeneratorInterface+name)
    * [.loadStore()](#DataGeneratorInterface+loadStore)
    * [.saveStore()](#DataGeneratorInterface+saveStore)
    * [.getGenerator(serviceName)](#DataGeneratorInterface+getGenerator) ⇒ <code>object</code>
    * [.clearContext()](#DataGeneratorInterface+clearContext)
    * [.generate(instanceId, testcase, todoGenerator)](#DataGeneratorInterface+generate) ⇒ <code>object</code>
    * [.createPostProcessTodos(instanceId, testcase, todoGenerator)](#DataGeneratorInterface+createPostProcessTodos) ⇒ <code>array</code>
    * [.postProcess(instanceId, testcase, todoGenerator)](#DataGeneratorInterface+postProcess)

<a name="DataGeneratorInterface+DataGeneratorInterface"></a>

### dataGeneratorInterface.DataGeneratorInterface
**Kind**: instance class of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="new_DataGeneratorInterface+DataGeneratorInterface_new"></a>

#### new exports.DataGeneratorInterface(serviceRegistry, args)
The service registry is used to make data generators available to other
generators. If a generator does not need access to other generators the
serviceRegistry my be left empty


| Param | Type | Description |
| --- | --- | --- |
| serviceRegistry | <code>object</code> | The service registry with all the registered generators. |
| args | <code>object</code> | Any arguments to configure this generator. |

<a name="DataGeneratorInterface+logger"></a>

### dataGeneratorInterface.logger
The logger used for logging

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+serviceRegistry"></a>

### dataGeneratorInterface.serviceRegistry
The registry where all the available generators are registered

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+unique"></a>

### dataGeneratorInterface.unique
If set to a true value the data generator should return unique values
What unique means depends on the generator. If the generator create more than one field
is up to the generator

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+maxUniqueTries"></a>

### dataGeneratorInterface.maxUniqueTries
Defines how many tries the generator will do for getting a unique value until it throws an error

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+uniqueSet"></a>

### dataGeneratorInterface.uniqueSet
Stores the data which needs to be unique

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+instanceData"></a>

### dataGeneratorInterface.instanceData
Stores the data per testcase instance id

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+varDir"></a>

### dataGeneratorInterface.varDir
The directory used to store the unique data

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+useStore"></a>

### dataGeneratorInterface.useStore
Should this generator use a store

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+name"></a>

### dataGeneratorInterface.name
Is set when this generator is registered in the service registry

**Kind**: instance property of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+loadStore"></a>

### dataGeneratorInterface.loadStore()
Loads the data from the file.

**Kind**: instance method of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+saveStore"></a>

### dataGeneratorInterface.saveStore()
Saves the data to the store

**Kind**: instance method of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+getGenerator"></a>

### dataGeneratorInterface.getGenerator(serviceName) ⇒ <code>object</code>
Returns the Datagenerator registered under the given name. If the generator is not found an error will be thrown

**Kind**: instance method of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
**Returns**: <code>object</code> - generator  The generator  

| Param | Type | Description |
| --- | --- | --- |
| serviceName | <code>string</code> | The name of the registered data generator |

<a name="DataGeneratorInterface+clearContext"></a>

### dataGeneratorInterface.clearContext()
Resets the context. The context stores the already generated data and is used
also to check if data is unique.

**Kind**: instance method of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
<a name="DataGeneratorInterface+generate"></a>

### dataGeneratorInterface.generate(instanceId, testcase, todoGenerator) ⇒ <code>object</code>
Generates the value and saves it for the given instance.

**Kind**: instance method of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
**Returns**: <code>object</code> - data  The genrated data. If the data could not be generated because of missing data
then the generator should return 'undefined'. So it could be called later. This may be the case if the generator
needs referenced data which is not generated yet.  

| Param | Type | Description |
| --- | --- | --- |
| instanceId | <code>string</code> | The testcase instance id. for the same instance id the same data object will be returned. If this is undefined then always a new value will be created. |
| testcase | <code>object</code> | The already generated testcase data object. |
| todoGenerator | <code>object</code> | The generator todo |

<a name="DataGeneratorInterface+createPostProcessTodos"></a>

### dataGeneratorInterface.createPostProcessTodos(instanceId, testcase, todoGenerator) ⇒ <code>array</code>
Creates the postProcessTodos. Each generator could creates todos which will be executed later on.
Sometimes a generator needs to wait for other generators created there data.
This function is called after the 'generate' function

**Kind**: instance method of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  
**Returns**: <code>array</code> - todos  The generated postProcessTodos  

| Param | Type | Description |
| --- | --- | --- |
| instanceId | <code>string</code> | The testcase instance id. for the same instance id the same data object will be returned. If this is undefined then always a new value will be created. |
| testcase | <code>object</code> | The already generated testcase data object. |
| todoGenerator | <code>object</code> | The generator todo |

<a name="DataGeneratorInterface+postProcess"></a>

### dataGeneratorInterface.postProcess(instanceId, testcase, todoGenerator)
This method will be called after the generate method of all the generators are called.
The order is the same as before.
This method does not return any data. It could update the data directly if needed

**Kind**: instance method of [<code>DataGeneratorInterface</code>](#DataGeneratorInterface)  

| Param | Type | Description |
| --- | --- | --- |
| instanceId | <code>string</code> | The testcase instance id. for the same instance id the same data object will be returned. If this is undefined then always a new value will be created. |
| testcase | <code>object</code> | The already generated testcase object. |
| todoGenerator | <code>object</code> | The todo action for the postprocessing |

