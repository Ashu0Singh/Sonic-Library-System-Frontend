import React from "react";
import './navBar.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from "axios";
export default function Navbar(){
    const url = `http://${process.env.REACT_APP_ORIGIN_URL}:4000/logout`;
    const navigate = useNavigate();
    const [dataVisi,setDataVisi]=React.useState("false");
    function handleClick(){
        if(dataVisi==="false")
            setDataVisi(prev=>"true");
        else
            setDataVisi(prev=>"false");
    }
    function handleLogOut(){
        axios({
            method: 'post',
            url: url,
            headers: {'Content-Type': 'application/json'}, 
            withCredentials:true
        }).then(response=>{
            localStorage.setItem("isLoggedIn",JSON.stringify(response.data));
            navigate("/SonicLibrarySystem/");
        });
    }
    return(
        <div className="navBody">
            <motion.div className="navLeft" initial={{ x: '-100vw',opacity:0}} animate={{x:'0vw',opacity:1}} transition={{type:'spring', duration: 1.5, bounce:0}}>
                <span>Sonic Library System</span></motion.div>
            <motion.div className="navRight" initial={{ x: '+100vw',opacity:0}} animate={{x:'0vw',opacity:1}} transition={{type:'spring', duration: 1.5, bounce:0}}>
                <img src={process.env.PUBLIC_URL+"/images/userIcon.png"} alt="userIcon" />
                <span>Administrator</span>
                <img src={process.env.PUBLIC_URL+"/images/menuIcon.png"} onClick={handleClick} className="menuIcon" alt="menuIcon" />
                <div className="navPane"  data-visibility={dataVisi} >
                    <div className="navPaneTitle"><img src={process.env.PUBLIC_URL+"/images/closeIcon.png"} className="closeIcon" onClick={handleClick} alt="" /></div>
                    <div className="navPaneBody">
                        <div className="imageBg">
                            <img src={process.env.PUBLIC_URL+"/images/userIconBlack.png"} className="userIconBlack" alt="blackUser" />
                        </div>
                        <span className="navBodyText">Administrator</span>
                    </div>
                    <button className="navPaneButton" onClick={handleLogOut}>Logout</button>
                </div>
            </motion.div>
        </div>
    );
}
