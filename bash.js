const pwd = require("./pwd")
const ls = require("./ls")
const cat = require("./cat")
process.stdout.write("prompt > ")

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim()
  process.stdout.write("You typed: " + cmd + "\n")
  if (cmd === "pwd") pwd(data)
  if (cmd === "ls") ls()
  if (cmd.slice(0, 4) === "cat ") cat(cmd.slice(4))
})
