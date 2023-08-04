
import Admin from "../models/admin.model.js";
import Student from "../models/student.model.js";
import Teacher from "../models/teacher.model.js";

/**
 * @constant {object} dataParam
 * data params for documentation
 * 
 */
const dataParam = {
    firstName: "",
    lastName: "",
    password: "",
    phoneNumber: 0,
    level: "",
    profileImage: "",
    email: "",
    accessToken: "",
    refreshToken: "",
};

const roleParam = "admin" || "teacher" || "student";

/**
 * 
 * @param {dataParam} data 
 * @param {roleParam} role 
 */

async function createNewUser(data, role) {
    try {
        let user;
        switch (role) {
            case "student":
                user = await Student.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: data.password,
                    phoneNumber: data.phoneNumber,
                    level: data.level || "",
                    profileImage: data.profileImage || "../public/imgs/student_default_profile_image.png",
                    status: "active",
                    email: data.email || "",
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                });
                break;
            case "teacher":
                user = await Teacher.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: data.password,
                    phoneNumber: data.phoneNumber,
                    level: data.level || "",
                    profileImage: data.profileImage || "../public/imgs/teacher_default_profile_image.png",
                    status: "active",
                    email: data.email || "",
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                });
                break;
            case "admin":
                user = await Admin.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password: data.password,
                    phoneNumber: data.phoneNumber,
                    level: data.level || "",
                    profileImage: data.profileImage || "../public/imgs/admin_default_profile_image.png",
                    status: "active",
                    email: data.email,
                    isVerified: false,
                    accessToken: data.accessToken,
                    refreshToken: data.refreshToken,
                });
                break;
            default:
                throw new Error("There is no such Use case at all !")
        }
        const result = await user.save();
        console.log(`\n User has been saved! \n`)
        return result;
    } catch (err) {
        return err;
    }
}