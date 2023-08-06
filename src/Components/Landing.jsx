import './styles/Landing.css';
import { motion } from "framer-motion";
import photoguysvg from './Assets/photoguy.svg';
import blueStar from './Assets/star1.svg';
import orangeStar from './Assets/star2.svg';
import redStar from './Assets/star3.svg';
import Album from './Album';
import { useState } from 'react';


function Landing() {
    const [clicked, setClicked] = useState(false);

    const handleClick = event => {
        setClicked(true);
        console.log(clicked);
      }

      if(clicked){
        return <Album></Album>;
      }

return (
    <div className="main-container">
    <div className='top-wrapper'>
        <motion.div 
            initial={{ x: -1000 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeIn', duration: 1.5 }}
            className='header-wrapper'>
            <h1>Photos</h1>
        </motion.div>
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut', delay: 1.5 }}
            className='photo-wrapper'>
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 3 }}
                className='star'>
                <motion.img src={blueStar} width='80px' height='90px' top='10%'
                    animate={{
                        opacity: 1,
                        rotate: [0, -20, 30, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                ></motion.img>
            </motion.div>
            <div className='photoguy'> 
                <img src={photoguysvg}></img>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, ease: 'easeInOut', delay: 3 }} 
                className='starss'>
                <motion.img src={orangeStar} width='80px' height='90px'
                    animate={{
                        opacity: 1,
                        rotate: [0, 20, -30, 0],
                        }}
                    transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 2
                    }}
                ></motion.img>
                <motion.img src={redStar} width='40px' height='50px' 
                    animate={{
                        opacity: 1,
                        rotate: [0, -30, 30, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2
                    }}
                ></motion.img>
            </motion.div>
        </motion.div>
    </div>
    <div className='bottom-wrapper'>
        <motion.div 
            initial={{ opacity: 0 , y: [ -1000, 200, -100, 50, -20, 10] }}
            animate={{ opacity: 1 , y: 0 }}
            transition={{ delay: 1.5 }}
            className='button-wrapper'>
            <motion.button
                animate={{ x: [0, -20, 40, 0] }}
                transition={{
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 5
                }}
                onClick={handleClick}
            >Check them out!</motion.button>
        </motion.div>
        <motion.div 
            initial={{ x: 1000 }}
            animate={{ x: 0 }}
            transition={{ ease: 'easeIn', duration: 1.5 }}
            className='bottom-header-wrapper'>
            <h1>by Liv</h1>
        </motion.div>
    </div>
    </div>
);
}
  
  export default Landing;