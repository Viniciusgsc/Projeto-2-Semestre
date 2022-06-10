import React from "react";
import "./AreaDados.css"


export default function AreaDados() {
  return (
  <body>
  <div className="areaDados">
      <aside>
      <div className="imageem">
      
      </div>  
        <article>
          <div class="area">
            <div className ="imc">
                <h1>Calculador de IMC</h1>
                  <div class="input_area">
                      <h2>Altura (cm) </h2>
                      <input id="height" type="number" placeholder="Digite sua Altura"></input>
                  </div>
                <div class="input_area">
                  <h2>Peso (kg) </h2>
                    <input id="weight" type="number" placeholder="Digite seu Peso"></input>
                </div>
              <button onclick="calculate()">Calcular</button>
              <textarea name="" id="text_area" rows="8"></textarea>
            </div>
          </div>
        </article>
      </aside>
    </div>
  </body>
  ); 
   
}

