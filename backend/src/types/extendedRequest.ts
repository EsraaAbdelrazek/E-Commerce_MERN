import { Request } from "express";
import { IUser } from "../models/userModel";

export interface ExtendRequest extends Request {
  user?: IUser; // Add the user property to the request object
}