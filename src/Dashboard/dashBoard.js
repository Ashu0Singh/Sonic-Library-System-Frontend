import React from "react";
import './dashBoard.css';
import Navbar from "../Navbar/navBar";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
export default function Dashboard(){
    const navigate = useNavigate();
    function handleRedirect(){
        navigate("/SonicLibrarySystem/sector1");
    }
    function handleConstruction(){
        navigate("/SonicLibrarySystem/sectorUnderConstruction");
    }
    return(
        <div className="dashboardBody">
            <Navbar/>
            <div className="lowerDash">
                <motion.div className="sectorBody" initial={{ y: '-20vh',opacity:0}} animate={{y:'0vh',opacity:1}} transition={{type:'spring', duration: 3, bounce:0.3}}>
                    <div className="sector" onClick={handleRedirect}>
                        <span>Sector - 1</span>
                    </div>
                    <div className="sector" onClick={handleConstruction}>
                        <span>Sector - 2</span>
                    </div>
                    <div className="sector" onClick={handleConstruction}>
                        <span>E- Library</span>
                    </div>
                    <div className="sector" onClick={handleConstruction}>
                        <span>Discussion<br/>Room</span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}