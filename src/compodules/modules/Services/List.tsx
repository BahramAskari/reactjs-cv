import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {Box, ButtonBase, Grid, Stack, Typography, useMediaQuery, useTheme} from "@mui/material";
import {DownloadOutlined, Lock, LockOpen} from "@mui/icons-material";
import {useEffect, useState} from "react";
import PortfolioItemCard from "../../components/PortfolioItemCard";
import ServiceCard from "../../components/ServiceCard";
import reviews from "../../../data/reviews.json";
import ReviewCard from "../../components/ReviewCard";
// import required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

interface Props {
    source?: "all" | "ui_ux" | "frontend" | "backend" | "api"
    package?: ""
    //  type: "all" | "fronend" | ""
}



export default function ServicesList(props: Props) {
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
        <Box>



            <Swiper
            pagination={true}
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={isMin_md? 3: isMin_sm ? 2: 1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            style={{
                paddingBottom: 12,
            }}
            /*
            style={{
                "& .swiper-pagination-bullet-active": {
                    background: "darkorange",
                }
            }}
             */
        >
                {
                    itemData.map(item=> {
                        return (
                            <SwiperSlide style={{ /* height: is_greaterThan_md? 200: 250, paddingBottom: 30 */}}>
                                <ServiceCard title={item.title} price={item.price} features={item.features}  />
                            </SwiperSlide>
                        )}
                    )}
        </Swiper>


        </Box>
    );
}

const itemData: {
    title: string;
    headerStyle?: {
        background?: string
        sticky_background?: string
        //  background?: BoxProps["sx"]
    }
    price_type?: "monthly" | "3months" | "6months" | "9months" | "yearly"
    price: { monthly: number; months_3: number; months_6: number; months_9: number; yearly: number; }
    features: {feature: string; has: boolean}[]
}[] = [
    {
        title: 'Silver Land',
        price: {monthly: 11, months_3: 30, months_6: 55, months_9: 80, yearly: 100},
        features: [
            {feature: "", has: true,}
        ],
    },  {
        title: 'Gold Land',
        price: {monthly: 19, months_3: 50, months_6: 95, months_9: 135, yearly: 185},
        features: [
            {feature: "", has: true,}
        ],
    },  {
        title: 'Plat Land',
        price: {monthly: 25, months_3: 60, months_6: 125, months_9: 160, yearly: 285},
        features: [
            {feature: "", has: true,}
        ],
    },  {
        title: 'Silver Landing',
        price: {monthly: 49, months_3: 120, months_6: 260, months_9: 315, yearly: 500},
        features: [
            {feature: "", has: true,}
        ],
    },
];