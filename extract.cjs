const fs = require("fs");
const html = fs.readFileSync("dist/index.html", "utf8");
const regex = /src="([^"]+)"/g;
let match;
while ((match = regex.exec(html)) !== null) {
  console.log(match[1]);
}
