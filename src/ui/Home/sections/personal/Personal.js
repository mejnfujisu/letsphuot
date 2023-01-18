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
import ModelItem from "ui/Home/sections/personal/items/model-item";

// Data
import data from "ui/Home/sections/personal/items/items";

function Personal() {
  const renderData = data.map(({ items }) => (

    <Grid container spacing={5}>
      {items.map(({ image, route, pro }) => (
        <Grid item xs={12} md={4} sx={{ mb: 2 }} >
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
          <MKTypography variant="h4" style={{color: "white"}}>
            Danh Sách Các Hoạt 
          </MKTypography>
        </Grid>
      </Container>
      <Container sx={{ mt: 0 }}>{renderData}</Container>
    </MKBox>
  );
}

export default Personal;
