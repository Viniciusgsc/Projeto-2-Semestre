const req = require('express/lib/request');
const Pacientes = require('../models/pacientesModels.js');

module.exports = {
    
    async index(requisicao, resposta){
        const pacientes = await Pacientes.findAll();
        return resposta.json(pacientes);
    },

    async store(req, res) {
       const pacientes = await Pacientes.create(req.body);
       return res.json({pacientes})       
       return res.json({message: "Registro criado com sucesso!"})
    },

    async update(req, res) {
        const { codigo_id } = req.params
        const { pac_descricao } = req.body
        const { pac_peso } = req.body
        const { pac_altura } = req.body
        const { pac_idade } = req.body
        const { pac_sexo } = req.body
        console.log("Nova Descrição: " + pac_descricao)

        await Pacientes.update({
            pac_descricao,
            pac_peso,
            pac_altura,
            pac_idade,
            pac_sexo,


        }, {
            where: { id: codigo_id}
        })

        return res.json({message: "Registro atualizado com sucesso!"})
     },

     async delete(req, res) {
        const { codigo_id } = req.params
        await Pacientes.destroy({
            where: {
                id: codigo_id
            }
        })

        return res.status(200).send({
            status: 1,
            message: 'Paciente deletado!!!'
        })

     },

     async indexId(req, res) {
        const { codigo_id } = req.params

        const pacientes = await Pacientes.findByPk(codigo_id)

        return res.json(pacientes)



     },
 
}

