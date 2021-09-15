export const Label = ({ id, labelText }) => (
  <label htmlFor={id} className="form-label">
    {labelText}
  </label>
);
