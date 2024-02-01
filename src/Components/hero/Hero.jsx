import React from 'react';
import danceVideo from '../../images/dance-video1.mp4'
import danceVideo2 from '../../images/dance-video.mp4'
import danceimg from '../../images/ballet2.jpg'
const Hero = () => {
  return (
    <>
    <div className="relative h-screen z-10">
      <video autoPlay loop muted className="object-cover object-center w-full h-full">
        <source src={danceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="lg:text-red-800 md:text-red-800 text-8xl sm:8xl sm:font-bold  sm:text-white text-center z-20">COME JOIN US</h1>
        <h3 className="text-white md:text-8xl sm:6xl sm:font-bold text-center z-20">Let's Groove Together</h3>
      </div>
    </div>
    <section className='relative h-screen flex'>
    <video autoPlay loop muted className="object-cover object-center w-1/2 h-full z-10">
        <source src={danceVideo2} type="video/mp4" />
        Your browser does not support the video tag.
    </video>
    <video autoPlay loop muted className="object-cover object-center w-1/2 h-full z-10">
        <source src={danceVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <h1 className="text-white md:text-8xl sm:text-8xl sm:font-bold text-center z-20 opacity-200"><span className='lg:text-red-800'>WE BEL</span>IEVE IN</h1>
        <h3 className="text-white md:text-4xl sm:text-4xl sm:font-bold text-center z-20"><span className='text-red-800'>"To dance is to be out of yourself. Larger, mor</span>e beautiful, more powerful." - Agnes De Mille</h3>
      </div>
    
</section>

    </>
  );
};

export default Hero;
