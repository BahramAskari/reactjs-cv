import { Link } from "react-router-dom";
import {Box, Button, Divider, Grid, Icon, Typography} from "@mui/material";
import MainContainer from "../../../compodules/modules/MainContainer";
import {
    BookOutlined,
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


                <Grid container
                      mt={{md: 0, xs:2}}
                      justifyContent={"space-between"}
                     borderRadius={20}
                     p={{lg: 4, sm: 3, xs: 2}}
                     boxShadow={"-1px 11px 10px 5px rgba(58,63,60,0.48)"}
                     bgcolor={"#fff"}
                     position={"relative"}
                     sx={{
                         transform: {md: "translateY(-69px)", xs: "unset"},
                         alignItems: 'center',
                         //width: 'fit-content',
                         border: (theme) => `1px solid ${theme.palette.divider}`,
                        // borderRadius: 1,
                         bgcolor: 'background.paper',
                         color: 'text.secondary',
                         '& svg': {
                         m: 1.5,
                     },
                         '& hr': {
                         mx: 0.5,
                     },
                     }}
                >

                    <Grid item
                          md={3.8}
                         // sm={5.7}
                          xs={12}
                          display={"flex"} alignItems={"center"} gap={1.2}>
                        <Box>
                            <WorkspacePremiumOutlined color={"warning"} fontSize={"large"} />
                        </Box>
                        <Box>
                            <Typography fontWeight={"bold"}>3 Years Experience</Typography>
                            <Typography color={"#f39660"}>Professional</Typography>
                        </Box>
                    </Grid>

                    <Divider orientation={"vertical"} flexItem  />

                    <Grid item
                          md={3.8}
                        //  sm={5.7}
                          xs={12}
                          display={"flex"} alignItems={"center"} gap={1.2}>
                        <Box>
                            <WorkspacePremiumOutlined /*transform={"scale(1.5)"}*/ /* color={"primary"} */
                                                      fontSize={"large"}
                                                      sx={{
                                                          bgcolor: "#eaae11",
                                                          borderRadius: "50%",
                                                          color: "#fff",
                                                          width: 45,
                                                          height: 45,
                                                          p: .8,
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
                    </Grid>

                    <Divider orientation={"vertical"} flexItem   />

                    <Grid item
                          md={3.8}
                          xs={12}
                          display={"flex"} alignItems={"center"} gap={1.2}>
                        <Box>
                            <WorkspacePremiumOutlined color={"warning"} fontSize={"large"} />
                        </Box>
                        <Box>
                            <Typography fontWeight={"bold"}>Support</Typography>
                            <Typography color={"#f39660"}>9/5</Typography>
                        </Box>
                    </Grid>

                </Grid>



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
                            <img src={"/reactjs/cv/img/sections/home-about.png"} alt={"POster"}
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
                                gap={{lg: 4, md: 3, sm: 2, xs: 2}}
                            >
                                <Grid item >
                                    <Box display={"flex"} gap={1.2}>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                            <Person2Rounded color={"warning"} />
                                        </AnimationOnScroll>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                            <Typography fontWeight={"bold"}>Name</Typography>
                                        </AnimationOnScroll>
                                    </Box>
                                    <Box display={"flex"} gap={1.2} mt={1.2}>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                        <PhoneRounded color={"warning"} />
                                        </AnimationOnScroll>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                        <Typography fontWeight={"bold"}>Phone</Typography>
                                        </AnimationOnScroll>
                                    </Box>
                                    <Box display={"flex"} gap={1.2} mt={1.2}>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                        <EmailRounded color={"warning"} />
                                        </AnimationOnScroll>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                        <Typography fontWeight={"bold"}>Email</Typography>
                                        </AnimationOnScroll>
                                    </Box>
                                </Grid>
                                <Grid item >
                                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                    <Box>:</Box>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                    <Box mt={1.2}>:</Box>
                                    </AnimationOnScroll>
                                    <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                    <Box mt={1.2}>:</Box>
                                    </AnimationOnScroll>
                                </Grid>
                                <Grid item >
                                    <Box>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                        <Typography variant={"subtitle2"}>Bahram</Typography>
                                        </AnimationOnScroll>
                                    </Box>
                                    <Box mt={1.2}>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                        <Typography variant={"subtitle2"}>+98-901-181-3706</Typography>
                                        </AnimationOnScroll>
                                    </Box>
                                    <Box mt={1.2}>
                                        <AnimationOnScroll animateIn="animate__fadeInRightBig">
                                        <Typography variant={"subtitle2"}>bahram.askari97@gmail.com</Typography>
                                        </AnimationOnScroll>
                                    </Box>
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
                                    <BookOutlined color={"warning"} />
                                    <Typography fontWeight={"bold"}>
                                        Study
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
                                {/*
                                <Box display={"flex"} gap={1.2}>
                                    <SentimentSatisfiedOutlined color={"warning"} />
                                    <Typography fontWeight={"bold"}>
                                        Laugh
                                    </Typography>
                                </Box>
                                */}

                            </Box>
                        </Box>
                        {/* End Interests */}

                    </Grid>
                    {/* End right part */}

                </Grid>

            </Box>
    );
}