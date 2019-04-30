---
id: FilterProcessorInterface
title: Interface Filter
sidebar_label: Interface Filter
---

<a name="FilterProcessorInterface"></a>

## FilterProcessorInterface
A filter processor is used to filter Test cases in a decision table.
A filter is registered with its name at the processor. In the decision table
the filter name is referenced. Then the result is filtered with the given
filter processor

**Kind**: global class  

* [FilterProcessorInterface](#FilterProcessorInterface)
    * [.name](#FilterProcessorInterface+name)
    * [.name](#FilterProcessorInterface+name)
    * [.filter(tags, expression)](#FilterProcessorInterface+filter) ⇒ <code>boolean</code>

<a name="FilterProcessorInterface+name"></a>

### filterProcessorInterface.name
returns the name of this filter processor

**Kind**: instance property of [<code>FilterProcessorInterface</code>](#FilterProcessorInterface)  
<a name="FilterProcessorInterface+name"></a>

### filterProcessorInterface.name
set a new name to this processor

**Kind**: instance property of [<code>FilterProcessorInterface</code>](#FilterProcessorInterface)  
<a name="FilterProcessorInterface+filter"></a>

### filterProcessorInterface.filter(tags, expression) ⇒ <code>boolean</code>
This method filters the tags with the given expression

**Kind**: instance method of [<code>FilterProcessorInterface</code>](#FilterProcessorInterface)  
**Returns**: <code>boolean</code> - true  returns a true value if the filter processor could filter a result  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>array</code> | An array with all the tags on the test case |
| expression | <code>string</code> | An expression for this filter processor |

