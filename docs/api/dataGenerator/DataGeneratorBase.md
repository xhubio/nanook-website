---
id: DataGeneratorBase
title: Data Generator Base
sidebar_label: Data Generator Base
---

<a name="DataGeneratorBase"></a>

## DataGeneratorBase
The Base Generator implementation.
This class implements loading and saving of the generated data.
Also it handels the instance id. If a generator is called with the same
instance id it is expected that the generator returns the same data.

**Kind**: global class  

* [DataGeneratorBase](#DataGeneratorBase)
    * [.DataGeneratorBase](#DataGeneratorBase+DataGeneratorBase)
        * [new exports.DataGeneratorBase()](#new_DataGeneratorBase+DataGeneratorBase_new)
    * [.storeName](#DataGeneratorBase+storeName)
    * [.store](#DataGeneratorBase+store)
    * [.storeFileName](#DataGeneratorBase+storeFileName)
    * [.loadStore()](#DataGeneratorBase+loadStore)
    * [.saveStore()](#DataGeneratorBase+saveStore)
    * [.getStoreData()](#DataGeneratorBase+getStoreData) ⇒ <code>object</code>
    * [.generate(instanceId, testcase, todoGenerator)](#DataGeneratorBase+generate) ⇒ <code>object</code>
    * [.createPostProcessTodos(instanceId, testcase, todoGenerator)](#DataGeneratorBase+createPostProcessTodos) ⇒ <code>array</code>
    * [.postProcess(instanceId, testcase, todoGenerator)](#DataGeneratorBase+postProcess)
    * [._doGenerate()](#DataGeneratorBase+_doGenerate)

<a name="DataGeneratorBase+DataGeneratorBase"></a>

### dataGeneratorBase.DataGeneratorBase
**Kind**: instance class of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
<a name="new_DataGeneratorBase+DataGeneratorBase_new"></a>

#### new exports.DataGeneratorBase()
The service registry is used to make data generators available to other
generators. If a generator does not need access to other generators the
serviceRegistry my be left empty

<a name="DataGeneratorBase+storeName"></a>

### dataGeneratorBase.storeName
the file name used to store the data

**Kind**: instance property of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
<a name="DataGeneratorBase+store"></a>

### dataGeneratorBase.store
The data here will be save and loaded

**Kind**: instance property of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
<a name="DataGeneratorBase+storeFileName"></a>

### dataGeneratorBase.storeFileName
returns the name under which the data is stored

**Kind**: instance property of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
<a name="DataGeneratorBase+loadStore"></a>

### dataGeneratorBase.loadStore()
Loads the data from the file

**Kind**: instance method of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
<a name="DataGeneratorBase+saveStore"></a>

### dataGeneratorBase.saveStore()
Saves the data to the store

**Kind**: instance method of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
<a name="DataGeneratorBase+getStoreData"></a>

### dataGeneratorBase.getStoreData() ⇒ <code>object</code>
Gibt die Daten zurück wie sie in den Store geschrieben werden würden

**Kind**: instance method of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
**Returns**: <code>object</code> - storeData  Der Daten wie sie im Store geschrieben werden würden  
<a name="DataGeneratorBase+generate"></a>

### dataGeneratorBase.generate(instanceId, testcase, todoGenerator) ⇒ <code>object</code>
Generates the value and saves it for the given instance.

**Kind**: instance method of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
**Returns**: <code>object</code> - data  The genrated data. If the data could not be generated because of missing data
then the generator should return 'undefined'. So it could be called later. This may be the case if the generator
needs referenced data which is not generated yet.  

| Param | Type | Description |
| --- | --- | --- |
| instanceId | <code>string</code> | The testcase instance id. for the same instance id the same data object will be returned. If this is undefined then always a new value will be created. |
| testcase | <code>object</code> | The already generated testcase data object. |
| todoGenerator | <code>object</code> | The generator todo |

<a name="DataGeneratorBase+createPostProcessTodos"></a>

### dataGeneratorBase.createPostProcessTodos(instanceId, testcase, todoGenerator) ⇒ <code>array</code>
Creates the postProcessTodos. Each generator could creates todos which will be executed later on.
Sometimes a generator needs to wait for other generators created there data.
This function is called after the 'generate' function

**Kind**: instance method of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
**Returns**: <code>array</code> - todos  The generated postProcessTodos  

| Param | Type | Description |
| --- | --- | --- |
| instanceId | <code>string</code> | The testcase instance id. for the same instance id the same data object will be returned. If this is undefined then always a new value will be created. |
| testcase | <code>object</code> | The already generated testcase data object. |
| todoGenerator | <code>object</code> | The generator todo |

<a name="DataGeneratorBase+postProcess"></a>

### dataGeneratorBase.postProcess(instanceId, testcase, todoGenerator)
This method will be called after the generate method of all the generators are called.
The order is the same as before.
This method does not return any data. It could update the data directly if needed

**Kind**: instance method of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  

| Param | Type | Description |
| --- | --- | --- |
| instanceId | <code>string</code> | The testcase instance id. for the same instance id the same data object will be returned. If this is undefined then always a new value will be created. |
| testcase | <code>object</code> | The already generated testcase object. |
| todoGenerator | <code>object</code> | The todo action for the postprocessing |

<a name="DataGeneratorBase+_doGenerate"></a>

### dataGeneratorBase.\_doGenerate()
This method returns the generated data. It must not update the data in the testcase.

**Kind**: instance method of [<code>DataGeneratorBase</code>](#DataGeneratorBase)  
**See**: generate  
