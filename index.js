const express = require("express")

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "Quack, quack!"
  });
});

app.post("/quacks", (req, res) => {
  console.log(req.body);
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});