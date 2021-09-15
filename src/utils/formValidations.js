// Regex para aceptar letras mayusculas, minusculas, letras con acentos y caracteres especiales como ñ
const nameRegex = /^[A-Za-z.\s_-\u00f1\u00d1\u00E0-\u00FC]+$/;

// Regex para aceptar solo email con un .com al final
const emailRegex = /\S+@\S+\.\S+/;

const formValidations = {
  name: (value) =>
    validateField(value, nameRegex, "Campo invalido por caracteres extraños"),

  email: (value) =>
    validateField(value, emailRegex, "Formato de email invalido"),

  issue: (value) => validateField(value),
  message: (value) => validateField(value),
};

/** Funcion que nos permite hacer una pequeña validacion sobre un campo.
 *
 * @param {*} value Valor a validar
 * @param {*} regex "Regex que sera usado para validar un campo"
 * @param {*} message "Mensaje custom en caso de que una validacion por regex falle"
 * @returns retorna algun mensaje de error, caso contrario no devuelve nada.
 */

function validateField(value, regex = null, message) {
  const minimoCaracteres = 3;

  if (value.length <= minimoCaracteres) return "Por favor, complete este campo";

  if (regex) {
    if (!regex.test(value)) return message;
  }
}

export { formValidations };
