import { Link } from "react-router-dom";
import {Box, Button, Grid, Icon, Typography} from "@mui/material";
import MainContainer from "../../../compodules/modules/MainContainer";
import {
    CodeOutlined,
    EmailOutlined, EmailRounded,
    LandscapeOutlined,
    Person2Outlined, Person2Rounded,
    PhoneOutlined, PhoneRounded,
    SentimentSatisfiedOutlined, WavesOutlined, WorkspacePremiumOutlined
} from "@mui/icons-material";
import {AnimationOnScroll} from "react-animation-on-scroll"
import "animate.css/animate.min.css"

export default function HomeAbout() {
    return (

            <Box height={"100%"}>


                <Box display={"flex"} justifyContent={"space-between"}
                     borderRadius={20}
                     p={{lg: 6, sm: 4, xs: 2}}
                     boxShadow={"-1px 11px 10px 5px rgba(58,63,60,0.48)"}
                     bgcolor={"#fff"}
                     position={"relative"}
                     sx={{transform: {md: "translateY(-69px)", xs: "unset"}}}
                >

                    <Box display={"flex"} alignItems={"center"} gap={1.2}>
                        <Box>
                            <WorkspacePremiumOutlined color={"warning"} fontSize={"large"} />
                        </Box>
                        <Box>
                            <Typography fontWeight={"bold"}>3 Years Experience</Typography>
                            <Typography color={"#f39660"}>Professional</Typography>
                        </Box>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} gap={1.2}>
                        <Box>
                            <WorkspacePremiumOutlined /*transform={"scale(1.5)"}*/ /* color={"primary"} */
                                                      fontSize={"large"}
                                                      sx={{
                                                          bgcolor: "#eaae11",
                                                          borderRadius: "50%",
                                                          color: "#fff",
                                                          width: 45,
                                                          height: 45,
                                                          '& svg': {
                                                              fontSize: 100
                                                          }
                                                          // p: 1.5,
                                                      }} />
                        </Box>
                        <Box>
                            <Typography fontWeight={"bold"}>3 Years Experience</Typography>
                            <Typography color={"#f39660"}>Professional</Typography>
                        </Box>
                    </Box>

                    <Box display={"flex"} alignItems={"center"} gap={1.2}>
                        <Box>
                            <WorkspacePremiumOutlined color={"warning"} fontSize={"large"} />
                        </Box>
                        <Box>
                            <Typography fontWeight={"bold"}>Support</Typography>
                            <Typography color={"#f39660"}>9/5</Typography>
                        </Box>
                    </Box>

                </Box>

                <Grid container
                      height={"100%"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      gap={{lg: 8, sm: 2.5, xs: 1}}
                      rowGap={4}
                >

                    {/* Begin left part */}
                    <Grid item
                          lg={5}
                          md={5.2}
                          xs={12}
                    >

                        <Box>
                            <img src={"./home-about.jpg"} alt={"POster"}
                                 style={{
                                     objectFit: "cover",
                                     maxWidth: "100%",
                                     maxHeight: "100%",
                                 }}
                            />
                        </Box>

                    </Grid>
                    {/* End left part */}



                    {/* Begin right part */}
                    <Grid item
                          md
                          sm={12}
                    >
                        <Box>
                            <Typography variant={"subtitle1"} color={"#f39660"} fontWeight={"bold"}>
                                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                    My Intro
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography variant={"h3"} fontWeight={"bold"}>
                                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                    About Me
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography variant={"caption"} fontSize={"small"}>
                                <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                    You can contact me for more infromation and also, you are able to look at my portfolio.
                                    You can contact me for more infromation and also, you are able to look at my portfolio.
                                    You can contact me for more infromation and also, you are able to look at my portfolio.
                                </AnimationOnScroll>
                            </Typography>
                        </Box>

                        {/* Begin contact info */}
                            <Grid container // justifyContent={"space-between"}
                                mt={2}
                                gap={{lg: 8, md: 7, sm: 4, xs: 2}}
                            >
                                <Grid item >
                                    <Box display={"flex"} gap={1.2}>
                                        <Person2Rounded color={"warning"} />
                                        <Typography fontWeight={"bold"}>Name</Typography>
                                    </Box>
                                    <Box display={"flex"} gap={1.2} mt={1.2}>
                                        <PhoneRounded color={"warning"} />
                                        <Typography fontWeight={"bold"}>Phone</Typography>
                                    </Box>
                                    <Box display={"flex"} gap={1.2} mt={1.2}>
                                        <EmailRounded color={"warning"} />
                                        <Typography fontWeight={"bold"}>Email</Typography>
                                    </Box>
                                </Grid>
                                <Grid item >
                                    <Box>:</Box>
                                    <Box mt={1.2}>:</Box>
                                    <Box mt={1.2}>:</Box>
                                </Grid>
                                <Grid item >
                                    <Box><Typography variant={"subtitle2"}>Bahram Askari</Typography></Box>
                                    <Box mt={1.2}><Typography variant={"subtitle2"}>+98-901-181-3706</Typography></Box>
                                    <Box mt={1.2}><Typography variant={"subtitle2"}>bahram.askari97@gmail.com</Typography></Box>
                                </Grid>
                            </Grid>
                        {/* End contact info */}

                        {/* Begin Interests */}
                        <Box mt={2}>
                            <Box>
                                <Typography variant={"h6"} fontWeight={"bold"}>
                                    My Interests
                                </Typography>
                            </Box>

                            <Box mt={1.5} display={"flex"} justifyContent={"space-between"}>

                                <Box display={"flex"} gap={1.2}>
                                    <CodeOutlined color={"warning"} />
                                    <Typography fontWeight={"bold"}>
                                        Coding
                                    </Typography>
                                </Box>
                                <Box display={"flex"} gap={1.2}>
                                    <LandscapeOutlined color={"warning"} />
                                    <Typography fontWeight={"bold"}>
                                        Mountain
                                    </Typography>
                                </Box>
                                <Box display={"flex"} gap={1.2}>
                                    <WavesOutlined color={"warning"} />
                                    <Typography fontWeight={"bold"}>
                                        Sea
                                    </Typography>
                                </Box>
                                <Box display={"flex"} gap={1.2}>
                                    <SentimentSatisfiedOutlined color={"warning"} />
                                    <Typography fontWeight={"bold"}>
                                        Laugh
                                    </Typography>
                                </Box>

                            </Box>
                        </Box>
                        {/* End Interests */}

                    </Grid>
                    {/* End right part */}

                </Grid>

            </Box>
    );
}