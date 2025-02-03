import { NextFunction, Request, Response } from "express";

const name = process.env.REACT_APP_AUTHOR_NAME;
const lastname = process.env.REACT_APP_AUTHOR_LASTNAME;

const successResponse = async (req: Request, res: Response) => {
  const dataSend = {
    author: {
      name,
      lastname,
    },
    ...res.locals.data,
  };
  res.status(200).send(dataSend || {});
};

const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      res.status(403).json({ message: "Access denied: no token provided" });
    } else {
      const tokenJson = JSON.parse(token);
      if (tokenJson.name !== name || tokenJson.lastname !== lastname) {
        res.status(401).json({ message: "Access denied: invalid token" });
      } else {
        next();
      }
    }
  } catch (err) {
    res.status(500).json({ error: "Algo salió mal", err });
  }
};

export default { verifyToken, successResponse };
