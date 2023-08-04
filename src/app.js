import express from "express";

import morgan from "morgan";
import { db } from "./models/index.js";
import { handleHttpError } from "./utils/error_handler.js";
import helmet from "helmet"

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("./public"));
app.use(helmet());

// Database stuff



db.test();
//______________Dangerous______________\\

//              db.sync();

//.....................................\\

app.get("/home", (req, res, next) => {
    res.status(200).send("Ok");
    return;
})

app.use(handleHttpError);


export default app;