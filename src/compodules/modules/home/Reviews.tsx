/**
 * @Section
 * Slider for showing some portfolio projects
 * A link to the preview.bahram.org or maybe just bahram.org/portfolio
 */
import {Box, Grid, Typography, useMediaQuery, useTheme} from "@mui/material";
import Skills from "../../../data/skills.json"
import SkillProgress from "../../components/SkillProgress";
import {AnimationOnScroll} from "react-animation-on-scroll"
import "animate.css/animate.min.css"
import ReviewCard from "../../components/ReviewCard";
import reviews from ".././../../data/reviews.json"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from "swiper";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/pagination";

export default function HomeReviews () {
    const theme = useTheme();
    const is_greaterThan_xs = useMediaQuery(theme.breakpoints.up('xs'));
    const is_smallerThan_xs = useMediaQuery(theme.breakpoints.down('xs'));
    const is_greaterThan_md = useMediaQuery(theme.breakpoints.up('md'));
    const is_smallerThan_md = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <Box>


            <Swiper
                pagination={true}
                modules={[Pagination]}
                spaceBetween={30}
                slidesPerView={is_greaterThan_md? 2: 1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                style={{
                    paddingBottom: 20,
                }}
                /*
                style={{
                    "& .swiper-pagination-bullet-active": {
                        background: "darkorange",
                    }
                }}
                 */
            >
                {reviews.map(review => {
                    console.log(`The Review is -> `, review)
                    return (
                <SwiperSlide style={{height: is_greaterThan_md? 200: 250, /* paddingBottom: 30 */}}>
                    <ReviewCard name={review.name}
                                role={review.role}
                                image={review.img}
                                rating={review.rating}
                                text={review.text}
                    />
                </SwiperSlide>
                    )
                })}
            </Swiper>

        </Box>
    )
}
