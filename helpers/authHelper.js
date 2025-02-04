import bcrypt from 'bcrypt'

export const hashpassword = async(password) =>{
    try{
        const hashedPassword = await bcrypt.hash(password , 10);
        return hashedPassword;
    }catch(error){
        console.log(error);
    }
}

export const comparePassword = async(password , hashedPassword) => {
    return bcrypt.compare(password , hashedPassword);
}