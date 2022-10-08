import { Link } from "react-router-dom";
import {Box, Button, Grid, Typography} from "@mui/material";
import MainContainer from "../../../compodules/modules/MainContainer";
import {AnimationOnScroll} from "react-animation-on-scroll"
import "animate.css/animate.min.css"

export default function HomeHero() {
    return (
                <Grid container
                      height={"100%"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      rowGap={4}
                     // flexDirection={"column-reverse"}
                >

                    <Grid item
                          lg={5}
                          md={5.2}
                          xs={12}
                    >
                        <Box>
                            <Typography variant={"h6"} fontWeight={"bold"} color={"orange"}>
                                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                                    Hi, I am
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography variant={"h3"} fontWeight={"bold"}>
                                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                                    Bahram Askari
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography variant={"h4"} fontWeight={"bold"} color={"blue"}>
                                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                                    Full Stack Developer
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography>
                                <AnimationOnScroll animateIn="animate__fadeInLeftBig">
                                    You can contact me for more information and also, you are able to look at my portfolio.
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={2}
                             display={"flex"}
                             gap={3}
                             //justifyContent={"space-between"}
                        >
                            <Button variant={"contained"} color={"warning"} size={"large"} sx={{borderRadius: 20}}>Download CV</Button>
                            <Button variant={"outlined"} color={"warning"} size={"large"} sx={{borderRadius: 20}}>Contact Me</Button>
                        </Box>
                    </Grid>


                    <Grid item
                          md
                          sm={12}
                          textAlign={"center"}
                          height={"100%"}
                    >

                        <Box sx={{
                            maxWidth: "100%",
                            height: "100%",
                        }}>
                            <img src={"./home-hero.png"} alt={"Hero poster"}
                                 style={{
                                     objectFit: "cover",
                                     maxWidth: "100%",
                                     maxHeight: "100%",
                                     //maxHeight: "calc(100% - 68px)",
                                 }}
                            />
                        </Box>


                    </Grid>

                </Grid>

    );
}