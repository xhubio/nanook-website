---
id: logger
title: Logger
sidebar_label: Logger
---


This is a logger facade. It stores all the log entries in Memory.
This is very useful for testing but not for production.

It has the following methods:

``` js
// Logs debug messages
debug(arg)

// Logs info messages
info(arg)

// Logs warning messages
warning(arg)

// Logs error messages
error(arg)

// Logs fatal messages
fatal(arg)
```
