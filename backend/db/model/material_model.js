const { Model } = require('objection');

class Material extends Model {
  // Table name is the only required property.
  static get tableName() {
    return 'material';
  }

  static get idColumn() {
    return 'id';
  }

  static get nomeColumn() {
    return 'nome';
  }

  static get quantidadeColumn() {
    return 'quantidade';
  }

  static get precoColumn() {
    return 'preco';
  }
}

module.exports = Material;
