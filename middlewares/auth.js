import ErrorHandler from "../utils/ErrorHandler.js";

//check by cookie..
export const isAuthenticated = (req, res, next) => {

  const token = req.cookies["connect.sid"];

  if (!token) {
    return next(new ErrorHandler("Not logged In ! Login First ", 401));
  }
  next();
};

//chek by role ..id admin or User
export const authorizeAdmin = (req, res, next) => {
  if (req.user.role !== "admin") {
    return next(new ErrorHandler("Only Admin Allowed", 405));
  }
  next();
};
