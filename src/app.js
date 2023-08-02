import express from "express";

import morgan from "morgan";
import { db } from "./models/index.js";

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(express.static("./public"));

// Database stuff



db.test();
//______________Dangerous______________\\

//              db.sync();

//.....................................\\

app.get("/home", (req, res, next) => {
    res.status(200).send("Ok");
    return;
})




export default app;