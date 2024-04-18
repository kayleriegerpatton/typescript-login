import React from "react";

type FormButtonProps = {
  disabled: boolean;
  type: "button" | "submit" | "reset";
  label: string;
};

const FormButton: React.FC<FormButtonProps> = ({ label, disabled, type }) => {
  return (
    <button type={type} disabled={disabled}>
      {label}
    </button>
  );
};

export default FormButton;
