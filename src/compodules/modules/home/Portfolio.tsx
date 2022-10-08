/**
 * @Section
 * Slider for showing some portfolio projects
 * A link to the preview.bahram.org or maybe just bahram.org/portfolio
 */
import {Box, Typography} from "@mui/material";
import {Link} from "react-router-dom";
import {AnimationOnScroll} from "react-animation-on-scroll"
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";


export default function HomePortfolio () {
    return (
        <Box height={"100%"} pt={6} pb={6}>

            <AnimationOnScroll initiallyVisible={true} animateIn="animate__flip">
                <h2>Look what i am doing</h2>
            </AnimationOnScroll>

            <ScrollAnimation animateIn="fadeIn">
                Some Text will appear here
            </ScrollAnimation>

            <Box textAlign={"center"}>
                    <Box><Typography variant={"h3"}>Portfolio</Typography></Box>
                <Box>
                    <Typography variant={"caption"}>
                        You can check list of the projects in {' '}
                        <Link to={"/portfolio"} style={{
                            color: "blueviolet"
                        }}>Portfolio page</Link>
                </Typography>
                </Box>
            </Box>

            {/* portfolio slider */}

        </Box>
    )
}
