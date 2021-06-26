const fs = require("fs");
const http = require("http");
const url = require("url");

//////////file////////////
// const textIn=fs.readFileSync('./final/txt/input.txt','utf-8');

// // console.log(textIn);

// const textOut=`this is my text ${ textIn} and on ${Date.now()}`;
// fs.writeFileSync('./final/txt/output.txt', textOut);

// console.log('something written');

// fs.readFile("./final/txt/start.txt", "utf-8", (err, data1) => {
//   fs.readFile(`./final/txt/${data1}.txt`, "utf-8", (err, data2) => {
//     console.log(data2);

//     fs.readFile("./final/txt/append.txt", "utf-8", (err, data3) => {
//       console.log(data3);

//       fs.writeFile(
//         "./final/txt/final.txt",
//         `${data2}\n ${data3}`,
//         "utf-8",
//         (err) => {
//           console.log("written in file ");
//         }
//       );
//     });
//   });
// });
// console.log("is i am on the top");
////////////////////////////////////////////////////////////////

/////////////////server
const data = fs.readFileSync(`${__dirname}/final/dev-data/data.json`, "utf-8");
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "/overview") {
    res.end("this is overview");
  } else if (pathName === "/product") {
    res.end("this is product");
  } else if (pathName === "/api") {
    res.end(data);
  } else {
    res.writeHead(404, {
      "Content-Type": "text/html",
      "mt-own-header": "hello-world",
    });
    res.end("<h1>page canot found</h1>");
  }
});
server.listen(8000, "127.0.0.1", () => {
  console.log("listening to requests on port 8000");
});
