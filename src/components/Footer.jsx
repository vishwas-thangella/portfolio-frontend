import React from 'react';
import { Link } from 'react-router-dom';

const Footer = props => {
    return (
        <div className='h-40 flex flex-col justify-evenly mt-20 bg-theme-400'>
            <div className='flex flex-row'>
                <ul className='flex flex-row text-gray-100 w-full justify-center items-center gap-10'>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/blog"><li>Blog</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                </ul>
            </div>
            <div className='flex flex-row items-center justify-center gap-10 text-gray-100 text-2xl'>
                <Link to={props.data.instaurl}>
                    <i className="fa-brands fa-instagram hover:text-pink-700 cursor-pointer"></i>
                </Link>
                <Link to={props.data.fburl}>
                    <i className="fa-brands fa-facebook hover:text-blue-500 cursor-pointer"></i>
                </Link>
                <Link to={props.data.linkedinurl}>
                    <i className="fa-brands fa-linkedin-in hover:text-blue-600 cursor-pointer"></i>
                </Link>
                <Link to={props.data.githuburl}>
                    <i className="fa-brands fa-github hover:text-black cursor-pointer"></i>
                </Link>
                <Link to={props.data.xurl}>
                    <i className="fa-brands fa-x-twitter hover:text-black cursor-pointer"></i>
                </Link>
            </div>
            <div>
                <h1 className='text-xs text-gray-100 text-center'>© 2024 Vishwas Thangella. All rights reserved.</h1>
            </div>
        </div>
    );
};

export default Footer;