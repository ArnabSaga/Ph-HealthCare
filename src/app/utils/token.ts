import { Response } from "express";
import { JwtPayload, SignOptions } from "jsonwebtoken";
import { envVars } from "../config/env";
import { CookieUtils } from "./cookie";
import { jwtUtils } from "./jwt";

//* Creating Access Token
const getAccessToken = (payload: JwtPayload) => {
  const accessToken = jwtUtils.createToken(payload, envVars.ACCESS_TOKEN_SECRET, {
    expiresIn: envVars.ACCESS_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });

  return accessToken;
};

//* Creating Refresh Token
const getRefreshToken = (payload: JwtPayload) => {
  const refreshToken = jwtUtils.createToken(payload, envVars.REFRESH_TOKEN_SECRET, {
    expiresIn: envVars.REFRESH_TOKEN_EXPIRES_IN as SignOptions["expiresIn"],
  });

  return refreshToken;
};

const setAccessTokenCookie = (res: Response, token: string) => {
  CookieUtils.setCookie(res as Response, "accessToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 60 * 60 * 60 * 24, // 1 day
  });
};

const setRefreshTokenCookie = (res: Response, token: string) => {
  CookieUtils.setCookie(res as Response, "refreshToken", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 60 * 60 * 60 * 24 * 7, // 7 days
  });
};

const setBetterAuthSessionCookie = (res: Response, token: string) => {
  CookieUtils.setCookie(res as Response, "better-auth.session_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    path: "/",
    maxAge: 60 * 60 * 60 * 24, // 1 Day
  });
};

export const tokenUtils = {
  getAccessToken,
  getRefreshToken,
  setAccessTokenCookie,
  setRefreshTokenCookie,
  setBetterAuthSessionCookie,
};
