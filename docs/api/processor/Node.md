---
id: Node
title: Node
sidebar_label: Node
---

<a name="Node"></a>

## Node
When traversing the tables we first build a graph
representing the data generation order.
The graph is build out of this nodes

**Kind**: global class  

* [Node](#Node)
    * [.todosGenerator](#Node+todosGenerator) ⇒ <code>array</code>
    * [._buildTodos()](#Node+_buildTodos)
    * [.createReferenceInstanceId(referenceCmd)](#Node+createReferenceInstanceId) ⇒ <code>string</code>
    * [.isSelfReference(referenceCmd)](#Node+isSelfReference) ⇒ <code>boolean</code>
    * [.clone()](#Node+clone)
    * [.getCloneFor(nodeToClone)](#Node+getCloneFor) ⇒ <code>object</code>

<a name="Node+todosGenerator"></a>

### node.todosGenerator ⇒ <code>array</code>
returns an array with all the todos.
It will crawl all the referenced nodes and adds
the todos of them

**Kind**: instance property of [<code>Node</code>](#Node)  
**Returns**: <code>array</code> - todos  An array of todos  
<a name="Node+_buildTodos"></a>

### node.\_buildTodos()
Build a local variable with all the todos

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+createReferenceInstanceId"></a>

### node.createReferenceInstanceId(referenceCmd) ⇒ <code>string</code>
Creates the instanceId for a reference.
The instanceId is unique for each target object.
If two reference points to the same intance of a target
the same instanceId is used.
If no suffix is given

**Kind**: instance method of [<code>Node</code>](#Node)  
**Returns**: <code>string</code> - instanceId  The reference instance id  

| Param | Type | Description |
| --- | --- | --- |
| referenceCmd | <code>object</code> | The reference command |

<a name="Node+isSelfReference"></a>

### node.isSelfReference(referenceCmd) ⇒ <code>boolean</code>
Checks if the given reference is a self reference.

Rules:
No instanceIdSuffix
The test case name is same as node test case name
The TableName is same as node table name

**Kind**: instance method of [<code>Node</code>](#Node)  
**Returns**: <code>boolean</code> - status  True, if the reference is a self reference  

| Param | Type | Description |
| --- | --- | --- |
| referenceCmd | <code>object</code> | The reference command |

<a name="Node+clone"></a>

### node.clone()
Clones the node

**Kind**: instance method of [<code>Node</code>](#Node)  
<a name="Node+getCloneFor"></a>

### node.getCloneFor(nodeToClone) ⇒ <code>object</code>
Clones a node for this parent. If this node where already cloned,
the previous clone will be returned.

**Kind**: instance method of [<code>Node</code>](#Node)  
**Returns**: <code>object</code> - clone  The clone of the node  

| Param | Type | Description |
| --- | --- | --- |
| nodeToClone | <code>object</code> | The node to be cloned |

