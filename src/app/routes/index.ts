import { Router } from "express";
import { SpecialtyRoute } from "../modules/specialty/specialty.route";

const router = Router();

router.use("/specialties", SpecialtyRoute);

export const IndexRoute = router;
