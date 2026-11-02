import type { TextFieldProps } from "@mui/material";

export const INITIAL_VALUES = {
  name: "",
  phone: "",
  email: "",
  address: "",
  message: "",
  subscribe: false,
};

export const TEXT_FIELDS: TextFieldProps[] = [
  {
    name: "name",
    placeholder: "Name *",
    required: true,
    fullWidth: true,
    size: "small",
  },
  {
    name: "phone",
    placeholder: "Phone Number *",
    type: "tel",
    required: true,
    fullWidth: true,
    size: "small",
  },
  {
    name: "email",
    placeholder: "Email *",
    type: "email",
    required: true,
    fullWidth: true,
    size: "small",
  },
  {
    name: "address",
    placeholder: "Address, City, Zip Code",
    required: false,
    fullWidth: true,
    size: "small",
  },
];