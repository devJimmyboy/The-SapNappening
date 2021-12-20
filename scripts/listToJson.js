const fs = require("fs")
const path = require("path")

const file = fs
  .readFileSync(path.join(__dirname, "ban-list.txt"))
  .toString()
  .split(/[\r\n]/g)
let json = { names: [], extra: [] }
file.forEach((line) => {
  if (line.length > 0) {
    const words = line.split(" ")
    words.shift()
    const [user, type] = words
    if (type === "username") {
      json.names.push(user)
    } else {
      json.extra.push(user)
    }
  }
})
fs.writeFileSync(path.join(__dirname, "ban-list.json"), JSON.stringify(json))
