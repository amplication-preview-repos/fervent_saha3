import { AppointmentUpdateManyWithoutPropertiesInput } from "./AppointmentUpdateManyWithoutPropertiesInput";

export type PropertyUpdateInput = {
  address?: string | null;
  description?: string | null;
  price?: number | null;
  size?: number | null;
  appointments?: AppointmentUpdateManyWithoutPropertiesInput;
};
