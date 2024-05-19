import mongoose from "mongoose";
const connectDB = async () =>{
    try{
     const connection = await mongoose.connect(process.env.MONGO_URL);
     console.log(`Connection done succesfully`);
    }catch(error){
        console.log(`Error in Connection ${error}`)
    }
}
export default connectDB;