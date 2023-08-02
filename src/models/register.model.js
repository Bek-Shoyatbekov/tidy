import { DataTypes } from "sequelize";
import { sequelize } from "../utils/connectDb.js";
import { uuid } from "uuidv4";

// TODO how to do this

const Register = sequelize.define("register", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid()
    },
    startedMonth: {
        type: DataTypes.DATE,
        allowNull: false,
    }
});


export default Register;


