---
id: overview
title: Matrix table overview
sidebar_label: Overview
---


Predecessor Successor Matrix Table (short: matrix table) is used to defined changes on an existing state of an application.
For example there is a decision table for creating an account. Then this table
may use the created account to add transaction on that account.

The table has a source part and an actions part. The source part refers to a current state.
The action part defines which state change should be applied.

The Matrix itself defines which actions to be applied on which source state.

## Table Layout

![The matrix table](/img/model-matrix/table.jpg)

This is an example for a matrix table. It is more about the table looks like,
not about the values in the table.

![The header parts](/img/model-matrix/header.jpg)

The red shows the header definitions. The same header is used for the columns
and the rows.

![The source part of the table](/img/model-matrix/source.jpg)

It is up to the user which part to choose for the source. But here
the source is to the left side.

![The action part of the table](/img/model-matrix/actions.jpg)

On the right side the action part is located. But this is up to you. The generator
of the table needs to handle the order in which the generators are executed.
