import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import './index.css';

// Material Kit 2 React components
import MKBox from "components/MKBox";


import Home from "ui/Home";
import Tour from "ui/Tour";
import Group from "ui/Group";


function Base() {
  const location = useLocation();
  const [animateContent, setAnimateContent] = useState('')
  const active = location.pathname

  useEffect(() => {
    setAnimateContent('animate_content')    
  }, [active])


  return (
    <MKBox component="section">

      {(active === '/home') && (
        <div className={`page__style home ${animateContent} fadeIn`} >
          <div className="page__description">
            <div>
              <Home />
            </div>
          </div>
        </div>
      )}


      {(active === '/tours') && (
        <div className={`page__style about ${animateContent} fadeIn`} >
          <div className="page__description">
            <div>
            <Tour />
            </div>
          </div>
        </div>
      )}


      {(active === '/groups') && (
        <div className={`page__style contact ${animateContent} fadeIn`} >
          <div className="page__description">
            <div>
            <Group />
            </div>
          </div>
        </div>
      )}

    </MKBox>
  );
}

export default Base;
