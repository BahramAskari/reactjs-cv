import { Link } from "react-router-dom";
import {Box, Button, Grid, IconButton, Typography, useMediaQuery, useTheme} from "@mui/material";
import MainContainer from "../../../compodules/modules/MainContainer";
import {AnimationOnScroll} from "react-animation-on-scroll"
import "animate.css/animate.min.css"
import {FacebookOutlined, Instagram, LinkedIn, Telegram, Twitter} from "@mui/icons-material";
import useLanguage from "../../hooks/useLanguage";

export default function HomeHero() {
    const theme = useTheme();
    const lang = useLanguage();
    const is_greaterThan_lg = useMediaQuery(theme.breakpoints.up('lg'));
    const is_smallerThan_lg = useMediaQuery(theme.breakpoints.down('lg'));
    const is_greaterThan_xl = useMediaQuery(theme.breakpoints.up('xl'));
    const is_smallerThan_xl = useMediaQuery(theme.breakpoints.down('xl'));
    const is_greaterThan_midSmall = useMediaQuery(theme.breakpoints.up('ms'));
    const is_smallerThan_midSmall = useMediaQuery(theme.breakpoints.down('ms'));

    return <>
        {/* Begin Social */}
        {is_greaterThan_midSmall &&
        <Box position={"absolute"}
             left={20}
             sx={{
                 top: "50%",
                 transform: "translateY(-50%)",
             }}
        >

          <Box>
            <IconButton color={"primary"}>
              <Telegram />
            </IconButton>
          </Box>

          <Box>
            <IconButton color={"info"}>
              <LinkedIn />
            </IconButton>
          </Box>


          <Box>
            <IconButton color={"success"}>
              <Instagram />
            </IconButton>
          </Box>

            <Box>
                <IconButton color={"secondary"}>
                    <FacebookOutlined />
                </IconButton>
            </Box>

            <Box>
                <IconButton color={"info"}>
                    <Twitter />
                </IconButton>
            </Box>


        </Box>
        }
        {/* End Social */}


        <Grid container
                      height={"100%"}
                      justifyContent={"space-between"}
                      alignItems={"center"}
                      rowGap={4}
                      position={"relative"}
                     // flexDirection={"column-reverse"}
                >


                    <Grid item
                          lg={5}
                          md={5.2}
                          xs={12}
                          pt={{md: 0, xs: 2}}
                    >
                        <Box>
                            <Typography variant={"h6"} fontWeight={"bold"} color={"orange"}>
                                <AnimationOnScroll animatePreScroll={true} offset={10} animateIn="animate__fadeInLeftBig">
                                    Hi, I am
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography variant={is_greaterThan_midSmall ? "h3": "h4"} fontWeight={"bold"}>
                                <AnimationOnScroll animatePreScroll={true} animateIn="animate__fadeInLeftBig">
                                    Bahram
                                </AnimationOnScroll>
                            </Typography>
                        </Box>
                        <Box mt={1}>
                            <Typography variant={is_greaterThan_midSmall?"h4": "h6"} fontWeight={"bold"} color={"blue"}>
                                <AnimationOnScroll animatePreScroll={true} animateIn="animate__fadeInLeftBig">
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
                            <Button variant={"contained"} color={"warning"} /*component={Link} */ href={`/reactjs/cv/resume.pdf`} size={is_greaterThan_midSmall ? "large": "small"} sx={{borderRadius: 20}}>
                                {lang.dictionary.buttons.downloadCV}
                            </Button>
                            <Button variant={"outlined"} color={"warning"} size={is_greaterThan_midSmall ? "large": "small"} sx={{borderRadius: 20}}>
                                {lang.dictionary.buttons.contactMe}
                            </Button>
                        </Box>
                    </Grid>


                    <Grid item
                          md
                          sm={12}
                          textAlign={"center"}
                          height={"100%"}
                          position={is_greaterThan_midSmall ? "unset": "relative"}
                          sx={{
                              transform: lang.selectedLanguage==="fa" ? "scale(-1, 1)" : "unset"
                          }}
                          //    display={is_greaterThan_midSmall ? "unset": "flex"}
                    >

                        <Box sx={{
                            maxWidth: "100%",
                            height: "100%",
                        }}>
                            <img src={is_smallerThan_xl ? "/reactjs/cv/img/sections/home-hero.png": "/reactjs/cv/home-hero.png"}
                                 alt={"Hero poster"}
                                 style={{
                                     objectFit: "cover",
                                     maxWidth: "100%",
                                     maxHeight: "100%",
                                     //maxHeight: "calc(100% - 68px)",
                                 }}
                            />
                        </Box>

                        {is_smallerThan_midSmall &&
                        <Box position={"absolute"}
                             left={20}
                             sx={{
                                 top: "50%",
                                 transform: "translate(-100%, -50%)",
                             }}
                        >


                          <Box>
                            <IconButton color={"primary"}>
                              <Telegram />
                            </IconButton>
                          </Box>

                          <Box>
                            <IconButton color={"info"}>
                              <LinkedIn />
                            </IconButton>
                          </Box>


                          <Box>
                            <IconButton color={"success"}>
                              <Instagram />
                            </IconButton>
                          </Box>

                          <Box>
                            <IconButton color={"secondary"}>
                              <FacebookOutlined />
                            </IconButton>
                          </Box>

                          <Box>
                            <IconButton color={"info"}>
                              <Twitter />
                            </IconButton>
                          </Box>


                        </Box>
                        }


                    </Grid>

                </Grid>
        </>

}