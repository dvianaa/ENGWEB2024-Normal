const Contrato = require('../models/contrato');

module.exports.list = () => {
    return Contrato
        .find()
        .exec();
}

module.exports.findById = id => {
    return Contrato
        .findOne({ _id: id })
        .exec();
}

module.exports.findByEntidade = entidade => {
    return Contrato
        .find({ entidade_comunicante: entidade })
        .exec();
}

module.exports.findByNIPC = async (nipc) => {
    try {
      const contracts = await Contrato.find({ NIPC_entidade_comunicante: nipc }).exec();
      return contracts;
    } catch (error) {
      throw error;
    }
  };

module.exports.findByTipo = tipo => {
    return Contrato
        .find({ tipoprocedimento: tipo })
        .exec();
}

module.exports.listUniqueEntidades = () => {
    return Contrato
        .find()
        .distinct('entidade_comunicante')
        .sort()
        .exec();
}

module.exports.listUniqueTipos = () => {
    return Contrato
        .find()
        .distinct('tipoprocedimento')
        .sort()
        .exec();
}

module.exports.create = contrato => {
    return Contrato
        .create(contrato);
}

module.exports.deleteById = id => {
    return Contrato
        .deleteOne({ _id: id })
        .exec();
}

module.exports.updateById = (id, contrato) => {
    return Contrato.findByIdAndUpdate(id, contrato)
}





