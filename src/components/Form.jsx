import { InputGroup, TextArea } from ".";
import { useForm } from "../hooks/useForm";

import { formValidations } from "../utils/formValidations";
import Swal from "sweetalert2";

export const Form = () => {
  const [values, handleInput, isFormValid, errors, resetValues] = useForm(
    {
      name: "",
      email: "",
      issue: "",
      message: "",
    },
    formValidations
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    resetValues();

    Swal.fire({
      icon: "success",
      title: "Formulario enviado",
      text: "Dentro de los proximos dias nos estaremos contactando con usted.",
      footer: " &copy; 2021-Virtual-Dreams",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonColor: "#0062ff",
    });
  };

  return (
    <>
      <div className="short-container mx-2 mx-md-auto text-petrol">
        <div className="my-5 py-2 px-2 p-md-4 px-md-5 rounded border border-dark ">
          <div className="px-md-5">
            <div>
              <h2>Contactenos.</h2>
              <p className="mb-1 ">
                Contactenos sobre cualquier cosa relacionada con nuestra empresa
                o nuestros servicios.
              </p>
              <p className="mb-1">
                Haremos todo lo posible por darle respuesta a la brevedad.
              </p>
            </div>

            <form className="mt-2" onSubmit={handleSubmit}>
              <InputGroup
                labelText="Nombre"
                type="text"
                id="userName"
                name="name"
                value={values.name}
                handleInput={handleInput}
                errorMessage={errors.name}
              />

              <InputGroup
                labelText="Email"
                type="email"
                id="email"
                name="email"
                value={values.email}
                handleInput={handleInput}
                errorMessage={errors.email}
              />

              <InputGroup
                labelText="Asunto"
                type="text"
                id="asunto"
                name="issue"
                value={values.issue}
                handleInput={handleInput}
                errorMessage={errors.issue}
              />

              <TextArea
                labelText="Mensaje"
                id="textarea"
                name="message"
                value={values.message}
                handleInput={handleInput}
                errorMessage={errors.message}
              />

              <div className="d-grid col-10 mx-auto">
                <button
                  className="btn btn-primary rounder bg-dark mt-3"
                  type="submit"
                  disabled={!isFormValid}
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
