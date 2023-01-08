/*
=========================================================
* Material Kit 2 React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
// import Container from "@mui/material/Container";
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
  return (
    <MKBox component="section">
      <Grid container>
        <Grid item xs={12} sm={6} lg={3}>
          <Personal/>
          <Location />
        </Grid>
        <Grid item xs={12} sm={6} lg={9}>
            <Items />
        </Grid>
      </Grid>
    </MKBox>
  );
}

export default Places;
