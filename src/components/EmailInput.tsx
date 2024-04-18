import React from "react";
import { TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LogInInputs } from "../types/LoginInput";

interface EmailInputProps {
  register: UseFormRegister<LogInInputs>;
  errors: FieldErrors<LogInInputs>;
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <TextField
      label="Email address*"
      type="email"
      variant="outlined"
      {...register("email", {
        required: true,
        pattern: {
          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          message: "Please enter a valid email address.",
        },
      })}
      error={!!errors.email}
      helperText={errors.email?.message as React.ReactNode}
    />
  );
};

export default EmailInput;
