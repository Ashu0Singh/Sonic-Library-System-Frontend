import React from "react";
import Navbar from "../Navbar/navBar";
import './sectorUnderConstruction.css';
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function SectorUnderConstruction(){
    return(
        <div className="sector1Body">
            <Navbar/>
            <div className="sector1MainBody">
                <motion.div className="arrowTitle" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}} >
                    <Link to="/SonicLibrarySystem/dashboard">
                    <img src={process.env.PUBLIC_URL+"/images/backArrowIcon.png"} className="backArrowIcon" alt="logo"/>
                    </Link>
                    <span>To be added</span>
                </motion.div>
                <div className="sectorSubBody">
                    <motion.div className="sectorContainer" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}} >
                        <span className="conText">UNDER CONSTRUCTION</span>
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