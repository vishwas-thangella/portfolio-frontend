import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import axios from "axios";
import Lottie from "react-lottie";
import LoadingJson from "../Assets/JSON/loading.json";
import BASE from "../api/api";

const About = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [data, setData] = useState();

    const FetchData = async () => {
        axios
            .get(`${BASE}/api/about`)
            .then((resp) => {
                setLoading(false);
                setData(resp.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        FetchData();
    }, []);

    return (
        <div>
            <Header />
            {!loading ? (
                <div className="container p-3">
                    <motion.h1
                        className="text-2xl text-theme-300 uppercase mt-10 font-bold text-center"
                        animate={{ scale: 1 }}
                        initial={{ scale: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Education
                    </motion.h1>
                    <div className="flex flex-row flex-wrap justify-evenly pt-4">
                        {!loading &&
                            data &&
                            data.education.map((education) => {
                                return (
                                    <motion.div
                                        className="w-minScr h-auto border-theme-200 rounded mx-auto mt-5 p-3"
                                        initial={{ scale: 1, x: "-100vw" }}
                                        whileHover={{ scale: 1.3, cursor: "pointer" }}
                                        animate={{ x: 0 }}
                                        whileInView={{ x: 0 }}
                                    >
                                        <h1 className="text-xs">
                                            {education.startYear} - {Number(education.endYear) > new Date().getFullYear() ? "Present" : education.endYear}
                                        </h1>
                                        <h1 className="font-bold mt-2">
                                            {education.instituteName}
                                        </h1>
                                        <h1 className="mt-2">{education.location}</h1>
                                        <h1 className="mt-2">{education.degree}</h1>
                                        <h1 className="mt-2">{education.stream}</h1>
                                    </motion.div>
                                );
                            })}
                    </div>
                    <motion.h1
                        className="text-2xl text-theme-300 uppercase mt-10 font-bold text-center"
                        animate={{ scale: 1 }}
                        initial={{ scale: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        Experience
                    </motion.h1>
                    <div className="flex flex-row flex-wrap justify-evenly pt-4">
                        {!loading &&
                            data &&
                            data.experiences.map((experience) => {
                                return (
                                    <motion.div
                                        className="w-minScr h-auto border-theme-200 rounded mx-auto mt-5 p-3"
                                        initial={{ scale: 1, x: "-100vw" }}
                                        whileHover={{ scale: 1.3, cursor: "pointer" }}
                                        animate={{ x: 0 }}
                                        whileInView={{ x: 0 }}
                                    >
                                        <h1 className="text-xs">
                                            {experience.startYear} - {Number(experience.endYear) >= new Date().getFullYear() ? "Present" : experience.endYear}
                                        </h1>
                                        <h1 className="font-bold mt-2">
                                            {experience.companyName}
                                        </h1>
                                        <h1 className="mt-2">{experience.location}</h1>
                                        <h1 className="mt-2">{experience.designation}</h1>
                                        <h1 className="mt-2">{experience.type}</h1>
                                    </motion.div>
                                );
                            })}
                    </div>
                </div>
            ) : (
                <div>
                    <Lottie options={defaultOptions} width={300} height={300} />
                </div>
            )}
        </div>
    );
};

export default About;
