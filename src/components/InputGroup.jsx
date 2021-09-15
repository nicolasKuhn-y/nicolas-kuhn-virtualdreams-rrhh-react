import { Label } from ".";

export const InputGroup = ({
  labelText,
  type,
  id,
  name,
  value,
  handleInput,
  errorMessage = "",
}) => (
  <div className="my-3">
    <Label id={id} labelText={labelText} />

    <input
      type={type}
      id={id}
      className="form-control"
      name={name}
      required
      value={value}
      onChange={handleInput}
    />

    {errorMessage && <small className="text-red">{errorMessage}</small>}
  </div>
);
