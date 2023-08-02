import { DataTypes } from "sequelize";
import { sequelize } from "../utils/connectDb.js";
import { uuid } from "uuidv4";


const Lesson = sequelize.define("lesson", {
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
    cost: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    startsTime: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    },
    endsTime: {
        type: DataTypes.SMALLINT,
        allowNull: false,
    }

});


export default Lesson;


