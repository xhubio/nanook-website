---
id: createWriter
title: Create your own writer
sidebar_label: Create writer
---


This chapter shows how to create your own writer and make use of them. For this tutorial
the writer should generate a CSV file of the created test data. The data is written on a per
test case basis. If you need one file containing all the data of all test cases, it is a good
practice to aggregate the file later on. Short before execution. So you can store the generated
data and decide later which test cases to include into the next run. Also if you would
like to retest only some of the tests. So I recommend to split the data per test cases.

# Create the writer

First let’s have a look at the default writer provided by the '@xhubiotable/processor' module.

``` js
const fs = requite('fs')
const util = requite('util')
const InterfaceWriter = requite('@xhubiotable/processor').InterfaceWriter
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

  - The only function which needs to be overwritten is the 'async write(testcaseData)' function.
    It is called for each test case with all the created test case data. The 'testcaseData' object
    contains the data. The default writer will just write out this object. If you need many different files
    each writer extracts just the data it needs and writes it to a file.

  - Just create a file name.

  - Writes the file.

Now it’s time for your own writer.
Create a file called 'csvWriter.js' and add the following content.

``` js
const fs = require('fs')
const util = require('util')
const path = require('path')
const InterfaceWriter = require('@xhubiotable/processor').InterfaceWriter

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

  - Create the file name. In this function we do not create the directory if not exists, because this is
    already done in the default writer.

  - Iterate over all the instanceIds of the data object. In this case we do not distinguish between the main
    data and the referenced data. But this depends on the use case.

  - Get the data object of the current instanceId.

  - Build the row.

  - Write the file.

The next step is adding the writer to the processor. For this the 'tdg.js' file needs to be modified.

``` js
const path = require('path')
const p = require('@xhubiotable/processor')
const LoggerMemory = require('@xhubiotable/logger').LoggerMemory
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

  - The 'createDefaultWriter()' function returns an array with one default writer. So we just get the first
    writer from the array.

  - Create an array with both writers. The writers are executed in the given order. So only the first writer
    needs to create the output directory.

Now run the execution again. Afterwards you will find an additional file called 'person.csv' in the result directory.

> **Note**
> 
> The example code is located at:  
> src/t4/step1  
> Just type there:  
> node tdg.js
