const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Communication extends Model {}

Communication.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    communicationMethod: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    dateOfCommunication: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    followUpNeeded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },

    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Student",
        key: "id",
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Communication",
  }
);

module.exports = Communication;
