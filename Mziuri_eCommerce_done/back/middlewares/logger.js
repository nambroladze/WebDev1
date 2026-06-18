export default function logger(req, res, next) {
  const isBlocked = true;

  console.log("Request received");

  if (isBlocked) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
  next();
}
