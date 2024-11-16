// models/Result.js
const { DataTypes } = require("sequelize");
const { sequelize } = require("./db");

const Result = sequelize.define(
  "Result",
  {
    values: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    weights: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    result: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Result;
