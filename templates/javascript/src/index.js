const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const helmet = require("helmet");

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (_, res) => {
  res.send("It works");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Running on http://localhost:${port}`));
