import React, {useState, useEffect, useCallback, useMemo, useRef, useReducer} from "react"
import { Link } from "react-router-dom";
/* Import Slice (Reducers, Actions, Types) */

import ProfileImg from "../../public/myself.jpg"

/*  Components  */
import {Typography, Paper,
    Box, Container, Grid, styled,
    useMediaQuery, useTheme,
    TextField, Input,
    InputAdornment, IconButton,
    Menu, MenuItem,
} from "@mui/material"
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import {
    HomeOutlined as Home,
    MessageOutlined as Message,
    DashboardOutlined as Dashboard,
    SettingsOutlined as Settings2,
    SettingsInputComponentOutlined as Settings,
    ProductionQuantityLimitsOutlined as ProductsIcon,
    LogoutOutlined as LogoutIcon,
    SearchOutlined as SearchIcon,
    Widgets as MenuIcon,
    NotificationsOutlined as NotificationIcon,
    NotificationsActive as NotificationActiveIcon, Image,
} from "@mui/icons-material"





const options = [
    'None',
    'Atria',
    'Atria very long message forever never',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
];

const ITEM_HEIGHT = 48;
const HEADER_HEIGHT = 68;

interface Props  {
    backgroundColor?: string,
    children?: React.ReactNode
}

/**
 * @Component Item
 */
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    transition: "all .35s",
    '&:hover':{
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#000',
        color: "#fff",
        transition: "all .6s",
    }
}));

const Item2 = (props: Props)=>{
    return(
        <div style={{textAlign:"center", border:"1px solid red", backgroundColor: "#000", color: "white"}}>
            {props.children}
        </div>
    )
}

/**
 * @Component SidebarMenu
 */
function Header(props: Props) {

    /*** DropDown State & Handler  ***/
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };




    const theme = useTheme();
    const is_xs_min = useMediaQuery(theme.breakpoints.up('xs'));
    const is_xs_max = useMediaQuery(theme.breakpoints.down('xs'));
    const is_smallMin = useMediaQuery(theme.breakpoints.up('sm'));
    const is_smallMax = useMediaQuery(theme.breakpoints.down('sm'));

    const [isSidebarOpen,setToggle] = useState(true)

    useEffect(  ()=>{
        // alert("Sidebar has been loaded 1st time...")
    }, [])

    return (
        <Box
            //position={"fixed"}
            //width={"100%"}
            //zIndex={999999999999}
            //top={0}
            height={HEADER_HEIGHT}
           // pl={{lg: 35, sm: 12, xs: 6}}
           // pr={{lg: 35, sm: 12, xs: 6}}
            sx={{
                width: "100%",
                //padding: "0 0 0 0",
                bgcolor: "#fff",
                //border: "1px dotted #888"
            }}>
            <header style={{
                height:"100%", position: "relative", top: 0,
            }}>

                <Grid container
                      height={"100%"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                >

                    {/* Begin Logo */}
                    <Grid item
                         // md={8}
                         // sm={9}
                         // xs={12}
                          alignItems={"center"}
                          sx={{
                              ".MuiInput-root:focus":{
                                  backgroundColor: "#eee",
                                  transition: "all .4s",
                              }
                          }}
                    >

                        <Box width={60} height={60}>
                            <img src={"./logo192.png"} alt={"Logo"} style={{
                                objectFit: "cover",
                                width: 60,
                            }} />
                        </Box>

                        {/*
                        <Input type={"text"}
                               placeholder={"Search"}
                               disableUnderline={true}
                               size={"medium"}
                               inputMode={"text"}
                               inputProps={{
                                   style:{
                                      // backgroundColor: "red",
                                   }
                               }}
                               sx={{
                                   fontWeight: "bold",
                                   color: "#000",
                                   //border: "1px solid #999",
                                   borderRadius: "8px",
                                   backgroundColor: "#fff",
                                   padding: "4px 10px",
                                   transition: "all .3s",
                                   '&:hover':{
                                       backgroundColor: "#eee",
                                       transition: "all .4s",
                                   },
                                   '&:focus':{
                                       backgroundColor: "#eee",
                                       transition: "all .4s",
                                   },
                               }}
                        />
                        */}


                    </Grid>
                    {/* End Search */}


                    {/* Begin Menu Links */}
                    <Grid item
                        //  md={8}
                        //  sm={9}
                        //  xs={12}
                          alignItems={"center"}
                          sx={{
                              ".MuiInput-root:focus":{
                                  backgroundColor: "#eee",
                                  transition: "all .4s",
                              }
                          }}
                          display={"flex"}
                          gap={{md:3, xs: 1.5}}
                          justifyContent={"space-between"}
                    >


                        <Box display={"flex"} gap={{md: 3, xs: 1.2}}>
                            <Link to={"/"}>
                                <Typography fontSize={"small"} fontWeight={"bold"} color={"#f39660"}>Home</Typography>
                            </Link>
                            <Link to={"/intro"}>
                                <Typography fontSize={"small"} fontWeight={"bold"} color={"#2412ea"}>My Intro</Typography>
                            </Link>
                            <Link to={"https://preview.bahram.org"}>
                                <Typography fontSize={"small"} fontWeight={"bold"} color={"#2412ea"}>Portfolio</Typography>
                            </Link>
                            <Link to={"/testimonial"}>
                                <Typography fontSize={"small"} fontWeight={"bold"} color={"#2412ea"}>Testimonial</Typography>
                            </Link>
                            <Link to={"/services"}>
                                <Typography fontSize={"small"} fontWeight={"bold"} color={"#2412ea"}>Services</Typography>
                            </Link>
                            <Link to={"/pricing"}>
                                <Typography fontSize={"small"} fontWeight={"bold"} color={"#2412ea"}>Pricing</Typography>
                            </Link>
                            {/*
                            <Link to={"/blog"}>
                                <Typography fontSize={"small"} fontWeight={"bold"} color={"#2412ea"}>Blog</Typography>
                            </Link>
                            */}
                        </Box>

                        <Button variant={"contained"} color={"warning"}
                                size={"large"}
                                sx={{borderRadius: 20}}
                        >
                            Hire Me
                        </Button>

                    </Grid>
                    {/* End Menu Links */}


                </Grid>


            </header>

        </Box>
    );
}


export default Header;