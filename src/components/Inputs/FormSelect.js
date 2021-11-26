import React from "react";
import { StyledFormSelect } from "./styles/StyledFormSelect";

function FormSelect({ title, register, name, options = [] }) {
  return (
    <StyledFormSelect>
      <div className="form-title">{title}</div>
      <select className="form-select" {...register(name)}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {" "}
            {option.title}{" "}
          </option>
        ))}
      </select>
    </StyledFormSelect>
  );
}

export default FormSelect;
