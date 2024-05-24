import React, { useState } from "react";
import { InputContainer, InputStyled, Label } from "./styles";

const Input = ({ label, type = "text", value, onChange, placeholder }) => {
  return (
    <InputContainer>
      {label && <Label>{label}</Label>}
      <InputStyled
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </InputContainer>
  );
};

export default Input;
