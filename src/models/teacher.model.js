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
    bio: {
        type: DataTypes.STRING
    },
    profileImage: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    experience: {
        type: DataTypes.INTEGER,
        allowNull: true,
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
    },
    accessToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
    refreshToken: {
        type: DataTypes.STRING,
        allowNull: true
    },
});



export default Teacher;
