import jwt from "jsonwebtoken";

export default function verifyToken(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "you don't have token" });
  }

  try {
    jwt.verify(token, "mysecret");
    next();
  } catch (error) {
    res.status(401).json({ message: "invalid token" });
  }
}
