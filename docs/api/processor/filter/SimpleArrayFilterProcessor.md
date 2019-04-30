---
id: SimpleArrayFilterProcessor
title: Simple Array Filter
sidebar_label: Simple Array Filter
---

<a name="SimpleArrayFilterProcessor"></a>

## SimpleArrayFilterProcessor
A filter processor is used to filter Test cases in a decision table.
A filter is registered with its name at the processor. In the decision table
the filter name is referenced. Then the result is filtered with the given
filter processor

**Kind**: global class  

* [SimpleArrayFilterProcessor](#SimpleArrayFilterProcessor)
    * [new SimpleArrayFilterProcessor(name, delimiter)](#new_SimpleArrayFilterProcessor_new)
    * [.filter(tags, expression)](#SimpleArrayFilterProcessor+filter) ⇒ <code>boolean</code>

<a name="new_SimpleArrayFilterProcessor_new"></a>

### new SimpleArrayFilterProcessor(name, delimiter)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | A name for this Filter |
| delimiter | <code>string</code> | A delimiter used to split the expression |

<a name="SimpleArrayFilterProcessor+filter"></a>

### simpleArrayFilterProcessor.filter(tags, expression) ⇒ <code>boolean</code>
This method filters the tags with the given expression

**Kind**: instance method of [<code>SimpleArrayFilterProcessor</code>](#SimpleArrayFilterProcessor)  
**Returns**: <code>boolean</code> - true  returns a true value if the filter processor could filter a result  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>array</code> | An array with all the tags on the test case |
| expression | <code>string</code> | An expression for this filter processor |

