import React from 'react';
import { motion, useCycle } from 'framer-motion';

const paths = [
  `M 0 0 H 400 V 240 C 300 270, 100 210, 0 240 Z`,
  `M 0 0 H 400 V 240 C 250 300, 150 180, 0 240 Z`,
  `M 0 0 H 400 V 240 C 350 260, 50 230, 0 240 Z`,
  `M 0 0 H 400 V 240 C 320 290, 80 190, 0 240 Z`,
];

const Rectangle = () => {
  const [currentPath, cyclePath] = useCycle(...paths);

  React.useEffect(() => {
    const interval = setInterval(() => {
      cyclePath();
    }, 3000);
    return () => clearInterval(interval);
  }, [cyclePath]);

  return (
    <div className="relative  bottom-[-40px] left-0 w-full h-[200px] overflow-hidden pointer-events-none z-0">
      <svg
        viewBox="0 0 400 300"
        className="w-full h-full"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%" className='bg-white'>
            <stop offset="0%" className='opacity-50' />
            <stop offset="70%"  />
          </linearGradient>
        </defs>

        <motion.path
          d={currentPath}
          fill="url(#grad)"
          animate={{ d: currentPath }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

export default Rectangle;
