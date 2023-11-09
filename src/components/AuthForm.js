import { useState } from "react";
import { IoMail } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { BsFillEyeFill, BsFillEyeSlashFill,BsFillPersonFill } from "react-icons/bs";
import AuthComponentBtn from "./AuthComponentBtn";
import GoogleAuthButton from "./GoogleAuthButton";
import { Link } from "react-router-dom";
import {useUserLoginMutation,useUserRegisterMutation} from '../redux/authenticationrtk/UsersAuthApi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Loginform({ setLogForm, logForm }) {
  const [passwordToggle, setpasswordToggle] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginApi,{ mutate: UserLogin, isLoading: isLoginLoading }] = useUserLoginMutation();

  const handleLogin = async () => {
    try {
      const userLoginData = {
        email: email,
        password: password,
      };
      const response = await LoginApi(userLoginData);
      const token = response.data.access;
      localStorage.setItem("token", token);
      console.log(response.data.access);
     


      toast.success('Login successful', {
        position: 'top-center',
        autoClose: 3000,
      });
      console.log("Login response:", response);
      window.location.reload();
    } catch (error) {
      toast.error('Login failed. Please check your credentials.', {
        position: 'top-center',
        autoClose: 3000,
      })
    }
  };
  console.log("hello from login");
  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[49%]'>
        <h4 className="font-medium text-[36px] mb-[7px]">Log In</h4>
        <p className="text-custom-text">Elevate Your Brand with Premium Printing Solutions</p>
        <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mt-[24px] mb-[20px]">
        <IoMail/>
        <input type="text" name="email" placeholder="Username or Email Address" className="text-black focus:outline-none px-[12px] w-full"  onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mb-[40px]">
        <FaLock className="text-[#D0D0D0]"/>
        <input type={passwordToggle? 'password' : 'text'} name="password" placeholder="Password"  className="text-black focus:outline-none px-[12px] w-full"  onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={()=>{setpasswordToggle(!passwordToggle)}}>{passwordToggle ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</button>
      </div>
      <div onClick={handleLogin}>
      <AuthComponentBtn>Login</AuthComponentBtn>
      </div>
      <p className="font-medium text-[14px] cursor-pointer text-custom-text mt-[15px]">Forgot Password?</p>
      <div className="flex w-full justify-center items-center mt-[1px]">
        <hr className="border-t border-grayLight w-[57px]"/>
        <span className="mx-[10px] text-custom-text-grey">or</span>
        <hr className="border-t border-grayLight w-[57px]"/>
      </div>
      <GoogleAuthButton><span className="font-medium">Log in with Google</span></GoogleAuthButton>
      <p className="font-medium text-[14px] text-custom-text-grey mt-[20px]">New to InkPrint? <button onClick={() => { setLogForm(!logForm) }} className="text-custom-text">Register here!</button></p>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </div>
    
  )
}

function SignupForm({ setLogForm, logForm }) {
  const [passwordToggle, setpasswordToggle] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [username, setUsername] = useState("");
  const [RegisterApi, { mutate: UserLogin, isLoading: isLoginLoading }] = useUserRegisterMutation();
  
  const handleRegister = async () => {
    try {
      if (password.length < 8) {
        toast.error('Password must be 8 character', {
          position: 'top-center',
          autoClose: 3000,
        })
        return;
      }

      if (password !== password2) {
        toast.error('Comfirm Password not match', {
          position: 'top-center',
          autoClose: 3000,
        })
        return;
      }
      if (!email.includes('@')) {
        toast.error('Invalid email address', {
          position: 'top-center',
          autoClose: 3000,
        });
        return;
      }

      const userRegister = {
        email: email,
        password: password,
        password2: password2,
        username: username
      };

      const response = await RegisterApi(userRegister);

      console.log("Register response:", response.data.access);

      localStorage.setItem("Register_token",response.data.access)
      toast.success('Registration successful', {
        position: 'top-center',
        autoClose: 3000,
      });
      
      if (response.data) {
        setEmail("");
        setPassword("");
        setPassword2("");
        setUsername("");
        alert("Register Successful");
        window.location.reload();
      }

     
    } catch (error) {
      toast.error(error, {
        position: 'top-center',
        autoClose: 3000,
      })
    }
  }

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <div className='w-[50%]'>
        <h4 className="font-medium text-[36px] mb-[7px]">Sign Up</h4>
        <p className="text-custom-text">Elevate Your Brand with Premium Printing Solutions</p>
        <GoogleAuthButton><span className="font-medium">Sign up with Google</span></GoogleAuthButton>
        <div className="flex w-full justify-center items-center mt-[15px] mb-[15px]">
          <hr className="border-t border-grayLight w-[57px]" />
          <span className="mx-[10px] text-custom-text-grey">or</span>
          <hr className="border-t border-grayLight w-[57px]" />
        </div>
        <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mt-[10px] mb-[1px]">
        <BsFillPersonFill />
          <input type="text" name="username" placeholder="Username" className="text-black focus:outline-none px-[12px] w-full" onChange={(e) => setUsername(e.target.value)} value={username} />
        </div>
        <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mt-[10px] mb-[10px]">
          <IoMail />
          <input type="text" name="email" placeholder="Your Email Address" className="text-black focus:outline-none px-[12px] w-full" onChange={(e) => setEmail(e.target.value)} value={email} />
        </div>
        <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mb-[12px]">
          <FaLock className="text-[#D0D0D0] w-4 h-4" />
          <input type={passwordToggle ? 'password' : 'text'} name="password" placeholder="Password" className="text-black focus:outline-none px-[12px] w-full" onChange={(e) => setPassword(e.target.value)} value={password} />
          <button onClick={() => { setpasswordToggle(!passwordToggle) }}>{passwordToggle ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</button>
        </div>
        <div className="flex items-center w-full border-grayMid border rounded-lg text-custom-text-grey px-[12px] py-[6px] mb-[12px]">
          <FaLock className="text-[#D0D0D0] w-4 h-4" />
          <input type={passwordToggle ? 'password' : 'text'} name="password" placeholder="Confirm Password" className="text-black focus:outline-none px-[12px] w-full" onChange={(e) => setPassword2(e.target.value)} value={password2} />
          <button onClick={() => { setpasswordToggle(!passwordToggle) }}>{passwordToggle ? <BsFillEyeSlashFill /> : <BsFillEyeFill />}</button>
        </div>
        <p className="text-[12px] text-custom-text-grey mb-[15px]">By signing up, I agree to the <Link className="decoration-solid underline" to="/termsandconditions">Terms of Service</Link> and <Link className="decoration-solid underline" to="/privacypolicy">Privacy Policy</Link>.</p>
        <div onClick={handleRegister}>
          <AuthComponentBtn>Sign up</AuthComponentBtn>
        </div>
        <p className="font-medium text-[14px] text-custom-text-grey mt-[15px]">Have an account? <button onClick={() => { setLogForm(!logForm) }} className="text-custom-text">Login now!</button></p>
      </div>
      <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} />
    </div>
  );
}

function AuthForm({ isLogin, setLogForm, logForm }) {
  if (isLogin) {
    return <Loginform logForm={logForm} setLogForm={setLogForm} />
  }
  else {
    return <SignupForm logForm={logForm} setLogForm={setLogForm} />
  }
}

export default AuthForm