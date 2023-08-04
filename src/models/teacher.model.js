import { DataTypes } from "sequelize";
import { sequelize } from "../utils/connectDb.js";
import { uuid } from "uuidv4";


const Teacher = sequelize.define("teacher", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid()
    },
    firstName: {
        type: DataTypes.STRING,
        max: 50,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    level: {
        type: DataTypes.STRING,
        max: 40
    },
    profileImage: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    status: {
        type: DataTypes.ENUM("active", "inactive", "banned"),
        defaultValue: "inactive"
    },
    online: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});



export default Teacher;
