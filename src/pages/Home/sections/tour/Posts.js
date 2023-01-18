import React, { useState } from 'react'
import './index.css';
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";

// Material Kit 2 React components
// import TransparentBlogCard from "examples/Cards/BlogCards/TransparentBlogCard";
import Items from "pages/Home/sections/tour/Items";

// Images
// import post1 from "assets/images/examples/testimonial-6-2.jpg";
// import post2 from "assets/images/examples/testimonial-6-3.jpg";
// import post3 from "assets/images/examples/blog-9-4.jpg";
// import post4 from "pages/Home/sections/personal/images/headers.jpg";

import Personal from "pages/Home/sections/personal/Personal";
import Location from "pages/Home/sections/location/Location";

function Places() {
  const [animateContent, setAnimateContent] = useState('')
  const [activeHome, setActiveHome] = useState('')
  const [activeAbout, setActiveAbout] = useState('')
  const [activeContact, setActiveContact] = useState('')

  function defaltAnimation(params) {
    setAnimateContent('animate_content')

    setTimeout(() => {
      setAnimateContent('')
    }, 3200);

    setTimeout(() => {
      if (params === 'home') {
        setActiveHome('fadeIn')
        setActiveAbout('')
        setActiveContact('')
      }
      else if (params === 'about') {
        setActiveAbout('fadeIn')
        setActiveHome('')
        setActiveContact('')
      }
      else if (params === 'contact') {
        setActiveContact('fadeIn')
        setActiveHome('')
        setActiveAbout('')
      }
    }, 1500);
  }


  return (
    <MKBox component="section">

      <div className={`page__style homes ${animateContent} ${activeHome}`} >
        <div className="page__description">
          <div>
            <h1>Home</h1>
            <button
              type="button"
              className="btn_nav"
              onClick={() => {
                defaltAnimation('about')
              }}
            >
              About
            </button>

            <Grid container>
              <Grid item xs={12} sm={6} lg={3}>
                <Personal />
                <Location />
              </Grid>
              <Grid item xs={12} sm={6} lg={9}>
                <Items />
              </Grid>
            </Grid>


          </div>
        </div>
      </div>


      <div className={`page__style about ${animateContent} ${activeAbout}`} >
        <div className="page__description">
          <div>
            <h1>About</h1>
            <button
              type="button"
              className="btn_nav"
              onClick={() => {
                defaltAnimation('contact')
              }}
            >
              Contact
            </button>

            <Grid container>
              <Grid item xs={12} sm={6} lg={3}>
                <Personal />
                <Location />
              </Grid>
              <Grid item xs={12} sm={6} lg={9}>
                <Items />
              </Grid>
            </Grid>


          </div>
        </div>
      </div>


      <div className={`page__style contact ${animateContent} ${activeContact}`} >
        <div className="page__description">
          <div>
            <h1>Contact</h1>
            <button
              type="button"
              className="btn_nav"
              onClick={() => {
                defaltAnimation('home')
              }}
            >
              Home
            </button>

            <Grid container>
              <Grid item xs={12} sm={6} lg={3}>
                <Personal />
                <Location />
              </Grid>
              <Grid item xs={12} sm={6} lg={9}>
                <Items />
              </Grid>
            </Grid>

          </div>
        </div>
      </div>

    </MKBox>
  );
}

export default Places;
