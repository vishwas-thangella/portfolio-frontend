import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BASE from '../api/api';
import Lottie from "react-lottie";
import LoadingJson from '../Assets/JSON/loading.json';

const Projects = () => {

    const initial = {
        x: -300
    }

    const whileonScreen = {
        x: 0
    }

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const fetchData = () => {
        axios.get(`${BASE}/api/projects`).then(resp => {
            setLoading(false);
            setData(resp.data);
        }).catch(err => {
            console.log(err);
        })
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='bg-white'>
            <Header color="black" />
            <motion.h1 className='text-center text-3xl mt-3' initial={{ y: "-100vw" }} animate={{ y: 0 }} transition={{ delay: 0.1 }}>Projects</motion.h1>
            {!loading ? <div className='flex flex-row flex-wrap mt-10 justify-evenly md:p-10 gap-5 p-2'>
                {
                    data.map(proj => {
                        return (<motion.div className='w-auto h-auto p-4 shadow-xl rounded-xl border border-gray-200 pt-3 pl-3' initial={initial} whileInView={whileonScreen} key={proj.id}>
                            <h1 className='font-bold text-xl uppercase'>{proj.title}</h1>
                            <div className='container columns xl:columns-2'>
                                <div>
                                    <h1 className='mt-2 text-theme-300'>Technologies used</h1>
                                    <ul className='flex flex-col mt-5 text-xs gap-2'>
                                        {
                                            proj.technologies.split(",").map(itm => {
                                                return (<li key={itm}>{itm}</li>)
                                            })
                                        }
                                    </ul>
                                    <p className='mt-10'>{proj.description}</p>
                                </div>
                                <div className='pt-5 xl:pt-0 flex justify-center'>
                                    <motion.img src={proj.image} alt="" className='rounded-md' whileHover={{ scale: 1.5 }} />
                                </div>
                            </div>
                            <div className='flex flex-row gap-3 cursor-pointer pt-3'>
                                <Link to={proj.sourcecode} target='_blank'>
                                    <motion.i className="fa-brands fa-github hover:text-black cursor-pointer" whileHover={{ scale: 1.3 }}></motion.i>
                                </Link>
                                <h1>Source code</h1>
                            </div>
                        </motion.div>)
                    })
                }
            </div> : <div>
                <Lottie options={defaultOptions} width={300} height={300} />
            </div>}
        </div>
    );
};

export default Projects;