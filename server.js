const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  res.send("RestAPI Runnig");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Runnig at ${PORT}`);
});
