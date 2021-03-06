import React from 'react';

type InputProps = {
    idText: string
    labelText: string
    inputType: string
    valueInput: string
    handleChange: any
}

function Input({idText, labelText, inputType, valueInput, handleChange}: InputProps) {
  return (
    <>
        <label htmlFor={idText}>{labelText}</label>
        <input id={idText} type={inputType} value={valueInput} onChange={e => handleChange(e)}/>
    </>
  );
}

export default Input;
