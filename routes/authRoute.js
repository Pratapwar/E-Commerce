import express from 'express'
import {registerController , loginController} from "../controllers/authController.js"
import { requireSignIn , isAdmin} from '../middleware/authMiddleware.js';
const router = express.Router();

 router.post('/register' , registerController);
router.post('/login' , loginController);
//protected route 
router.get('/user-auth' , requireSignIn , (req , res) =>{
    res.status(200).send({ok : true});
})
export default router;
