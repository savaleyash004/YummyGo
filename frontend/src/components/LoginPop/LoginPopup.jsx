import React, { useContext, useState } from 'react'
import './loginPopup.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"


const LoginPopup = ({setShowLogin}) => {

    const {url,setToken} = useContext(StoreContext);

    const [currState,setCurrState] = useState("Sign-up")
    const [data,setData] = useState ({
        name:"",
        email:"",
        password:""
    })
    
    const onChangeHandler = (event) => {
        const name =  event.target.name;
        const value = event.target.value
        setData(data=>({...data,[name]:value}))
    }
    
    const onLogin = async (event) => {

        event.preventDefault()
        let newUrl = url;
        if(currState==="Login"){
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl,data);
        
        if(response.data.success) {
                setToken(response.data.token);
                localStorage.setItem("token",response.data.token);
                setShowLogin(false)
            }
            else{
                alert(response.data.message);
            }
    }

    // useEffect(()=>{
    //     console.log(data);
    // },[data])

    // Sign-up or Login
  return (
    <div className='login-popup'>
    <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        <div className="login-popup-inputs">
            {currState==="Login"?<></>:<input name='name' onChange={onChangeHandler} value={data.name} type='text' placeholder='Your Name' required/>}
            {/* <input type="text" placeholder='your Name' required/> */}
            <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='password' required />

        </div>
        <button type='submit' >{currState==="Sign-up"?"Create account":"Login"}</button>
        <div className="login-popup-condit">
            <input type="checkbox" required/>
            <p>By continuing, I agree to the terms and conditions</p>
        </div>
        {currState==="Login"?
        <p>create a new Account? <span onClick={()=>setCurrState("Sign-up")} span>Click Here</span></p>:
        <p>Already Have An Account?<span onClick={()=>setCurrState("Login")} span>Login</span></p>
        }
    </form>
    </div>
  )
}

export default LoginPopup
