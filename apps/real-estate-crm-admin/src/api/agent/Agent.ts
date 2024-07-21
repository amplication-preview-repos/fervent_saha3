import { Appointment } from "../appointment/Appointment";

export type Agent = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  appointments?: Array<Appointment>;
  email: string | null;
  phoneNumber: string | null;
  name: string | null;
};
