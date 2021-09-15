import { useState, useEffect, useCallback } from "react";

/** Hook que se encarga de controlar los campos de un formulario
 *  y sus validaciones asociadas.
 *
 * @param {*} values un objeto que representa los campos asociados a un form
 *
 * @param {*} validations objeto que contiene ciertas validaciones a realizarse sobre
 *                        los campos del formulario.
 * @returns {Array}
 */
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

  // utilizar useCallback para evitar un render infinito en el useEffect .
  const findErrors = useCallback(() => {
    let validationsErrors = {};

    // se itera sobre el parametro validations en busca de que
    // haya errores en las validaciones.
    for (const property in validations) {
      const validation = validations[property];
      const errorMessage = validation(formValues[property]);

      //si hay error se agrega a validationsErrors
      // una prop que guarde el retorno de la validacion.
      if (errorMessage) {
        validationsErrors[property] = errorMessage;
      }
    }

    setErrors(validationsErrors);

    // si el total de props es 0 entonces no hay errores
    if (Object.keys(validationsErrors).length === 0) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formValues, validations]);

  useEffect(() => findErrors(), [formValues, findErrors]);

  return [formValues, handleInputChange, isFormValid, errors, resetValues];
};
