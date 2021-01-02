import express from "express";
const app = express();
import cors from "cors";
import morgan from "morgan";
import helmet from "helmet";

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());

app.get("/", (req: any, res: any) => {
  res.send("It works").json("It works");
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Runing on http://localhost:${port}`));
