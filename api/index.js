const { json } = require('body-parser');
const express = require('express');
const app = express();
const port = 8080;

app.use("*", (req, res, next) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Content-Type", "application/json");
  next();
})

app.get('/cars/', (req, res) => {
  const cars={"cars":["Audi","Mercedes","BMW","Porsche"]}
  res.send(JSON.stringify(cars));
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// // maakt interactie met de server
// const server = http.createServer((request, response) => {
//       response.setHeader("Access-Control-Allow-Origin", "*");
//       response.setHeader("Content-Type", "application/json");
//       response.statusCode = 200;

//       console.log(`Request on url ${request.url} with the method ${request.method}`);

//       if (request.url == "/cars/" && request.method == "GET") {
//         response.write("{\"cars\":[\"Audi\",\"Mercedes\",\"BMW\",\"Porsche\"]}"); //write a response to the client
//         response.end(); //end the response
//       } else {
//         if (request.url == "/brands/" && request.method == "GET") {
//           response.write("{\"brands\":[\"Nike\",\"Adidas\",\"Puma\",\"Asics\"]}"); //write a response to the client
//           response.end(); //end the response
//         } else {
//           response.statusCode = 404;
//           response.end();
//         }
//       }

// });

//     server.listen(8080);