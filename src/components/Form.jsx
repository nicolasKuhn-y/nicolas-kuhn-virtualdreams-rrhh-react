import { useState } from "react";

export const Form = () => {
  
  return (
    <div className="short-container mx-2 mx-md-auto text-petrol">
      <div className="my-5 py-2 px-2 p-md-4 px-md-5 rounded border border-dark ">
        <div className="px-md-5">
          <div>
            <h2>Contactenos.</h2>
            <p className="mb-1 ">
              Contactenos sobre cualquier cosa relacionada con nuestra empresa o
              nuestros servicios.
            </p>
            <p className="mb-1">
              Haremos todo lo posible por darle respuesta a la brevedad.
            </p>
          </div>

          <form className="mt-2" >
            <div className="my-3">
              <label htmlFor="userName" className="form-label">
                Nombre
              </label>
              <input
                type="text"
                id="userName"
                className="form-control"
                name="name"
                required
                
              />
            </div>

            <div className="my-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                name="email"
                required
                
              />
            </div>

            <div className="my-3">
              <label htmlFor="asunto" className="form-label">
                Asunto
              </label>
              <input
                type="text"
                id="asunto"
                className="form-control"
                name="issue"
                required
             
              />
            </div>

            <div className="my-3">
              <label htmlFor="textarea" className="form-label">
                Mensaje
              </label>
              <textarea
                className="form-control"
                placeholder="Dejenos su mensaje aqui."
                name="message"
                id="textarea"
                required
              
              ></textarea>
            </div>

            <div className="d-grid col-10 mx-auto">
              <button
                className="btn btn-primary rounder bg-dark mt-3"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
