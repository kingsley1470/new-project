import React from 'react';
// import homeImage from '../images/home-image.jpg';
// 
import './home.css';



const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to the Home page!</h1>
      {/* <img src={homeImage} alt="Home" className="home-image" /> */}
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <button className="cta-button">Learn More</button>
<div className='cards-container'>
      <div className='card-1'>card-1</div>
      <div className='card-2'>card-2</div>
      <div className='card-3'>card-3</div>
      <div className='card-4'>card-4</div>
      <div className='card-5'>card-5</div>
      <div className='card-6'>card-6</div>
      <div className='card-7'>card-7</div>
      <div className='card-8'>card-8</div>
    </div>

    </div>
  );
};

export default Home;
