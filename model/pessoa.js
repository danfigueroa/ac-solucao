const mongoose = restful.mongoose

const PessoaSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        require: true 
    },

    dataNascimento: { 
        type: Date, 
        default: Date.now, 
        required: true 
    },

    endereco: {
        type: String,
        required: true
    },

    descricao: {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Pessoa', PessoaSchema)
