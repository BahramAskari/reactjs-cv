import { Link } from "react-router-dom";
import {Box, Button, Grid, IconButton, Paper, Typography} from "@mui/material";
import Header from "../compodules/modules/Header";
import MainContainer from "../compodules/modules/MainContainer";
import HomeHero from "../compodules/modules/home/Hero";
import HomeAbout from "../compodules/modules/home/About";
import {FacebookOutlined, Instagram, Telegram, Twitter} from "@mui/icons-material";
import HomePortfolio from "../compodules/modules/home/Portfolio";
import HomeSkills from "../compodules/modules/home/Skills";
import Footer from "../compodules/modules/Footer";
import ReviewCard from "../compodules/components/ReviewCard";
import HomeReviews from "../compodules/modules/home/Reviews";

export default function Home() {
    return (
        <Box>

            {/* Section -> Header */}
            <MainContainer boxProps={{borderRadius: 100,}} sx={{
              //  pl: 2,
            }}>
                <Header />
            </MainContainer>

            {/* Section -> Hero */}
            <MainContainer sx={{
                bgcolor: "#f2f3f7",
                height: {lg: "calc(100vh - 68px)", xs: "auto"},
                position: "relative",
            }}>
               <HomeHero />
            </MainContainer>

            {/* Section -> About */}
            <MainContainer sx={{
               // pt: 4,
                pb: 4,
               // height: "100vh",
            }}>
                <HomeAbout />
            </MainContainer>

            {/* Section -> Reviews */}
            <MainContainer sx={{
                bgcolor: "#f2f3f7",
                py: 6,
                // height: "100vh",
            }}>
                <HomeReviews />
            </MainContainer>

            {/* Section -> Skills */}
            <MainContainer sx={{
                //bgcolor: "#f2f3f7",
                pt: 6,
                pb: 6,
                // height: "100vh",
            }}>
                <HomeSkills />
            </MainContainer>



            {/* Section -> Footer */}
                <Footer />

        </Box>


    );
}