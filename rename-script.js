var fs = require("fs")

const dir = fs.opendirSync(".")
let dirent
while ((dirent = dir.readSync()) !== null) {
    const { name } = dirent
    if (name.includes("html")) {
        let out = name.slice(24)
        out = out.split(" ")[0]
        console.log(out)
        fs.rename(`${name}`, `${out}.html`, function (err) {
            if (err) console.log("ERROR: " + err)
        })
    }
}
dir.closeSync()
