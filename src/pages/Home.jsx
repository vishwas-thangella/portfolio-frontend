import React, { useEffect, useState } from 'react';
import compTyping from '../Assets/JSON/comptyping.json';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import TypeWritter from 'typewriter-effect';
import Header from '../components/Header';


const Home = props =>{

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: compTyping,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [width,setWidth] = useState("");

    const setDimensions = () =>{
        setWidth(window.window.innerWidth);
    }

    useEffect(()=>{
        setDimensions();
    },[]);

    window.addEventListener("resize",setDimensions);

    return(
        <div className='hmeCon'>
            <Header color="white"/>
            <div className='container mx-auto md:columns-2 flex flex-col-reverse md:flex-col-reverse justify-between px-10 md:pt-32 items-center lg:flex-row'>
                <div className='md:text-4xl pb-10'>
                    <motion.div initial={{x:"-100vw"}} animate={{x:0}}>
                        <h1 className='md:text-4xl text-xl mt-10'>Hi 👋🏻 ,<br /> Iam {props.data.fullname}</h1>
                        <h1 className='md:mt-7 md:text-5xl text-3xl w-full xl:text-50 mt-2'>Iam a <span className='text-theme-300 font-bold'><TypeWritter options={{
                            strings:props.data.keywords.toString().split(","),
                            autoStart:true,
                            loop:true
                        }}/></span></h1>
                    </motion.div>
                    <div className='mt-10 flex flex-row'>
                        <motion.button className='bg-theme-300 rounded text-white p-4 md:text-base' initial={{scale:0}} animate={{scale:1}} whileHover={{scale:1.2,backgroundColor:"white",border:"1px solid black",color:"gray"}}>Download CV</motion.button>
                    </div>
                    <motion.p className='text-base mt-10' initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}}>{props.data.description}</motion.p>
                </div>
                <motion.div initial={{scale:0}} animate={{scale:1}} className='flex flex-row items-center justify-center'>
                    <Lottie options={defaultOptions} width={(width > 300 && width < 700) ? 340 : 500} height={(width > 300 && width < 700) ? 350 : 500}/>
                </motion.div>
            </div>
            <h1 className='text-center text-3xl font-bold'>Skills</h1>
            <motion.div className='container md:columns-2 items-center justify-evenly mx-auto lg:mt-10 mt-5 flex-row flex flex-wrap gap-5 p-10' initial={{x:-200}} whileInView={{x:0}} transition={{type:"spring",stiffness:140}}>
                {
                    props.skills.map(skill=><motion.img src={skill.image} className='w-10 h-10' whileHover={{scale:1.4,cursor:"pointer"}} key={skill.id}/>)
                }
            </motion.div>
        </div>
    );
};

export default Home;