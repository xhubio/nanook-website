---
id: SimpleArrayIgnoreFilterProcessor
title: Simple Array Ignore Filter
sidebar_label: Simple Array Ignore Filter
---

<a name="SimpleArrayIgnoreFilterProcessor"></a>

## SimpleArrayIgnoreFilterProcessor
A filter processor is used to filter Test cases in a decision table.
A filter is registered with its name at the processor. In the decision table
the filter name is referenced. Then the result is filtered with the given
filter processor.

This filter checks that an expression does NOT exists.

**Kind**: global class  

* [SimpleArrayIgnoreFilterProcessor](#SimpleArrayIgnoreFilterProcessor)
    * [new SimpleArrayIgnoreFilterProcessor(name, delimiter)](#new_SimpleArrayIgnoreFilterProcessor_new)
    * [.filter(tags, expression)](#SimpleArrayIgnoreFilterProcessor+filter) ⇒ <code>boolean</code>

<a name="new_SimpleArrayIgnoreFilterProcessor_new"></a>

### new SimpleArrayIgnoreFilterProcessor(name, delimiter)

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | A name for this Filter |
| delimiter | <code>string</code> | A delimiter used to split the expression |

<a name="SimpleArrayIgnoreFilterProcessor+filter"></a>

### simpleArrayIgnoreFilterProcessor.filter(tags, expression) ⇒ <code>boolean</code>
This method filters the tags with the given expression

**Kind**: instance method of [<code>SimpleArrayIgnoreFilterProcessor</code>](#SimpleArrayIgnoreFilterProcessor)  
**Returns**: <code>boolean</code> - true  returns a true value if the filter processor could filter a result  

| Param | Type | Description |
| --- | --- | --- |
| tags | <code>array</code> | An array with all the tags on the test case |
| expression | <code>string</code> | An expression for this filter processor |

