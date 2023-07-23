import React from 'react'
import { motion, Variants } from "framer-motion";
import useMediaQuery from '../hooks/useMediaQuery';

interface Props {
  emoji: string;
  hueA: number;
  hueB: number;
}

const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const Card = ({ emoji, hueA, hueB }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
   <>
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className={isAboveMediumScreens?"card":"sm-card"} variants={cardVariants}>
       <img style={{width: '100%', borderRadius: 4}} src={emoji} alt="" /> 
      </motion.div>
    </motion.div>
   </>
  )
}

export default Card