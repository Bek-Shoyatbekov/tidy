import { DataTypes } from "sequelize";
import { sequelize } from "../utils/connectDb.js";
import { uuid } from "uuidv4";


const Group = sequelize.define("group", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid()
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    }

});


export default Group;


