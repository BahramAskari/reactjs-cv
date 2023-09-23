/**
 * @Section
 * Slider for showing some portfolio projects
 * A link to the preview.bahram.org or maybe just bahram.org/portfolio
 */
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Skills from "../../../data/skills.json"
import SkillProgress from "../../components/SkillProgress";
import {AnimationOnScroll} from "react-animation-on-scroll"
import "animate.css/animate.min.css"

export default function HomeSkills () {
    const theme = useTheme();
    const is_greaterThan_lg = useMediaQuery(theme.breakpoints.up('lg'));
    const is_smallerThan_lg = useMediaQuery(theme.breakpoints.down('lg'));
    const is_greaterThan_xl = useMediaQuery(theme.breakpoints.up('xl'));
    const is_smallerThan_xl = useMediaQuery(theme.breakpoints.down('xl'));
    const is_greaterThan_midSmall = useMediaQuery(theme.breakpoints.up('ms'));
    const is_smallerThan_midSmall = useMediaQuery(theme.breakpoints.down('ms'));


    return (
        <Box height={"100%"}>

            <Box textAlign={"center"} mb={{md: 3.5, xs: 1.5}}>
                <Typography variant={is_greaterThan_midSmall ? "h4": "h5"} fontWeight={"bold"}>My Expertise Skills</Typography>
            </Box>

            {/* portfolio slider */}

            <Grid container
                  justifyContent={"space-between"}
                 // gap={.2}
            >

                {Skills.filter(skill=> !["Frontity", "Wordpress","Woocommerce"].includes(skill.title)).map((skill, index) => {
                    const number = index+1;
                    const colNumber = (number+1)%3 === 0 ? 2: number%3 === 0 ? 3: 1;
                    return (
                            <Grid key={skill.title+skill.progress}
                                  item
                                //    flexGrow={}
                                  md={3.8}
                                  sm={5.5}
                                  xs={12}
                            >
                        <AnimationOnScroll animateIn={
                            colNumber === 1 ? "animate__fadeInLeftBig":
                            colNumber === 2 ? "animate__fadeInBottomBig": "animate__fadeInRightBig"
                        } animateOnce={true}>
                                <SkillProgress title={skill.title} src={skill.src} color={skill.color} progress={skill.progress} />
                        </AnimationOnScroll>
                            </Grid>
                    )
                })}

            </Grid>

        </Box>
    )
}
