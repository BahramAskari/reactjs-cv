import { Link } from "react-router-dom";
import {Box, Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import Header from "../compodules/modules/Header";
import MainContainer from "../compodules/modules/MainContainer";
import HomeHero from "../compodules/modules/home/Hero";
import HomeAbout from "../compodules/modules/home/About";
import {FacebookOutlined, Instagram, Telegram, Twitter} from "@mui/icons-material";
import HomePortfolio from "../compodules/modules/home/Portfolio";
import HomeSkills from "../compodules/modules/home/Skills";

export default function Home() {
    return (

        <Box>

            <MainContainer boxProps={{borderRadius: 100,}} sx={{
              //  pl: 2,
            }}>
                <Header />
            </MainContainer>

            <MainContainer sx={{
                bgcolor: "#f2f3f7",
                height: "calc(100vh - 68px)",
                position: "relative",
            }}>
                <Box position={"absolute"}
                     left={20}
                     sx={{
                         top: "50%",
                         transform: "translateY(-50%)",
                     }}
                >

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

                    <Box>
                        <IconButton color={"primary"}>
                            <Telegram />
                        </IconButton>
                    </Box>

                    <Box>
                        <IconButton color={"success"}>
                            <Instagram />
                        </IconButton>
                    </Box>

                </Box>

               <HomeHero />

            </MainContainer>

            {/* Section */}
            <MainContainer sx={{
               // height: "100vh",
            }}>
                <HomeAbout />
            </MainContainer>

            <MainContainer sx={{
                // height: "100vh",
            }}>
                <HomeSkills />
            </MainContainer>

            <MainContainer sx={{
              // height: "100vh",
            }}>
                <HomePortfolio />
            </MainContainer>

        </Box>


    );
}