import { IModel } from "./iModel";

export interface IUser extends IModel {
   name?: string;
   email?: string;
   password?: string;
}
