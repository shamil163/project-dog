'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Animal, Role, Event, Claim, Message }) {
      this.hasMany(Animal, { foreignKey: " user_id" });
      this.belongsTo(Role, { foreignKey: " role_id" });
      this.hasMany(Event, { foreignKey: " user_id" });
      this.hasMany(Claim, { foreignKey: " user_id" });
      this.hasMany(Message, { foreignKey: " user_id" });
    }
  };
  User.init(
    {
      name: DataTypes.STRING,
      title: DataTypes.TEXT,
      email: DataTypes.STRING,
      password: DataTypes.TEXT,
      role_id: DataTypes.INTEGER,
      photo: DataTypes.STRING,
      geolocation: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
