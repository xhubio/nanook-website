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

# LoggerInterface

This is the interface each logger must implement to
be used in xhaubiotable.

The following loglevels exists:

**loglevel names and the level number.**

``` js
{
  debug: 0,
  info: 1,
  warning: 2,
  error: 3,
  fatal: 4,
}
```

## Functions

``` js
/**
 * Clears all the existing log entries
 * Placeholder for the implementing loggers.
 */
async clear() {}
```

``` js
/**
 * Returns the logLevel as a number for a given level String.
 * If the level string is invalid, the level number for
 * error will be returned
 *
 * @param level {string} The loglevel as a string
 *
 * @return num {number} The loglevel as a number
 */
getLevelNumber(level) {}
```

``` js
/**
 * Returns the current date time as a timestamp string.
 * This time is added to the log entry
 * Format: 'yyyy-mm-dd hh:MM:ss'
 *
 * @return timeString {string} The timestamp
 */
getTime() {}
```

``` js
/**
 * Logs the given message.
 * @param message {string|object} The message/entry to be logged
 */
async debug(message) {}

async info(message) {}

async warning(message) {}

async error(message) {}

async fatal(message) {}
```

# LoggerMemory

This logger is mainly used for unit testing. It stores
all the logs in array by level type. So you can get the Logs
after the test and proof that the right logs where generated.

## Properties

  - writeConsole  
    When set to true, all the logs are also written to the console

## Functions

All the functions from the LoggerInterface plus these functions.

``` js
/**
 * Clears all the existing log entries
 * Placeholder for the implementing loggers.
 */
async clear() {}
```

## Retrieve the logs

To get all the logs read the property 'logger.entries'. This returns an hash where for each logLevel
the logs are stored.

``` js
entries: {
  debug: [],
  info: [],
  warning: [],
  error: [],
  fatal: [],
}
```
