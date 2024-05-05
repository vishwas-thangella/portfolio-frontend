import React, { useEffect, useState } from "react";
import { Routes,Route } from 'react-router-dom';
import Home from "./pages/Home";
import PagenotFound from "./pages/404";
import './App.css';
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import axios from "axios";
import BASE from "./api/api";
import Lottie from "react-lottie";
import LoadingJson from './Assets/JSON/loading.json';
import Projects from "./pages/Projects";
import ErrorBoundary from "./components/ErrorBoundary";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () =>{

  const [homeData,setHomeData] = useState({});
  const [loading,setLoading] = useState(true);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingJson,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
};

  const getData = () =>{
    setLoading(true);
    axios.get(`${BASE}/api`).then(resp=>{
      setLoading(false);
      setHomeData(resp.data);
    }).catch(err=>{
      console.log(err);
    })
  }

  useEffect(()=>{
    getData();
  },[]);

  return(
    <React.Fragment>
      <ErrorBoundary>
        <Sidebar/>
        <Routes>
          <Route path="/" element={!loading ? <Home data={homeData.homedata} skills={homeData.skills}/> : <div className="h-full">
            <Lottie options={defaultOptions} width={300} height={300}/>
          </div>}/>
          <Route path="*" element={<PagenotFound/>}/>
          <Route path="/projects" element={<Projects data={homeData.projects}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
        {!loading && <Footer data={homeData.homedata}/>}
      </ErrorBoundary>
    </React.Fragment>
  );
};

export default App;