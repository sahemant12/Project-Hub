import { Router } from "express";
import { registerUser } from "../controllers/auth.controllers.js";
import { validate } from "../middlewares/validator.middleware.js";
import { userRegistrationValidator } from "../validators/index.js";

const router = Router();

router.post("/register", userRegistrationValidator(), validate, registerUser);
router.post("/log-in");
router.post("/verify");
router.post("/log-out");
router.post("/forget-password");
router.post("/reset-password");
export default router;
