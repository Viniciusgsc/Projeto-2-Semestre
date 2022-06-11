import React from "react";
import { useEffect, useState } from "react";
import Cabecalho from "../Cabecalho/Cabecalho.js";
import MenuHorizontal from "../MenuHorizontal/MenuHorizontal.js";

import api from "../../services/api.js"

import Moment from 'react-moment'

import "./Pacientes.css"
import Geral from "../Geral/Geral.js";

function Pacientes() {

  const [pacientes, setPacientes] = useState([])

  useEffect(() => {
    api.get('pacientes')
      .then(response => setPacientes(response.data))

  }, []
  )

  return (

    <div id="idPacientes" className="pacientes">
      <Cabecalho />
      <MenuHorizontal />
      
      <legend>Registros de Pacientes Cadastrados</legend>

      <div className="tabela">
        <table className="table table-responsive">
          <thead>
            <tr id='titulo'>
              <th id='t_codigo'> Código </th>
              <th id='t_descricao'> Nome do Paciente </th>
              <th id='t_altura'> Altura do Paciente </th>
              <th id='t_altura'> Idade do Paciente </th>
              <th id='t_idade'> Sexo do Paciente </th>
              <th id='t_dtinclusao'> Inclusão </th>
              <th id='t_dtalteracao'> Alteração </th>
              <th id="novo"> <a class="btn btn-success btn-block">Novo Registro</a> </th>              
              <th id='t_sobra'></th>
              <th></th>
            </tr>
          </thead>
          <br></br>

          <tbody>
            {pacientes.map((item, i) => {
              return (
                <>
                  <tr>
                    <td id="p_codigo">{item.id}</td>
                    <td id='p_descricao'>{item.pac_descricao}</td>
                    <td id='p_altura'>{item.pac_altura}</td>
                    <td id='p_idade'>{item.pac_idade}</td>
                    <td id='p_altura'>{item.pac_sexo}</td>

                    <td id="p_dtinclusao"><Moment format="DD/MM/YYYY">{(item.createdAt)}</Moment> </td>

                    <td id='p_dtalteracao'><Moment format="DD/MM/YYYY">{item.updatedAt}</Moment> </td>

                    <td id="editar"> <a class="btn btn-primary btn-block"> Editar </a></td>
                    <td id="remover"> <a class="btn btn-danger btn-block"> Remover </a></td>

                    <td></td>
                  </tr>
                </>
              )
            })}
          </tbody>
          <tfoot>
            <tr id='registros'>
              <td>Quantidade de registros: {pacientes.length} </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )

}

export default Pacientes;

//<td id="editar"> <a class="btn btn-primary btn-block" href=<%="/autores/editar/" + obj_autores[i].aut_codigo %>> Editar </a></td>
//<td id="ativar"> <a class="btn btn-danger btn-block" href=<%="/autores/ativoInativo/" + obj_autores[i].aut_codigo %>> Inativar </a></td>
