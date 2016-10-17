import { IUser } from "./user.interface";

export interface IMessage extends IUser {
  name: string;
  mood: string;
  avatar: string;
  status: string;
  text: string;
  time: number;
}
