import { AppointmentCreateNestedManyWithoutPropertiesInput } from "./AppointmentCreateNestedManyWithoutPropertiesInput";

export type PropertyCreateInput = {
  address?: string | null;
  description?: string | null;
  price?: number | null;
  size?: number | null;
  appointments?: AppointmentCreateNestedManyWithoutPropertiesInput;
};
