const express = require("express");
const cors = require("cors");
const port = 5000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Indian Best Chef Server is running now !!!");
});

app.listen(port, () => {
  console.log(`Port is running ${port}`);
});
