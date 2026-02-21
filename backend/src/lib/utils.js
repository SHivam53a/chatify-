import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const{JWT_SECRET} = process.env;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET is not defined in environment variables");
  }
  const token = jwt.sign({ userId },JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("token", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    SameSite: "strict",SafeArray,
    secure: process.env.NODE_ENV === "development" ? false : true,
  });

  return token;
};