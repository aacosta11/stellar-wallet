import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion"; 
import UserCard from "../../Components/Dashboard/UserCard"; // container for public key and private key
import "../../wwwroot/style/Components/Dashboard/DashboardLayout.scss";
const DashboardLayout = ({children}) => {
    // variants for background img (behind the user card)
    const userCardVariants = {
        inView : {height: '600px'},
        outOfView: {height: '500px'}
    }
    // animation control for background img (built-in framer-motion method)
    const userCardControl = useAnimation();
    // function to control background img scroll animation
    const handleScroll = () => {
        if (window.scrollY > 25) return userCardControl.start('outOfView');
        userCardControl.start('inView');
    }
    // event listener for scroll event
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
        {/* elements found below the user card (home, history, and about) */}
        {children}
        <div style={{'height':'500px'}}></div>
    </>)
}

export default DashboardLayout;