'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("eventMessages", {
      event_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Events", // Название модели, на которую указываем
          key: "id", // Колонка (ключ) в целевой модели, на которую указываем
        },
        onUpdate: "CASCADE", // Каскадное обновление и удаление
        onDelete: "SET NULL",
      },
      message_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Messages", // Название модели, на которую указываем
          key: "id", // Колонка (ключ) в целевой модели, на которую указываем
        },
        onUpdate: "CASCADE", // Каскадное обновление и удаление
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('eventMessages');
  }
};
