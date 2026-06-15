const jwt = require(
  "jsonwebtoken"
);

const Employee =
  require("../models/Employee");

const protect =
  async (
    req,
    res,
    next
  ) => {
    try {
      const authHeader =
        req.headers.authorization;

      if (
        !authHeader ||
        !authHeader.startsWith(
          "Bearer "
        )
      ) {
        return res
          .status(401)
          .json({
            message:
              "Unauthorized"
          });
      }

      const token =
        authHeader.split(
          " "
        )[1];

      const decoded =
        jwt.verify(
          token,
          process.env.JWT_SECRET
        );

      req.user =
        await Employee.findById(
          decoded.id
        ).select(
          "-password"
        );

      next();
    } catch {
      return res
        .status(401)
        .json({
          message:
            "Invalid token"
        });
    }
  };

module.exports =
  protect;