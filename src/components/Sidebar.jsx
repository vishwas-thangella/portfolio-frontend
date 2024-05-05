import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const route = window.location.href.split("/")[3];

    return (
        <div className='w-40 absolute bg-white top-0 bottom-0 z-10 p-2 transition-all rounded duration-400' style={{ height: "100vh",marginLeft:"-200px" }} id="sidebar">
            <h1 className='text-right cursor-pointer'><span className='material-symbols-outlined text-theme-300' onClick={()=>{
                document.getElementById("sidebar").style.marginLeft = "-200px";
            }}>close</span></h1>
            <div className='mt-4 flex flex-col justify-center items-center gap-5'>
                <Link to="/">
                    <motion.div className={`flex flex-row items-center gap-3 p-1 w-full rounded px-7 ${route === "" && "bg-purple-100"}`} whileHover={{ scale: 1.2 }}>
                        <span className='material-symbols-outlined text-gray-600'>home</span>
                        <motion.h1 className='cursor-pointer'>Home</motion.h1>
                    </motion.div>
                </Link>
                <Link to="/blogs">
                    <motion.div className={`flex flex-row items-center gap-3 p-1 w-full rounded px-7 ${route === "blogs" && "bg-purple-100"}`} whileHover={{ scale: 1.2 }}>
                        <span className="material-symbols-outlined text-gray-600">
                            newspaper
                        </span>
                        <motion.h1 className='cursor-pointer'>Blogs</motion.h1>
                    </motion.div>
                </Link>
                <Link to="/about">
                    <motion.div className={`flex flex-row items-center gap-3 p-1 w-full rounded px-7 ${route === "resume" && "bg-purple-100"}`} whileHover={{ scale: 1.2 }}>
                        <span className="material-symbols-outlined text-gray-600">
                            assignment_returned
                        </span>
                        <motion.h1 className='cursor-pointer'>About</motion.h1>
                    </motion.div>
                </Link>
                <Link to="/projects">
                    <motion.div className={`flex flex-row items-center gap-3 p-1 w-full rounded px-7 ${route === "projects" && "bg-purple-100"}`} whileHover={{ scale: 1.2 }}>
                        <span className="material-symbols-outlined text-gray-600">
                            developer_mode_tv
                        </span>
                        <motion.h1 className='cursor-pointer'>Projects</motion.h1>
                    </motion.div>
                </Link>
                <Link to="/contact">
                    <motion.div className={`flex flex-row items-center gap-3 p-1 w-full rounded px-7 ${route === "contact" && "bg-purple-100"}`} whileHover={{ scale: 1.2 }}>
                        <span className="material-symbols-outlined text-gray-600">
                            connect_without_contact
                        </span>
                        <motion.h1 className='cursor-pointer'>Contact</motion.h1>
                    </motion.div>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;