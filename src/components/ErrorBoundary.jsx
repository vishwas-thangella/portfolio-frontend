import React from "react";
import { motion } from "framer-motion";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            error:false
        }
    }
    componentDidCatch(error,errorinfo){
        console.log(error,errorinfo);
        this.setState({error:true});
    }
    render(){
        if(this.state.error){
            return(
                <motion.div>
                    <motion.p>Something Went Wrong !</motion.p>
                </motion.div>
            );
        }else{
            return this.props.children;
        }
    }
}

export default ErrorBoundary;