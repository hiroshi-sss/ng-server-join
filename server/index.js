const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/db");
const FakeDb = require("./fake-db");
const db = mongoose.connection;
const itemRoutes = require("./routes/items");
const path = require("path");

mongoose
  .connect(config.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    const fakeDb = new FakeDb();
    fakeDb.initDB();
  })
  .catch(
    db.on("error", console.error.bind(console, "mongo 接続エラー ctrl + c:"))
  );

const app = express();

app.use("/api/v1/items", itemRoutes);

const appPath = path.join(__dirname, "..", "dist", "app");
app.use(express.static(appPath));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(appPath, "index.html"));
});

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => console.log("Server!!"));
