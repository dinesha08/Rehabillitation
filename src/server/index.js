const http = require("http");

const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// Defining the serial port
const ports = new SerialPort({
  path: "COM3",
  baudRate: 9600,
});

// The Serial ports parser
const parser = new ReadlineParser();
ports.pipe(parser);

// Read the data from the serial port

let data = {};
parser.on("data", (line) => {
  data = {
    acceleration: line.split(",")[0],
    brake: line.split(",")[1],
    accelerationForce: line.split(",")[2],
    brakeForce: line.split(",")[3],
  };
});

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/data") {
    res.write(JSON.stringify(data));
    res.end();
  } else {
    res.write("Invalid Request");
    res.end();
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
