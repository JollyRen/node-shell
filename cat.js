module.exports = function (cmdData) {
  const fs = require("fs")
  let fileName = cmdData
  fs.readFile(fileName, (err, data) => {
    if (err) {
      throw err
    } else {
      process.stdout.write(data)
      process.stdout.write("\nprompt > ")
    }
  })
}
