import { Appointment } from "../appointment/Appointment";

export type Property = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  address: string | null;
  description: string | null;
  price: number | null;
  size: number | null;
  appointments?: Array<Appointment>;
};
