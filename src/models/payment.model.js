import { DataTypes } from "sequelize";
import { sequelize } from "../utils/connectDb.js";
import { uuid } from "uuidv4";


const Payment = sequelize.define("payment", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: uuid()
    },
    teacher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lesson: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pdf: {
        type: DataTypes.STRING,
    }
});

export default Payment;
