const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Assignment extends Model {}

Assignment.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    dueDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },

    assignedStatus: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "Assignment",
  }
);

module.exports = Assignment;
