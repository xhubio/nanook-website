---
id: LoggerInterface
title: Logger Interface
sidebar_label: Logger Interface
---

<a name="LoggerInterface"></a>

## LoggerInterface
Defines the interface of a logger used by all the modules.

**Kind**: global class  

* [LoggerInterface](#LoggerInterface)
    * [.level](#LoggerInterface+level)
    * [.clear()](#LoggerInterface+clear)
    * [._getLevelNumber(level)](#LoggerInterface+_getLevelNumber) ⇒ <code>number</code>
    * [._log(level, arg)](#LoggerInterface+_log)
    * [._writeLog(level, entry)](#LoggerInterface+_writeLog)
    * [.debug(message)](#LoggerInterface+debug) ⇒ <code>Promise</code>
    * [.info(message)](#LoggerInterface+info) ⇒ <code>Promise</code>
    * [.warning(message)](#LoggerInterface+warning) ⇒ <code>Promise</code>
    * [.error(message)](#LoggerInterface+error) ⇒ <code>Promise</code>
    * [.fatal(message)](#LoggerInterface+fatal) ⇒ <code>Promise</code>
    * [._getTime()](#LoggerInterface+_getTime)

<a name="LoggerInterface+level"></a>

### loggerInterface.level
sets a new log level

**Kind**: instance property of [<code>LoggerInterface</code>](#LoggerInterface)  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>number/string</code> | The logLevel as number or String value |

<a name="LoggerInterface+clear"></a>

### loggerInterface.clear()
Clears all the existing log entries
Placeholder for the implementing loggers

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
<a name="LoggerInterface+_getLevelNumber"></a>

### loggerInterface.\_getLevelNumber(level) ⇒ <code>number</code>
returns the logLevel as a number

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
**Returns**: <code>number</code> - num  The loglevel as a number  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>string</code> | The loglevel as a string |

<a name="LoggerInterface+_log"></a>

### loggerInterface.\_log(level, arg)
Do the logging

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>string</code> | The log level of the current entry |
| arg | <code>string</code> \| <code>object</code> | The data to log |

<a name="LoggerInterface+_writeLog"></a>

### loggerInterface.\_writeLog(level, entry)
Writes the log, or do what ever. At this point in time
the logs with the wrong level arte already filtered

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  

| Param | Type | Description |
| --- | --- | --- |
| level | <code>string</code> | The log level of the current entry |
| entry | <code>string</code> \| <code>object</code> | The data to log |

<a name="LoggerInterface+debug"></a>

### loggerInterface.debug(message) ⇒ <code>Promise</code>
Logs the given message with the level 'debug'

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
**Returns**: <code>Promise</code> - promise  A promise when the log is written  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string/object</code> | The message or data to log |

<a name="LoggerInterface+info"></a>

### loggerInterface.info(message) ⇒ <code>Promise</code>
Logs the given message with the level 'info'

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
**Returns**: <code>Promise</code> - promise  A promise when the log is written  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string/object</code> | The message or data to log |

<a name="LoggerInterface+warning"></a>

### loggerInterface.warning(message) ⇒ <code>Promise</code>
Logs the given message with the level 'warning'

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
**Returns**: <code>Promise</code> - promise  A promise when the log is written  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string/object</code> | The message or data to log |

<a name="LoggerInterface+error"></a>

### loggerInterface.error(message) ⇒ <code>Promise</code>
Logs the given message with the level 'error'

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
**Returns**: <code>Promise</code> - promise  A promise when the log is written  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string/object</code> | The message or data to log |

<a name="LoggerInterface+fatal"></a>

### loggerInterface.fatal(message) ⇒ <code>Promise</code>
Logs the given message with the level 'fatal'

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
**Returns**: <code>Promise</code> - promise  A promise when the log is written  

| Param | Type | Description |
| --- | --- | --- |
| message | <code>string/object</code> | The message or data to log |

<a name="LoggerInterface+_getTime"></a>

### loggerInterface.\_getTime()
Returns the current time in the format used by this logger

**Kind**: instance method of [<code>LoggerInterface</code>](#LoggerInterface)  
