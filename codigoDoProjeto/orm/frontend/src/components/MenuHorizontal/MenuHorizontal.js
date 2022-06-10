import React from "react";
import { Link } from "react-router-dom"
import "./MenuHorizontal.css"
import imagem from "../../img/logoo.png"

function MenuHorizontal() {
  return (
    <div className="menuHorizontal">
      <div className="imagem">
        <img src={imagem}></img>
      </div>  
        <nav className="navMenu">
          <ul className="menus">
            <li> <Link to="/">Home/Imc</Link> </li>          
            <li> <Link to="/categorias">Tabela dos Usuários </Link> </li>
            <li> <Link to="/departamentos"></Link></li>          
          </ul>
        </nav>
    </div>
  );
}

export default MenuHorizontal;



