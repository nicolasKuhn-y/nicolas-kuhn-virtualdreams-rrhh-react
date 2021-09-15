import { useState } from "react";

export const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  return (
    <nav className="navbar navbar-expand-lg text-white bg-blue p-2  py-md-3 px-md-5 align-items-center">
      <h2 className="navbar-brand m-0 text-white ">Virtual dreams</h2>
      <button
        className="custom-toggler navbar-toggler navbar-dark"
        type="button"
        data-toggle="collapse"
        data-target="#navBarMenu"
        aria-controls="navBarMenu"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={() => setIsNavCollapsed(!isNavCollapsed)}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${
          isNavCollapsed ? "collapse" : ""
        } navbar-collapse justify-content-center mx-md-4 `}
        id="navBarMenu"
      >
        <ul className="navbar-nav container  justify-content-evenly">
          <li className="nav-item my-1 my-md-0">Home</li>

          <li className="nav-item my-1 my-md-0">Servicios</li>

          <li className="nav-item my-1 my-md-0">Quienes somos</li>

          <li className="nav-item my-1 my-md-0">Busquedas</li>

          <li className="nav-item my-1 my-md-0">Contacto</li>
        </ul>
      </div>
    </nav>
  );
};
