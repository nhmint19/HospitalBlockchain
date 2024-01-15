import React, { ReactNode } from 'react';

const WavyBackground: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="wavy-section m-0 p-0 relative w-full h-[80vh] bg-primaryLight overflow-hidden">
        <div className='wave wave1'></div>
        <div className='wave wave2'></div>
        <div className='wave wave3'></div>
        <div className='wave wave4'></div>
      {children}
    </div>
  );
};

export default WavyBackground;
