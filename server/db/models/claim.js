'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Claim extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Event }) {
     this.belongsTo(User, { foreignKey: " user_id" });  
     this.belongsTo(Event, { foreignKey: " event_id" }); 
    }
  };
  Claim.init({
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Claim',
  });
  return Claim;
};
