import bcrypt from 'bcrypt'

export function HashedPassword(password) {
    try {
        const saltRounds = 10;
        const hashedPassword = bcrypt.hashSync(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error)
    }
}

export function ComparePassword(password, hashedpassword) {
    try {
        const compare = bcrypt.compareSync(password, hashedpassword);
        return compare;
    } catch (error) {
        console.log(error)
    }
}