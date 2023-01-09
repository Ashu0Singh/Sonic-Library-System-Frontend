import React from "react";
import './signIn.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { motion } from 'framer-motion';

export default function SignIn(){
    const url = `http://${process.env.REACT_APP_ORIGIN_URL}:4000/signin`;
    const navigate=useNavigate();
    React.useEffect(() => {
        let isAuth = JSON.parse(localStorage.getItem('isLoggedIn')).isLoggedIn;
        if(isAuth && isAuth !== null) {
            navigate("/SonicLibrarySystem/dashboard");
        }
    }, [navigate]);
    const [creds,setCreds]=React.useState({email:"",password:""});
    function handleChange(event){
        setCreds(prev=>({
            ...prev,
            [event.target.name]:event.target.value
        }));
    }
    function handleLogin(){
        axios({
            method: 'post',
            url:url,
            headers: {'Content-Type': 'application/json'}, 
            withCredentials:true,
            data: {
                email:creds.email,
                password:creds.password
            }
        }).then(response=>{
            localStorage.setItem("isLoggedIn",JSON.stringify(response.data));
            navigate("/SonicLibrarySystem/dashboard");
        });
    }
    function handleClick(){
        navigate("/SonicLibrarySystem/");
    }
    function handleForgot(){
        //Adding functionality later :)
    }
    return(
        <div className="signInBody">
            <motion.div className="signHeader" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}} >
                <span className="headerText">Sonic Library System</span>
                <img className="homeIcon" src={process.env.PUBLIC_URL+"/images/homeIcon.png"} onClick={handleClick} alt="icon"/>
            </motion.div>
            <div className="signContent" >
                <motion.div className="leftField" initial={{ x: '-100vw',opacity:0}} animate={{x:0,opacity:1}} transition={{type:'spring', duration: 2, bounce:0}} >
                    <span>WELCOME BACK USER,<br/>LOGIN</span>
                </motion.div>
                <img src={process.env.PUBLIC_URL+"/images/midLine.png"} alt="midLine"/>
                <motion.div className="rightField" initial={{ x: '+100vw',opacity:0}} animate={{x:0,opacity:1}} transition={{type:'spring', duration: 2, bounce:0}} >
                    <input type="text" onChange={handleChange} placeholder="Email" name="email" className="boxEmail" />
                    <input type="password" onChange={handleChange} placeholder="Password" name="password" className="boxPass" />
                    <span className="forgotText" onClick={handleForgot} >Forgot Password?</span>
                    <button className="signInButton" onClick={handleLogin}>Login</button>
                </motion.div>
            </div>
        </div>
    );
}
