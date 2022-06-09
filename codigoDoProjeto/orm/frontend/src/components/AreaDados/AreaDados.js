import React from "react";
import "./AreaDados.css"


export default function AreaDados() {
  return (
  
<html lang="pt-br">
  <head>
    <title>Título da página</title>
    <meta charset="utf-8"></meta>
  </head>
  <body>
  <div className="areaDados">
      <aside>
        <h1> Quem somos?</h1>





        
        <article>
          <div class="area">
            <div className ="imc">
                <h1>Calculador de IMC</h1>
                  <div class="input_area">
                      <h2>Altura (cm) </h2>
                      <input id="height" type="number"></input>
                  </div>
                <div class="input_area">
                  <h2 h2>Peso (kg) </h2>
                    <input id="weight" type="number"></input>
                </div>
              <button onclick="calculate()">Calcular</button>
              <textarea name="" id="text_area" rows="8"></textarea>
            </div>
          </div>
        </article>
      </aside>
    </div>
  </body>
</html>
    
    
   
  ); 
     
}

