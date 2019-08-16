---
id: overview
title: Matrix Table Overview
sidebar_label: Overview
---


The Predecessor Successor Matrix Table (short: matrix table) is used to defined changes on an existing state of an application.
For example, if there is a decision table for creating an account, then this table
may use the created account to add transaction to that account.

The table has a 'source' section and an 'actions' section. The 'source' section covers a current state.
The 'action' section covers which state change should be applied.

The matrix itself defines which actions are to be applied on which source state.

## Table Layout

![The matrix table](/img/model-matrix/table.jpg)

This is an example for a matrix table. This is more to give you an idea of what the table looks like - the values shown here aren't important.

![The header parts](/img/model-matrix/header.jpg)

The red box covers the header definitions. The same header is used for both the columns
and the rows.

![The source part of the table](/img/model-matrix/source.jpg)

It is up to the user which side to use for the 'source'. Here, the 'source' is on the left.

![The action part of the table](/img/model-matrix/actions.jpg)

On the right, we have the 'action' section. But this is up to you. The generator of the table needs to handle the order in which the generators are executed.
