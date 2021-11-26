import React from "react";
import { StyledFormInput } from "./styles/StyledFormInput";

function FormInput({
  title,
  register,
  name,
  type = "text",
  row = 4,
  maxLength = 50,
}) {
  return (
    <StyledFormInput>
      <div className={`form-title`}>{title}</div>
      {type === "textarea" ? (
        <textarea
          className={`form-input`}
          {...register(name)}
          rows={row}
          maxLength={maxLength}
        />
      ) : (
        <input
          type={type}
          className={`form-input`}
          {...register(name)}
          maxLength={maxLength}
        />
      )}
    </StyledFormInput>
  );
}

export default FormInput;
