import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, ButtonBase, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DownloadOutlined, Lock, LockOpen} from "@mui/icons-material";
import {useEffect, useState} from "react";
import PortfolioItemCard from "../../components/PortfolioItemCard";
import ServiceCard from "../../components/ServiceCard";

interface Props {
    source?: "all" | "ui_ux" | "frontend" | "backend" | "api"
}



export default function PortfolioList(props: Props) {
    const theme = useTheme()
    const matches_min_md = useMediaQuery(theme.breakpoints.up("md"))
    const matches_max_md = useMediaQuery(theme.breakpoints.down("md"))
    const isMin_xl = useMediaQuery(theme.breakpoints.up("xl"))
    const isMin_lg = useMediaQuery(theme.breakpoints.up("lg"))
    const isMin_md = useMediaQuery(theme.breakpoints.up("md"))
    const isMin_sm = useMediaQuery(theme.breakpoints.up("sm"))
    const isMin_xs = useMediaQuery(theme.breakpoints.up("xs"))

    const isMax_md = useMediaQuery(theme.breakpoints.down("md"))
    const isMax_lg = useMediaQuery(theme.breakpoints.down("lg"))


    useEffect(()=>{
        console.log(`Screen size is larger than Medium`, matches_min_md)
        console.log(`Screen size is smaller than Medium`, matches_max_md)
    },[matches_min_md, matches_max_md])
    useEffect(()=>{
        console.log(`Screen size is larger than X-Large`, isMin_xl)
    },[isMin_xl])
    useEffect(()=>{
        console.log(`Screen size is larger than Large`, Boolean(isMin_lg))
    },[isMin_lg])
    useEffect(()=>{
        console.log(`Screen size is larger than Medium`)
    },[isMin_md])
    useEffect(()=>{
        console.log(`Screen size is smaller than Medium`, Boolean(isMax_md))
    },[isMax_md])
    useEffect(()=>{
        console.log(`Screen size is larger than X-Small`)
    },[isMin_xs])

    return (
        <ImageList sx={{
            width: "100%",
            //    height: 800
        }}
                   cols={isMin_xl ? 3: isMin_md ? 2: 1}
            //cols={{lg: 3, md: 2, xs: 1}}
                   rowHeight={"auto"}
                   gap={isMin_xl ? 18: isMin_md ? 8: 4}
        >

            {itemData.filter((item,index) => index<3 ).map((item) => (
                <ImageListItem key={item.img}
                    //cols={1.5}
                >
                    <PortfolioItemCard img={item.img} title={item.title} type={item.type} link={item.link} />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

const itemData: {img: string; link: string; title: string; type: Props["source"]}[] = [
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        link: "https://preveiw.bahram.org/ui-ux/",
        title: 'Rockstar Guitarist',
        type: "ui_ux"
        //title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        link: "https://preveiw.bahram.org/ui-ux/",
        title: 'Burger',
        type: "ui_ux"
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        link: "https://preveiw.bahram.org/reactjs/",
        title: 'Camera',
        type: "frontend"
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        link: "https://preveiw.bahram.org/nodejs/",
        title: 'Coffee',
        type: "backend"
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        link: "https://preveiw.bahram.org/ui-ux/",
        title: 'Hats',
        type: "ui_ux"
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        link: "https://preveiw.bahram.org/nodejs/",
        title: 'Honey',
        type: "backend"
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        link: "https://preveiw.bahram.org/ui-ux/",
        title: 'Basketball',
        type: "ui_ux"
    },
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        link: "https://preveiw.bahram.org/ui-ux/",
        title: 'Fern',
        type: "api"
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        link: "https://preveiw.bahram.org/reactjs/",
        title: 'Mushrooms',
        type: "frontend"
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        link: "https://preveiw.bahram.org/nextjs/",
        title: 'Tomato basil',
        type: "frontend"
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        link: "https://preveiw.bahramm.org/reactjs/",
        title: 'Sea star',
        type: "frontend"
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        link: "https://preveiw.bahramm.org/ui-ux/",
        title: 'Bike',
        type: "ui_ux"
    },
];