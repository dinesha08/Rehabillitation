// Import dependencies
const express = require("express");
const app = express();
const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// Defining the serial port
const port = new SerialPort({
  path: "COM6",
  baudRate: 9600,
});

// The Serial port parser
const parser = new ReadlineParser();
port.pipe(parser);

// Read the data from the serial port

let data = [];
parser.on("data", (line) => data.push(line));

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
