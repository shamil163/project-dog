'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Claim, Message,eventMessage }) {
      this.belongsTo(User, { foreignKey: "user_id" });
      this.hasMany(Claim, { foreignKey: " event_id" });
      this.hasMany(Message, { foreignKey: "event_id" });
      this.belongsToMany(Message, { through: eventMessage, foreignKey:"event_id" ,otherKey:"message_id"});
    }
  };
  Event.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    status: DataTypes.BOOLEAN,
    user_id: DataTypes.INTEGER,
    animal_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Event',
  });
  return Event;
};
