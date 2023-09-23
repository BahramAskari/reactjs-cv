import { Link } from "react-router-dom";
import {Box, Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import Header from "../compodules/modules/Header";
import MainContainer from "../compodules/modules/MainContainer";
import HomeHero from "../compodules/modules/home/Hero";
import HomeAbout from "../compodules/modules/home/About";
import {FacebookOutlined, Instagram, Telegram, Twitter} from "@mui/icons-material";
import HomePortfolio from "../compodules/modules/home/Portfolio";
import HomeSkills from "../compodules/modules/home/Skills";

export default function Pricing() {
    return (

        <Box>

            <MainContainer boxProps={{borderRadius: 100,}} sx={{
              //  pl: 2,
            }}>
                <Header />
            </MainContainer>


            <MainContainer sx={{
              // height: "100vh",
            }}>
                <HomePortfolio />
            </MainContainer>


        </Box>


    );
}