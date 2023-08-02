import { DataTypes } from "sequelize";
import { sequelize } from "../utils/connectDb.js";
import { uuid } from "uuidv4";


const News = sequelize.define("news", {
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
        allowNull: false
    },
    img: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    video: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: true
    },
    likes: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 0
    }
});

export default News;
