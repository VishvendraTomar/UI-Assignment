import React, { useEffect, useState } from 'react';
import "../App.css";
import userImage from '../assets/user.png';
import modelImage from '../assets/gpt.png';
import leftImag from '../assets/left_arrow.png'
function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1420) {
        setIsSidebarOpen(false);
      }else if(window.innerWidth >=1450){
        setIsSidebarOpen(true)
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : 'closed'}`}>
    <div className='topbutton'>
      <div className='img'>
        <img src={modelImage} alt="" />
      </div>
      <p> New chat</p>
      <div className='img' onClick={toggleSidebar}>
        <img src={leftImag} alt="" />
      </div>
    </div>
      <div className='innercontent'>
        <div><h4>Study Planner AI App</h4></div>
        <div><h4>React Jsx Conversion</h4></div>
        <div><h4>Bug Tracker Backend</h4></div>
        <div><h4>Bob's Box Delivery Ways</h4></div>
        <div><h4>Coding Interview Retry</h4></div>
        <div><h4>It Support</h4></div>
        <div><h4>Port In Use</h4></div>
        <div><h4>Linklist Basics</h4></div>
        <div><h4>Be a Vital Part</h4></div>
        <div><h4>Ts vs Js modules</h4></div>
        <div><h4>Late Submission</h4></div>
        <div><h4>Redux</h4></div>
        <div><h4>What is time</h4></div>
        <div><h4>How to calculate light</h4></div>
        <div><h4>What is adx</h4></div>
      </div>
      <div className='bottomsection'>
        <div className='version'>
          <div className='img'>
            <img src="https://static.thenounproject.com/png/969639-200.png" alt="" />
          </div>
          <div className='data'>
            <p>Upgrade Plan</p>
            {/* <p>Get GPT-4, DALL·E, and more</p> */}
          </div>
        </div>
        <div className='profile'>
          <div className='img'>
            <img src={userImage} alt="" />
          </div>
          <p> Vishvendra Tomar</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
