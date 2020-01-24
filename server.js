const express = require("express");
const app = express();
const connectDB = require("./config/db");

///conect Database
connectDB();

app.get("/", (req, res, next) => {
  res.send("RestAPI Runnig");
});
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Runnig at ${PORT}`);
});
