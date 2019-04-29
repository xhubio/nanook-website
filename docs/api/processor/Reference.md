---
id: Reference
title: Reference
sidebar_label: Reference
---

<a name="Reference"></a>

## Reference
When traversing the tables we first build a graph
representing the data generation order.
The graph is build out of this nodes

**Kind**: global class  

* [Reference](#Reference)
    * [.targetIdentity](#Reference+targetIdentity)
    * [.clone(recursiv)](#Reference+clone)

<a name="Reference+targetIdentity"></a>

### reference.targetIdentity
The target identity is used to identify if a reference points to
the same target in the same instance

**Kind**: instance property of [<code>Reference</code>](#Reference)  
<a name="Reference+clone"></a>

### reference.clone(recursiv)
Clones the current reference

**Kind**: instance method of [<code>Reference</code>](#Reference)  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| recursiv | <code>boolean</code> | <code>false</code> | if true, then also the target node will be cloned recursivly |

