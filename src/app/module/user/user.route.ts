import { Router } from "express";

import { validateRequest } from "../../middleware/validateRequest";

import { UserControllers } from "./user.controller";
import { createDoctorZodSchema } from "./user.validation";

const router = Router();

router.post("/create-doctor", validateRequest(createDoctorZodSchema), UserControllers.createDoctor);

// TODO:
// router.post("/create-admin", UserControllers.createDoctor);
// router.post("/create-superAdmin", UserControllers.createDoctor);

export const UserRoutes = router;
