import React from "react";
import { Label } from ".";

export const TextArea = ({
  labelText,
  id,
  name,
  value,
  handleInput,
  errorMessage,
}) => {
  return (
    <div className="my-3">
      <Label id={id} labelText={labelText} />
      <textarea
        className="form-control"
        placeholder="Dejenos su mensaje aqui."
        name={name}
        id={id}
        required
        value={value}
        onChange={handleInput}
      ></textarea>
      {errorMessage && <small className="text-red">{errorMessage}</small>}
    </div>
  );
};
