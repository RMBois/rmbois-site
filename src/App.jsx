import React, {useState, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import './index.css';

const baseline = "Charpentier dans le Haut‑Doubs, j'unis mon savoir‑faire bois au solaire de mon partenaire pour réaliser vos envies d'aménagements";

const Section = ({label, tagline}) => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <motion.h1
      initial={{opacity:0, y:40}}
      animate={{opacity:1, y:0}}
      transition={{duration:0.6}}
      className="text-4xl sm:text-6xl font-extrabold drop-shadow-xl"
    >
      {label}
    </motion.h1>
    <p className="mt-4 max-w-md text-lg text-amber-200 text-center">{tagline}</p>
  </div>
);

const App = () => {
  const [active, setActive] = useState(0);
  const sections = [
    {label:'Charpenterie de jardin', tagline:'Pergolas • Carports • Terrasses bois'},
    {label:'Pose de panneaux solaires', tagline:'Intégrées toiture tuile ou bac acier'},
    {label:'Structures combinées bois + solaire', tagline:'Carports producteurs d’énergie (panneaux translucides)'},
    {label:'Aménagements pro & mobilier sur‑mesure', tagline:'Camions de chantier, cuisines d’été, brise‑vue…'}
  ];
  const dir = ['left','right','down','up'];
  const next = () => setActive((active+1)%sections.length);
  useEffect(()=>{const id=setInterval(next,7000);return()=>clearInterval(id);},[active]);
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-neutral-900">
      <AnimatePresence mode="wait">
        <motion.div key={active} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:1}} className="absolute inset-0 flex">
          <Section {...sections[active]} />
        </motion.div>
      </AnimatePresence>
      <div className="absolute bottom-6 w-full text-center text-sm text-neutral-400">{baseline}</div>
    </div>
  );
};

export default App;