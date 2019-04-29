---
id: LoggerMemory
title: Logger Memory
sidebar_label: Logger Memory
---

<a name="LoggerMemory"></a>

## LoggerMemory ⇐ <code>LoggerInterface</code>
Implements a default logger. It will store all the logEntries in Memory.
if 'writeConsole' is set  to true, it will also output the logs to the console.
This logger is mainly used for debugging and development.

**Kind**: global class  
**Extends**: <code>LoggerInterface</code>  

* [LoggerMemory](#LoggerMemory) ⇐ <code>LoggerInterface</code>
    * [.writeConsole](#LoggerMemory+writeConsole)
    * [.clear()](#LoggerMemory+clear)
    * [._writeLog(level, entry)](#LoggerMemory+_writeLog)

<a name="LoggerMemory+writeConsole"></a>

### loggerMemory.writeConsole
{boolean} Defines if the log entry should also be loged to the console. Default is not to write to console

**Kind**: instance property of [<code>LoggerMemory</code>](#LoggerMemory)  
<a name="LoggerMemory+clear"></a>

### loggerMemory.clear()
Clears all the existing log entries

**Kind**: instance method of [<code>LoggerMemory</code>](#LoggerMemory)  
<a name="LoggerMemory+_writeLog"></a>

### loggerMemory.\_writeLog(level, entry)
Writes the log, or do what ever. At this point in time
the logs with the wrong level arte already filtered

**Kind**: instance method of [<code>LoggerMemory</code>](#LoggerMemory)  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>string</code> | The log level of the current entry |
| entry | <code>string</code> \| <code>object</code> | The data to log |

