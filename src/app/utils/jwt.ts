/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt, { JwtPayload, SignOptions } from "jsonwebtoken";

const createToken = (payload: JwtPayload, secret: string, { expiresIn }: SignOptions) => {
  const token = jwt.sign(payload, secret, { expiresIn });
  return token;
};

const verifyToken = (token: string, secret: string) => {
  try {
    const decoded = jwt.verify(token, secret) as JwtPayload;

    return {
      success: true,
      message: "Token verified successfully",
      data: decoded,
    };
  } catch (error: any) {
    return {
      success: false,
      message: "Invalid token",
      error: error.message,
    };
  }
};

const decodeToken = (token: string) => {
  const decode = jwt.decode(token) as JwtPayload;
  return decode;
};

export const jwtUtils = {
  createToken,
  verifyToken,
  decodeToken,
};
