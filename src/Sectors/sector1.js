import React from "react";
import Navbar from "../Navbar/navBar";
import './sector1.css';
import { Link } from "react-router-dom";
import clientSocket from 'socket.io-client';
import { motion } from "framer-motion";
export default function Sector1(){
    const url = `http://${process.env.REACT_APP_ORIGIN_URL}:4000/`;
    const [style,setStyle]=React.useState({backgroundColor:'rgba(20, 255, 0, 0.8)'});
    React.useEffect(() => {
        const socket=clientSocket(url);
        socket.on('dataArduino',response=>{
            if(response.data.noiseLevel==="MID" && style.backgroundColor !=='rgba(255, 49, 49, 0.8)')
                setStyle(prev=>({backgroundColor:'rgba(255, 138, 0, 0.8)'}));
            else if(response.data.noiseLevel==="HIGH")
                setStyle(prev=>({backgroundColor:'rgba(255, 49, 49, 0.8)'}));
        });
            // eslint-disable-next-line
    },[]);
    function handleClick(){
        setStyle(prev=>({backgroundColor:'rgba(20, 255, 0, 0.8)'}));
    }
    return(
        <div className="sector1Body">
            <Navbar/>
            <div className="sector1MainBody">
                <motion.div className="arrowTitle" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}} >
                    <Link to="/SonicLibrarySystem/dashboard">
                    <img src={process.env.PUBLIC_URL+"/images/backArrowIcon.png"} className="backArrowIcon" alt="logo"/>
                    </Link>
                    <span>Sector - 1</span>
                </motion.div>
                <div className="sectorSubBody">
                    <motion.div className="sectorContainer" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}} >
                        <div className="sector1" ><span>1</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1" style={style} onClick={handleClick} ><span>2</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>3</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>4</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>5</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>6</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>7</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                        <div className="sector1"><span>8</span>
                            <img src={process.env.PUBLIC_URL+"/images/tableIcon.png"} alt="tableIcon" />
                        </div>
                    </motion.div>
                </div>
                <motion.div className="sectorFooter" initial={{ y: '+20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}} >
                    <div><span className="footerTitle" >Terminology</span></div>
                    <div className="footerBody" >
                        <div className="colorFoot">
                            <div className="colorG"></div>
                            <span>Silent and no need to<br/>monitor</span>
                        </div>
                        <div className="colorFoot">
                            <div className="colorY"></div>
                            <span>Moderate and might need<br/>monitoring</span>
                        </div>
                        <div className="colorFoot">
                            <div className="colorR"></div>
                            <span>High and needs to be<br/>monitored</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
} 