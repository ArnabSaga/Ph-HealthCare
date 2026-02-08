import { Request, Response } from "express";
import { SpecialtyService } from "./specialty.service";

const createSpecialty = async (req: Request, res: Response) => {
  try {
    const payload = req.body;

    const result = await SpecialtyService.createSpecialty(payload);

    res.status(201).json({
      success: true,
      data: result,
      message: "Specialty created successfully",
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create specialty",
      error: error.message,
    });
  }
};

export const SpecialtyController = {
  createSpecialty,
};
