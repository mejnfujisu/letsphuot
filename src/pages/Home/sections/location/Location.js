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

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

// Material Kit 2 React components
import MKBox from "components/MKBox";
// import MKBadge from "components/MKBadge";
import MKTypography from "components/MKTypography";

// Presentation page components
import ModelItem from "pages/Home/sections/personal/items/model-item";

// Data
import data from "pages/Home/sections/location/items/items";

function Location() {
  const renderData = data.map(({ items }) => (

    <Grid container spacing={2}>
      {items.map(({ image, route, pro }) => (
        <Grid item xs={12} md={12} >
          <Link to={pro ? "/" : route}>
            <ModelItem image={image} pro={pro} />
          </Link>
        </Grid>
      ))}
    </Grid>
  ));

  return (
    <MKBox component="section" my={0} py={0}>
      <Container>
        <Grid
          container
          item
          sx={{ my: 4, mx: "auto", px: 0.75 }}
        >
          <MKTypography variant="h4"  style={{color: "white"}}>
            Địa Điểm Yêu Thích
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 0 }}>{renderData}</Container>
    </MKBox>
  );
}

export default Location;
