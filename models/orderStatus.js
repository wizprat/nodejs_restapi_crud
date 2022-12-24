const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order_status', {
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order_items',
        key: 'id'
      }
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'master_status',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'order_status',
    timestamps: false,
    indexes: [
      {
        name: "order_id",
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "status_id",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
