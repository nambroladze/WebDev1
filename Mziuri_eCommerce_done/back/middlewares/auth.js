import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET;

function auth(req, res, next) {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No token provided",
    });
  }

  try {
    jwt.verify(token, SECRET);

    next();
  } catch {
    res.status(401).json({
      message: "Invalid token",
    });
  }
}
