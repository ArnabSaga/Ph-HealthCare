import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.post("/create-doctor", UserControllers.createDoctor);

// TODO:
// router.post("/create-admin", UserControllers.createDoctor);
// router.post("/create-superAdmin", UserControllers.createDoctor);

export const UserRoutes = router;
