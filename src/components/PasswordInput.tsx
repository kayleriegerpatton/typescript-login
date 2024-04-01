import React from "react";
import { TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LogInInputs } from "../types/LoginInput";

interface PasswordInputProps {
  register: UseFormRegister<LogInInputs>;
  errors: FieldErrors<LogInInputs>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  return (
    // 8 char min, allows pasting, no char type limit, no composition rules
    <TextField
      label="Password*"
      type="password"
      variant="outlined"
      {...register("password", {
        required: true,
        minLength: {
          value: 8,
          message: "Password must be at least 8 characters.",
        },
        pattern: {
          value: /[ -~]+/, //allows all printable ASCII chars
          message: "Password contains an invalid character.",
        },
      })}
      error={!!errors.password}
      helperText={errors.password?.message as React.ReactNode}
    />
  );
};

export default PasswordInput;
