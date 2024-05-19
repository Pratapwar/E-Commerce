import userModel from "../models/userModel.js"
import { hashpassword , comparePassword} from '../helpers/authHelper.js';
import  JWT  from "jsonwebtoken";
//register new user
export const registerController = async(req , res) => {
    try {
        const {name , email , password , phone ,address} = req.body;
        if(!name){
            res.status(404).send({
                message: 'Name is required'
            })
        }
        if(!address){
            res.status(404).send({
                message: 'address is required'
            })
        }
        if(!email){
            res.status(404).send({
                message: 'email is required'
            })
        }
        if(!password){
            res.status(404).send({
                message: 'password is required'
            })
        }
        if(!phone){
            res.status(404).send({
                message: 'Phome Number  is required'
            })
        }
        const exisitingUser = await userModel.findOne({email});
        if(exisitingUser){
            return res.status(200).send({success: false, message: 'Already registered user'});

        }
       const hashedpassword = await hashpassword(password);
       const user = await new userModel({
        name ,
        email,
        phone,
        address,
        password : hashedpassword
       }).save();
       res.status(201).send({
        success: true,
        message: 'User registered Successfully',
        user
       })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: 'Error in Registration',
            error
        })
    }
}
//login function
export const loginController = async(req , res) => {
    try {
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: 'Invalid email or password'
            })
        }
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                message: "Email not Registered"
            })
        }
        const match = await comparePassword(password , user.password);
        if(!match){
            return res.status(200).send({
                message: 'Invalid Password'
            })
        }
        const token = await JWT.sign({_id: user._id , } , process.env.JWT_SECRET , {expiresIn: "2d"});
        res.status(200).send({
            success:true,
            message: 'login successfully',
            user:{
                name: user.name,
                email: user.email,
                phone: user.phone
            },
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message: 'Error login',
            error
        })
    }

}