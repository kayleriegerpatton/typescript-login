import React from "react";
import { InputLabel, TextField } from "@mui/material";
import { FieldErrors, UseFormRegister } from "react-hook-form";
import { LogInInputs } from "../types/LoginInput";

interface PasswordInputProps {
  register: UseFormRegister<LogInInputs>;
  errors: FieldErrors<LogInInputs>;
}

const PasswordInput: React.FC<PasswordInputProps> = ({ register, errors }) => {
  return (
    <>
      <InputLabel htmlFor="password-input">Password</InputLabel>
      {/* 8 char min, allows pasting, no char type limit, no composition rules */}
      <TextField
        type="password"
        variant="outlined"
        fullWidth
        size="small"
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
    </>
  );
};

export default PasswordInput;
