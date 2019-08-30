---
id: createWriter
title: Create your own writer
sidebar_label: Create writer
---


This chapter will show you how to create your own writer and how to use it. For this tutorial the writer will generate a CSV file of the generated test data. The data is written on a per test case basis. If you need one file containing all the data for all the test cases, it is a good practice to aggregate the file shortly  before execution. This way, with the data stored, you can decide later on which test cases to include in the next run, or if you would like to retest only some of the tests. Our recommendation is to split the data on a test cases per test case basis.

## Create the writer

First let’s have a look at the default writer provided by the '@xhubio/nanook-table' module.

``` js
const fs = requite('fs')
const util = requite('util')
const InterfaceWriter = requite('@xhubio/nanook-table').InterfaceWriter
const writeFile = util.promisify(fs.writeFile)

class DefaultWriter extends InterfaceWriter {
  /**
   * Writes the data
   */
  async write(testcaseData) {          
    const fileName = await this.createFileName(testcaseData)
                                       
    return writeFile(fileName, JSON.stringify(testcaseData, null, 2))
                                       
  }

  /**
   * Creates the file name to write the testcaseData object
   * @param testcaseData {object} The testcaseData object
   * @return fileName {string} The file name to write the object
   */
  async createFileName(testcaseData) {
    const tcName = testcaseData.name
    const targetDir = path.join('tdg', tcName)
    await md(targetDir)

    return path.join(targetDir, 'testcaseData.json')
  }
}
```

  - The only function that needs to be overwritten is the 'async write(testcaseData)' function. It is called for each test case with all the created test case data. The 'testcaseData' object contains the data. The default writer will simply write out this object. If you need multiple different files, each writer will extract only the data it needs and write it to a file.

  - Creates a file name.

  - Writes the file.

Now it’s time for your own writer. Create a file called 'csvWriter.js' and add the following content.

``` js
const fs = require('fs')
const util = require('util')
const path = require('path')
const InterfaceWriter = require('@xhubio/nanook-table').InterfaceWriter

const writeFile = util.promisify(fs.writeFile)
const DELIMITER = ','     

class CsvWriter extends InterfaceWriter {

  async write(testcaseData) {
    const fileName = await this.createFileName(testcaseData)
                          

    const sheetName = testcaseData.tableName
    const res = []

    for(const instId of Object.keys(testcaseData.data[sheetName])){
                          
      const dat = testcaseData.data[sheetName][instId]
                          
      const friend = dat['friend email'] ? dat['friend email'] : ''
      const row = [dat['first name'], dat['last name'], dat.email, friend]
                          
      res.push(row.join(DELIMITER))
    }

    return writeFile(fileName, res.join('\n'))
                          
  }

  /**
   * Creates the file name to write the testcaseData object
   * @param testcaseData {object} The testcaseData object
   * @return fileName {string} The file name to write the object
   */
  async createFileName(testcaseData) {
    const tcName = testcaseData.name
    const targetDir = path.join('tdg', tcName)
    return path.join(targetDir, 'person.csv')
  }
}

module.exports.CsvWriter = CsvWriter
```

  - Set the delimiter for the CSV file.

  - Create the file name. In this function we do not create the directory if it doesn’t exist (because this is already done in the default writer).

  - Iterate over all the instanceIds of the data object. In this case, we do not distinguish between the main data and the referenced data.

  - Get the data object of the current instanceId.

  - Build the row.

  - Write the file.

The next step is to add the writer to the processor. For this, the 'tdg.js' file needs to be modified.

``` js
const path = require('path')
const p = require('@xhubio/nanook-table')
const LoggerMemory = require('@xhubio/nanook-table').LoggerMemory
const GeneratorPerson = require('./GeneratorPerson').GeneratorPerson
const CsvWriter = require('./CsvWriter').CsvWriter
                      


async function doIt() {
  const logger = new LoggerMemory()
  logger.writeConsole = true

  const fileProcessor = await p.createDefaultFileProcessor(logger)

  const csvWriter = new CsvWriter({logger})
                      
  const defaultWriter = p.createDefaultWriter(logger)[0]
                      

  const processor = new p.Processor({
    logger,
    generatorRegistry: p.createDefaultGeneratorRegistry(),
    writer: [defaultWriter, csvWriter]
                      
  })

  const genPerson = new GeneratorPerson({logger})
  processor.generatorRegistry.registerGenerator('generatorPerson', genPerson)

  await fileProcessor.load(path.join('resources', 'demo.xlsx'))
  processor.tables = fileProcessor.tables

  await processor.process()
}


doIt().then(() => {
  console.log('Finish')
}).catch(err => {
  console.log(err)
})
```

  - Import the writer class.

  - Create an instance of the csv writer.

  - The 'createDefaultWriter()' function returns an array with one default writer, so we just get the first writer from the array.

  - Create an array with both writers. The writers are executed in the given order, so only the first writer needs to create the output directory.

Now run the execution again. Afterwards, you will find an additional file called 'person.csv' in the result directory.

> **Note**
> 
> The example code is located at:  
> src/t4/step1  
> In there, simply run:  
> node tdg.js
