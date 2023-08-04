import { Router } from "express";

import { AuthController } from "../controllers/auth.controller";

const router = Router();


// Auth routes

router.post("/auth/signup", AuthController.signUp);

// router.post("/auth/signin",AuthController)



export default router;