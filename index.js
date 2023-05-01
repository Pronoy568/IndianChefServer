const express = require("express");
const cors = require("cors");
const port = 5000;

const chefRecipeData = require("./Data.json");

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Indian Best Chef Server is running now !!!");
});

app.get("/chefRecipe", (req, res) => {
  res.send(chefRecipeData);
});

app.listen(port, () => {
  console.log(`Port is running ${port}`);
});
