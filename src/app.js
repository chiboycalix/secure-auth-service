const express = require("express");
const { initializeDatabase } = require("./config/db");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

async function startServer() {
  try {
    await initializeDatabase();
  } catch (err) {
    console.log(err);
  }
}
startServer();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
