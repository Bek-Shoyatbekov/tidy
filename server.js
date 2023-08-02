import http from "http";

import https from "https";

import app from "./src/app.js";

import { PORT } from "./src/configs/Envs.js";

import { log } from "console";



const httpServer = http.createServer(app);

// const httpsServer = https.createServer(options, app);
// httpsServer.listen(443);



httpServer.listen(PORT, () => { log(`Http server is running on port : ${PORT}`) })
