const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/db");
const FakeDb = require("./fake-db");
const db = mongoose.connection;
const itemRoutes = require("./routes/items");

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

app.get('/', (req, res) => {
  res.json({'Test': true});
})

app.use("/api/v1/items", itemRoutes);

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => console.log("Server!!"));
