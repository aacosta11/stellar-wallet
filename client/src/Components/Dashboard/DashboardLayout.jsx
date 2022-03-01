import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import "../../wwwroot/style/Components/Dashboard/DashboardLayout.scss";
import UserCard from "../../Components/Dashboard/UserCard";
const DashboardLayout = ({children}) => {
    const userCardVariants = {
        inView : {height: '600px'},
        outOfView: {height: '500px'}
    }

    const userCardControl = useAnimation();

    const handleScroll = () => {
        if (window.scrollY > 25) return userCardControl.start('outOfView');
        userCardControl.start('inView');
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }
    ,[])

    return (<>
        <motion.div
            id="userCard-container" 
            className="w100percent x x-ai-center"
            variants={userCardVariants}
            animate={userCardControl}
            transition={{ease: "easeOut", duration: .5}}
        >
            <UserCard />
        </motion.div>
        {children}
        <div style={{'height':'500px'}}></div>
    </>)
}

export default DashboardLayout;