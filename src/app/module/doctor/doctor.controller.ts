import { Request, Response } from "express";
import status from "http-status";

import { catchAsync } from "../../shared/catchAsync";
import { sendResponse } from "../../shared/sendResponse";

import { DoctorService } from "./doctor.service";

const getAllDoctors = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getAllDoctors();

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctors retrieved successfully",
    data: result,
  });
});

// TODO: Implement this
/*
const getDoctorById = catchAsync(async (req: Request, res: Response) => {
  const result = await DoctorService.getDoctorById(req.params.id as string);

  sendResponse(res, {
    httpStatusCode: status.OK,
    success: true,
    message: "Doctor retrieved successfully",
    data: result,
  });
});

const updateDoctor = catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.updateDoctor(req.params.id as string, req.body);

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Doctor updated successfully",
        data: result,
    });
});

const deleteDoctor = catchAsync(async (req: Request, res: Response) => {
    const result = await DoctorService.deleteDoctor(req.params.id as string);

    sendResponse(res, {
        httpStatusCode: status.OK,
        success: true,
        message: "Doctor deleted successfully",
        data: result,
    });
});
*/
export const DoctorController = {
  getAllDoctors,
};
