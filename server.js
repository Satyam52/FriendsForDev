const express = require("express");
const app = express();
const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const path = require("path");

///connect Database
connectDB();

//init bodyParser
app.use(bodyParser.json({ extended: false }));

app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/user", require("./routes/api/user"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

//serve static asset in production
// if (process.env.NODE_ENV === "production") {
//   // Set static folder
//   app.use(express.static("client/build"));

//   app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
//   });
// }

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Runnig at ${PORT}`);
});
