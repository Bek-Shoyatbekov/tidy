import bcrypt from "bcrypt";




export const hashPassword = async (password) => {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    return hashedPassword;
}

export const compareHashedPassword = async (password, hashedPassword) => {
    const result = await bcrypt.compare(password, hashedPassword);
    return result;
}


// Some tests to ensure they work as I think

// let result = await hashPassword("bekzodbek01");

// console.log(result);

// let compareResult = await compareHashedPassword("bekzodbek01", result);

// console.log(compareResult);



