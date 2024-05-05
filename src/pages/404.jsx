import React from "react";
import Lottie from "react-lottie";
import animationJson from "../Assets/JSON/nopage.json";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const PagenotFound = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div>
            <Header color="black"/>
            <motion.div animate={{scale:1}} initial={{scale:0.5}}>
                <Lottie options={defaultOptions} height={320} width={320} />
            </motion.div>
            <motion.h1 className="text-center" initial={{x:"-100vw"}} animate={{x:0}} transition={{type:"spring",stiffness:150}}>Uh-oh! Looks like you're off the map 😔</motion.h1>
            <div className="flex flex-row items-center justify-center mt-10">
                <Link to="/"><motion.button className="p-2 rounded bg-theme-300 text-white text-base font-bold" whileHover={{scale:1.4}}>Home</motion.button></Link>
            </div>
        </div>
    );
};

export default PagenotFound;
