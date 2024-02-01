import React from 'react';
import image from '../../images/ballet.avif';
import img2 from '../../images/d1.avif';

const About = () => {
  return (
    <>
      <div className=" py-8 px-4 md:px- bg-black text-white">
      <div className="container mx-auto ">
        <h2 className="text-7xl font-bold text-center mb-8">Welcome to Dancer's Arena!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img className="mx-auto md:mx-0 md:w-full md:max-w-xs rounded-md shadow-md mb-4 h-90 w-50" src={image} alt="Dance Academy" />
          </div>
          <div>
            <p className="text-lg leading-relaxed mb-4">
              At Dancer's Arena, we believe in the transformative power of dance. Nestled in the heart of Your City, we provide a vibrant and inclusive environment where dancers of all ages and skill levels can thrive. Our passion for dance drives us to inspire, educate, and empower every individual who walks through our doors.
            </p>
            <h3 className="text-xl font-bold mb-2">Our Story</h3>
            <p className="text-lg leading-relaxed mb-4">
              Founded in 2024, Your Dance Academy has been a beacon of creativity and expression in the community. What started as a small dream has blossomed into a premier dance institution, known for its excellence in training and nurturing the next generation of dancers.
            </p>
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-lg leading-relaxed mb-4">
              At Your Dance Academy, our mission is to cultivate a love for dance while fostering personal growth and confidence in our students. Through innovative teaching methods and a supportive atmosphere, we strive to ignite the spark of creativity and passion in each dancer.
            </p>
          </div>
        </div>
        <div className="text-center mt-8">
          <h3 className="text-2xl font-bold mb-4">Our Classes</h3>
          <p className="text-lg leading-relaxed mb-4">
            From classical ballet to contemporary hip-hop, we offer a diverse range of classes to suit every taste and interest. Our experienced instructors bring a wealth of knowledge and expertise to each session, ensuring that students receive top-notch instruction in a variety of dance styles.
          </p>
          <ul className="text-lg">
            <li>Ballet</li>
            <li>Jazz</li>
            <li>Tap</li>
            <li>Contemporary</li>
            <li>Hip-Hop</li>
            <li>Latin Dance</li>
            <li>Ballroom</li>
          </ul>
        </div>
        <div>
          <img className="mx-auto md:mx-0 md:w-full md:max-w-lg rounded-md shadow-md mt-8 w-100" src={img2} alt="Dance Class" />
        </div>
      </div>
    </div>

    </>
  );
}

export default About;
