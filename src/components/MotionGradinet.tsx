import {motion} from 'framer-motion';
import {useState, useEffect} from 'react';

export const MotionGradient = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="absolute"
      style={{
        background: 'radial-gradient(circle, #01C3FD 2%, transparent 40%)',
        width: '1200px',
        height: '1200px',
      }}
      animate={{
        left: position.x,
        top: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 40,
        damping: 30,
        duration: 4,
      }}
    ></motion.div>
  );
};
