import Grid from "@mui/material/Grid";

import Tours from "ui/Home/sections/tour";


import Personal from "ui/Home/sections/personal/Personal";
import Location from "ui/Home/sections/location/Location";

function Home() {
    return (
        <Grid container>
            <Grid item xs={12} sm={6} lg={3}>
                <Personal />
                <Location />
            </Grid>
            <Grid item xs={12} sm={6} lg={9}>
                <Tours />
            </Grid>
        </Grid>
    );
}

export default Home;
