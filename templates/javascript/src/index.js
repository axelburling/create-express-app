const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req, res) => {
  res.send("It works").json("It works");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Runing on http://localhost:${port}`));
