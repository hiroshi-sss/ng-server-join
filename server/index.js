const express = require("express");
const mongoose = require("mongoose");
const config = require("./config/");
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
    if (process.env.NODE_ENV !== "production") {
      const fakeDb = new FakeDb();
      // fakeDb.initDB();
    }
  })
  .catch(
    db.on("error", console.error.bind(console, "mongo 接続エラー ctrl + c:"))
  );

const app = express();

app.use("/api/v1/items", itemRoutes);

if (process.env.NODE_ENV === "production") {
  const appPath = path.join(__dirname, "..", "dist", "app");
  app.use(express.static(appPath));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(appPath, "index.html"));
  });
}

const PORT = process.env.PORT || "3000";

app.listen(PORT, () => console.log("Server!!"));
