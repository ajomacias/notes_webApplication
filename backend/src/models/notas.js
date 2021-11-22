const sequelize = require('../database/db');
const { Model, DataTypes } = require('sequelize');

class note extends Model { }
note.init({
    title_nota: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references:{
            model:'users',
            key: 'id_user'
        }
    },
    text_nota: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    importance_nota: {
        type: DataTypes.STRING,
    }
}, {
    sequelize,
    modelName: "note"
}
)

module.exports = note;