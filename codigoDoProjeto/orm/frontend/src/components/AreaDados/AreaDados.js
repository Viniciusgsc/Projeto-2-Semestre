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
      <p>Somos um grupo de Educadores Fisicos das Apaes do estado de São Paulo. Onde ajudamos pessoas com algum tipo de deficiencia sendo fisica ou nao. Temos uma ficha de indentificação pessoal de cada um dos nossos pacientes, com informações fornecidas pelo o avaliado ou responsável do mesmo. Esse é um passo crucial para conhecer nossos pacientes e sabermos se esta tendo algum avanço na saude de cada um.</p>
      </article>
      </aside>
    </div>
      <div className="video">
      </div>
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
  </body>
</html>
    
    
   
  ); 
     
}
    
    

