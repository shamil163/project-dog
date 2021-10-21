'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventMessage extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Эта модель будет являться "проводником" для других двух(event , message)
    }
  };
  eventMessage.init({
    event_id: DataTypes.INTEGER,
    message_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'eventMessage',
  });
  return eventMessage;
};
