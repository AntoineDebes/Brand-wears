import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const jwtCreate = (value) => {
  const accessToken = jwt.sign({ value }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "5h",
  });
  return accessToken;
};
