import React from "react";
import { Link } from "react-router-dom"

import "./MenuHorizontal.css"

function MenuHorizontal() {
  return (
    <div className="menuHorizontal">
      <nav className="navMenu">
        <ul className="menus">
          <li> <Link to="/">Home </Link> </li>          
          <li> <Link to="/categorias">Tabela dos Usuarios </Link> </li>
          <li> <Link to="/departamentos">IMC </Link> </li>          
        </ul>
      </nav>
    </div>
  );
}

export default MenuHorizontal;
