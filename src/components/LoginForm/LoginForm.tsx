import React from "react";
import Box from "@mui/material/Box";
import { useForm, SubmitHandler } from "react-hook-form";

import EmailInput from "../EmailInput";
import { LogInInputs } from "../../types/LoginInput";
import PasswordInput from "../PasswordInput";
import "./LoginForm.css";

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
      className="form"
      onSubmit={handleSubmit(onSubmit)}
      sx={{ gap: 1 }}
    >
      <EmailInput register={register} errors={errors} />
      <PasswordInput register={register} errors={errors} />
      <a
        className="primary-link"
        href="https://github.com/password_reset"
        target="_blank"
        rel="noreferrer noopener"
      >
        Forgot password?
      </a>
      {/* <FormButton label="Log In" type="submit" disabled={!isValid} /> */}
      <button className="button" type="submit" disabled={!isValid}>
        {isValid ? "Sign In" : "Complete form"}
      </button>
    </Box>
  );
};
export default LoginForm;
