import { useState, useEffect } from "react";



export const useForm = (values = {}, validations = {}) => {
  const [formValues, setFormValues] = useState(values);
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const resetValues = () => setFormValues(values);

  const handleInputChange = ({ target }) =>
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });

  useEffect(() => {
    let validationsErrors = {};

    for (const property in validations) {
      const validation = validations[property];
      const error = validation(formValues[property]);

      if (error) {
        validationsErrors[property] = error;
      }
    }

    setErrors(validationsErrors);

    if (Object.keys(validationsErrors).length === 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formValues]);

  return [formValues, handleInputChange, isFormValid, errors, resetValues];
};
