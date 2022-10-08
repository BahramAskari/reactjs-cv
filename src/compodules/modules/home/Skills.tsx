/**
 * @Section
 * Slider for showing some portfolio projects
 * A link to the preview.bahram.org or maybe just bahram.org/portfolio
 */
import {Box, Grid, Typography} from "@mui/material";


export default function HomeSkills () {
    return (
        <Box height={"100%"} pt={6} pb={6}>

            <Box textAlign={"center"}>
                <Typography variant={"h3"}>My Expertise Skills</Typography>
            </Box>

            {/* portfolio slider */}

            <Grid container
                  justifyContent={"space-between"}
            >

                <Grid item>

                </Grid>

            </Grid>

        </Box>
    )
}
