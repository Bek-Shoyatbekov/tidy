import { sequelize, testDbConnection } from "../utils/connectDb.js";

// Relations

import Group from "./group.model.js";
import Lesson from "./lesson.model.js";
import Payment from "./payment.model.js";
import Register from "./register.model.js";
import Student from "./student.model.js";
import Teacher from "./teacher.model.js";

Teacher.hasMany(Student);
Student.belongsTo(Teacher);

Teacher.hasMany(Lesson);
Lesson.belongsTo(Teacher);

Group.hasMany(Student);


Teacher.hasMany(Register);


Student.hasMany(Payment);


Teacher.hasMany(Payment);


Register.hasMany(Student);
Register.belongsTo(Student);

Lesson.hasMany(Register);
Register.belongsTo(Lesson);

const db = {
    sync: (isForce) => {
        sequelize.sync({ force: isForce })
    },
    test: testDbConnection,
    seq: sequelize
}

export { db };