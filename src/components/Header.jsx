import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink } from 'react-router-dom';

const Header = props =>{

    const initial = {scale:0.4};
    const animate = {scale:1};
    const transition = {type:"spring",stiffness:200};

    return(
        <motion.div className='h-20 flex flex-row items-center md:p-10 justify-between w-full px-3'>
            <motion.div className='flex flex-row items-center gap-2 md:gap-5'>
                <motion.span className='material-symbols-outlined hover:text-theme-200 cursor-pointer block md:hidden' initial={initial} animate={animate} transition={transition} onClick={()=>{
                    document.getElementById("sidebar").style.marginLeft = "0px";
                }}>menu</motion.span>
                <NavLink to="/"><motion.h1 className='text-4xl kreon text-black' initial={initial} animate={animate} transition={transition}><span className='text-4xl text-theme-300'>P</span>ortfolio.</motion.h1></NavLink>
            </motion.div>
            <motion.div>
                <motion.ul className={`flex flex-rowitems-center md:gap-5 text-gray-500`}>
                    <Link to="/"><motion.li className='cursor-pointer hidden md:block p-2' initial={initial} animate={animate} transition={transition} whileHover={{scale:1.5,color:"#9754CB"}}>Home</motion.li></Link>
                    <Link to="/projects"><motion.li className='cursor-pointer hidden md:block p-2' initial={initial} animate={animate} transition={transition} whileHover={{scale:1.5,color:"#9754CB"}}>Projects</motion.li></Link>
                    <Link to="/about"><motion.li className='cursor-pointer p-2' initial={initial} animate={animate} transition={transition} whileHover={{scale:1.5,color:"#9754CB"}}>About</motion.li></Link>
                    <Link to="/blogs"><motion.li className='cursor-pointer hidden md:block p-2' initial={initial} animate={animate} transition={transition} whileHover={{scale:1.5,color:"#9754CB"}}>Blogs</motion.li></Link>
                    <Link to="/contact"><motion.li className='cursor-pointer p-2 rounded text-white bg-theme-300' initial={initial} animate={animate} transition={transition} whileHover={{scale:1.3,backgroundColor:"white",color:"black",border:"1px solid black"}}>Contact</motion.li></Link>
                </motion.ul>
            </motion.div>
        </motion.div>
    );
};

export default Header;