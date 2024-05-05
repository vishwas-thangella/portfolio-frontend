import React, { useState } from 'react'
import Header from '../components/Header';
import { motion } from 'framer-motion';
import axios from 'axios';
import BASE from '../api/api';
import Lottie from 'react-lottie';
import LoadingAnimation from '../Assets/JSON/loading2.json';

const Contact = () =>{

    const [data,setData] = useState({
        fullname:"",
        email:"",
        mobilenumber:"",
        subject:"",
        message:""
    });

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: LoadingAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const [loading,setLoading] = useState(false);

    const changeHandler = e =>{
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = e =>{
        setLoading(true);
        e.preventDefault();
        axios.post(`${BASE}/api/contact`,data).then(resp=>{
            setLoading(false);
            if(resp.data.success){
                alert("Thank you for contacting !");
                window.location.reload();
            }else{
                console.log(resp)
            }
        }).catch(err=>{
            setLoading(false);
            console.log(err);
        })
    }

    return(
        <div>
            <Header/>
            <div className='p-3 md:p-7'>
                <h1 className='md:text-4xl text-2xl text-center'>Let's Work <span className='text-theme-200'>Together !</span></h1>
                <h1 className='text-center mt-5'>Email : thangellavishwas@gmail.com</h1>
                <form action="" className='flex flex-col items-center justify-evenly mt-10 gap-4' onSubmit={submitHandler}>
                    <input type="text" placeholder='Enter Full Name' required className='w-minScr p-3 outline-theme-200' name="fullname" value={data.fullname} onChange={changeHandler}/>
                    <input type="email" placeholder='Enter Email' required className='w-minScr p-3 outline-theme-200' name="email" value={data.email} onChange={changeHandler}/>
                    <input type="number" placeholder='Enter Mobile Number'  className='w-minScr p-3 outline-theme-200' name="mobilenumber" value={data.mobile} onChange={changeHandler}/>
                    <input type="text" placeholder='Enter Subject' required className='w-minScr p-3  outline-theme-200' name="subject" value={data.subject} onChange={changeHandler}/>
                    <textarea id="" cols="30" rows="10" placeholder='Enter Message' className='w-minScr p-3 outline-theme-200' name="message" value={data.message} onChange={changeHandler}></textarea>
                    {!loading ? <motion.input type="submit" value="Submit" className='p-3 bg-theme-300 rounded-md hover:bg-theme-200 text-white w-minScr cursor-pointer' whileHover={{
                        scale:1.1,
                    }}/> : <Lottie options={defaultOptions} width={100} height={100}/>}
                </form>
            </div>
        </div>
    );
};

export default Contact;