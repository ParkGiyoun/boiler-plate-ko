const express = require("express");
const app = express();
const port = 5000;

//mongoose라는 모듈 쓰기
const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://giyoun:gs0528123!@boilerplate.r4moe.mongodb.net/<dbname>?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("MongoDB connected..."))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello World!~~ 안녕하세요 ^^");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
