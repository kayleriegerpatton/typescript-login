import React from "react";
import { InputLabel, TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";

import { LogInInputs } from "../types/LoginInput";

interface EmailInputProps {
  register: UseFormRegister<LogInInputs>;
  errors: FieldErrors<LogInInputs>;
}

const EmailInput: React.FC<EmailInputProps> = ({ register, errors }) => {
  return (
    <>
      <InputLabel htmlFor="email-input">Email address</InputLabel>
      <TextField
        id="email-input"
        type="email"
        variant="outlined"
        fullWidth
        size="small"
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
    </>
  );
};

export default EmailInput;
