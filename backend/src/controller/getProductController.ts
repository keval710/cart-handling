import { Request, Response } from "express";
import { User } from "../model/Schema";

export const getProductController = async (req: Request, res: Response) => {
  try {
    const data = await User.find({});

    if (data) {
      setTimeout(() => {
        return res.status(200).json(data);
      }, 1200);
    } else {
      return res
        .status(400)
        .json({ error: "data is not available in database" });
    }
  } catch (error: any) {
    throw new Error(error);
  }
};
