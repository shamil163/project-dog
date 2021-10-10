'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User,Event,eventMessage }) {
     this.belongsTo(User, { foreignKey: "user_id" }); 
     this.belongsTo(Event, { foreignKey: "event_id" }); 
     this.belongsToMany(Event, { through: eventMessage, foreignKey:"message_id" ,otherKey:"event_id"});

    }
  };
  Message.init({
    text: DataTypes.TEXT,
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
