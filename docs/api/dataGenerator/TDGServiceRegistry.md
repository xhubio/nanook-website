---
id: TDGServiceRegistry
title: Service Registry
sidebar_label: Service Registry
---

<a name="TDGServiceRegistry"></a>

## TDGServiceRegistry
The service registry stores all the generators by its name. So each generator could ask the service
for an other generator by its service name. So it is possible to compose a generator out of other
generators.
The registry is also used by the processor to access the generators.

**Kind**: global class  

* [TDGServiceRegistry](#TDGServiceRegistry)
    * [.services](#TDGServiceRegistry+services)
    * [.saveStore()](#TDGServiceRegistry+saveStore)
    * [.loadStore()](#TDGServiceRegistry+loadStore)
    * [.getGenerator(serviceName)](#TDGServiceRegistry+getGenerator)

<a name="TDGServiceRegistry+services"></a>

### tdgServiceRegistry.services
The map to store the registered generators

**Kind**: instance property of [<code>TDGServiceRegistry</code>](#TDGServiceRegistry)  
<a name="TDGServiceRegistry+saveStore"></a>

### tdgServiceRegistry.saveStore()
Calls the 'saveStore()' function of each registered Generator

**Kind**: instance method of [<code>TDGServiceRegistry</code>](#TDGServiceRegistry)  
<a name="TDGServiceRegistry+loadStore"></a>

### tdgServiceRegistry.loadStore()
Calls the 'loadStore()' function of each registered Generator

**Kind**: instance method of [<code>TDGServiceRegistry</code>](#TDGServiceRegistry)  
<a name="TDGServiceRegistry+getGenerator"></a>

### tdgServiceRegistry.getGenerator(serviceName)
returns the generator with the given service namne.
If the generator could not be found an error is thrown.

**Kind**: instance method of [<code>TDGServiceRegistry</code>](#TDGServiceRegistry)  

| Param | Type | Description |
| --- | --- | --- |
| serviceName | <code>string</code> | The name under the generator is registered |

