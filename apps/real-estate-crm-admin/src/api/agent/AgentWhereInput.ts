import { StringFilter } from "../../util/StringFilter";
import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AgentWhereInput = {
  id?: StringFilter;
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  name?: StringNullableFilter;
};
