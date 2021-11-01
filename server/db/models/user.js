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
      this.hasOne(Role, { foreignKey: " role_id" });
      this.hasMany(Event, { foreignKey: " user_id" });
      this.hasMany(Claim, { foreignKey: " user_id" });
      this.hasMany(Message, { foreignKey: " user_id" });
    }
  };
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      role_id: {
        type: DataTypes.INTEGER,
      },
      photo: {
        type: DataTypes.STRING,
      },
      geolocation: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
