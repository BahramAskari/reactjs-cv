import { Link } from "react-router-dom";
import {Badge, Box, Button, Grid, IconButton, Paper, Tab, Tabs, Typography} from "@mui/material";
import Header from "../compodules/modules/Header";
import MainContainer from "../compodules/modules/MainContainer";
import HomeHero from "../compodules/modules/home/Hero";
import HomeAbout from "../compodules/modules/home/About";
import {FacebookOutlined, Instagram, Telegram, Twitter} from "@mui/icons-material";
import HomePortfolio from "../compodules/modules/home/Portfolio";
import HomeSkills from "../compodules/modules/home/Skills";
import React, {useEffect} from "react";
import Footer from "../compodules/modules/Footer";
import PortfolioList from "../compodules/modules/Portfolio/List";
import ServicesList from "../compodules/modules/Services/List";



interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}

        >
            {value === index && (
                <Box sx={{ p: 0 }}>
                    {children}
                </Box>
            )}
        </div>
    );
}


/**
 * Page Component
 */
export default function Services() {

    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(()=>{
        // alert(value);
    },[value])



    return <>


        {/* List Menu */}

        {/* Begin List Container */}
        {/* List Sidebar (projects tab categories. Only if exists any category -> 1/3 width) */}
        {/* List Items */}
        {/* End List Container */}

        <MainContainer boxProps={{borderRadius: 100,}} sx={{
            //  pl: 2,
        }}>
            <Header />
        </MainContainer>


        <MainContainer sx={{
            // pt: 4,
            py: 4,
            // height: "100vh",
        }}>

        {/* Begin Portfolio Menu */}
            <Box
                sx={{
                    //   bgcolor: '#2271e9',
                    maxWidth: "100%",
                    color: {xs: "orange", sm: "blue", md: "red", lg: "#000"},
                    borderRadius: "20px 20px 20px 20px",
                    //p: 2,
                }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="Index Page Tabs"
                    sx={{
                        borderRadius: "20px 20px 0 0",
                        ".MuiTab-root": {
                            pt: 1.9,
                            transition: "all .4s",
                        },
                        ".MuiTab-root.Mui-selected": {
                              color:"#ea2849",
                            // backgroundColor: "#ea2",
                            // borderBottom: "2px dotted #8ea",
                            transition: "all .4s",
                        }
                    }}
                >
                    <Tab label={
                        <Box display={"flex"}
                             gap={1.2}
                             justifyContent={"space-between"}>
                            <Typography variant={"body1"}>All</Typography>
                            <Box display={"flex"}
                                 alignItems={"center"}
                                 component={"div"}
                                 fontWeight={"bold"}
                                 bgcolor={"purple"} pl={0.8} pr={0.8} borderRadius={1.5} color={"#fff"}>
                                129
                            </Box>
                        </Box>
                    } value={1} />
                    <Tab label={
                        <Badge
                            badgeContent={710}
                            color={"success"}
                            overlap={"rectangular"}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <Typography variant={"body1"}></Typography>
                        </Badge>
                    } value={2}/>
                    <Tab label={
                        <Badge
                            badgeContent={710}
                            color={"error"}
                            //color={(theme: Theme)=>theme.palette.yellow["A400"]}
                            overlap={"rectangular"}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <Typography variant={"body1"}>FrontEnd</Typography>
                        </Badge>
                    } value={3}/>
                    <Tab label={
                        <Badge
                            badgeContent={49}
                            color={"warning"}
                            overlap={"rectangular"}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <Typography variant={"body1"}>BackEnd</Typography>
                        </Badge>
                    } value={4} />
                    <Tab label={
                        <Badge
                            badgeContent={710}
                            color={"info"}
                            overlap={"rectangular"}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <Typography variant={"body1"}>API</Typography>
                        </Badge>
                    } value={5}/>

                </Tabs>
                {/* End Portfolio Menu */}


                {/* Begin Portfolio Container */}
                <TabPanel value={value} index={1} >
                    <ServicesList />
                </TabPanel>
                <TabPanel value={value} index={2} >
                    Blog Comments
                </TabPanel>
                <TabPanel value={value} index={3} >
                    Ecommerce Comments
                </TabPanel>

            </Box>

        </MainContainer>
        {/* End Portfolio Container */}


        {/* Section -> Footer */}
        <Footer />


    </>
    // );
}