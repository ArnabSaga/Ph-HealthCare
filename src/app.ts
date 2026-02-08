import express, { Application, Request, Response } from "express";

import { prisma } from "./app/lib/prisma";

import { IndexRoute } from "./app/routes";

const app: Application = express();

//* Enable URL-encoded form data parsing
app.use(express.urlencoded({ extended: true }));

//* Middleware to parse JSON bodies
app.use(express.json());

app.use("/api/v1", IndexRoute);

//* Basic route
app.get("/", async (req: Request, res: Response) => {
  const specialty = await prisma.specialty.create({
    data: {
      title: "Cardiology",
    },
  });
  res.status(201).json({
    success: true,
    message: "API is working",
    data: specialty,
  });
});

export default app;
