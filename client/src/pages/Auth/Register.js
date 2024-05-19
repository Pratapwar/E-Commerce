import React , { useState }from 'react'
import Layout from '../../components/Layout/Layout';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
const Register = () => {
    const [name , setName] = useState("");
    const [email , setemail] = useState("");
    const [password , setpassword] = useState("");
    const [phone , setphone] = useState("");
    const [address , setaddress] = useState("");
    const navigate = useNavigate()
    // form function

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
           const res = await axios.post("/api/v1/auth/register" ,{name , email , password , phone , address});
           if(res.data.success){
            toast.success(res.data && res.data.message)
            navigate("/login");
           }else{
            toast.error(res.data.message)
           }
        } catch (error) {
            console.log(error);
            toast.error("Something Went Wrong")
        }
    };
  return (
    <Layout title= 'Register -Ecoomerece App'>
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
    <h1>Register Page</h1>
  <div className="mb-3">
    <input type="text" value = {name} onChange = {(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' required/>
  </div>
  <div className="mb-3">
    <input type="email" value = {email} onChange = {(e) => setemail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' required/>
  </div>
  <div className="mb-3">
    <input type="password" value = {password} onChange = {(e) => setpassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter Your Password' required/>
  </div>
  <div className="mb-3">
    <input type="text" value = {phone} onChange={(e) => setphone(e.target.value)} className="form-control" id="exampleInputEmail1"  placeholder='Enter Your Phone No' required/>
  </div>
  <div className="mb-3">
    <input type="text" value = {address} onChange={(e) => setaddress(e.target.value)} className="form-control" id="exampleInputEmail1"  placeholder='Enter Your Address' required/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
</div>
    </Layout>
        
  )
}

export default Register