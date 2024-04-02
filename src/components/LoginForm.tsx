import React from "react";
import { Box, Typography } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

import FormButton from "./FormButton";
import EmailInput from "./EmailInput";
import { LogInInputs } from "../types/LoginInput";
import PasswordInput from "./PasswordInput";

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<LogInInputs>({ mode: "onChange" });

  const onSubmit: SubmitHandler<LogInInputs> = (data) => {
    try {
      localStorage.setItem("email", JSON.stringify(data.email).toLowerCase());
      //!   render success indicator here
      reset();
    } catch (error) {
      console.log("ERROR: Failed to save to local storage.");
      //!   render error indicator here
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        maxWidth: "320px",
        margin: "0 auto",
      }}
    >
      <Typography variant="h5">Log in to your account</Typography>
      <p>Fields with an asterisk (*) are required.</p>
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <a href="/">Forgot password?</a>
      <FormButton label="Log In" type="submit" disabled={!isValid} />
    </Box>
  );
};
export default LoginForm;
