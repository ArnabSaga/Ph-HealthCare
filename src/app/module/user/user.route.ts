import { Router } from "express";

import { validateRequest } from "../../middleware/validateRequest";

import { UserControllers } from "./user.controller";
import { createDoctorZodSchema } from "./user.validation";
import { checkAuth } from '../../middleware/checkAuth';
import { Role } from '../../../generated/prisma/enums';

const router = Router();

router.post("/create-doctor", validateRequest(createDoctorZodSchema), UserControllers.createDoctor);

// TODO:
// router.post("/create-superAdmin", UserControllers.createDoctor);


router.post("/create-admin", checkAuth(Role.SUPER_ADMIN, Role.ADMIN), UserControllers.createAdmin);
export const UserRoutes = router;
