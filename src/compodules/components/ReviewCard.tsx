import {Box, Grid, Paper, Typography, useMediaQuery, useTheme} from "@mui/material";
import {StarOutlined} from "@mui/icons-material";
import {useEffect} from "react";

interface Props {
    name: string
    role?: string
    image?: string
    rating: number
    text: string
}

export default function ReviewCard(props: Props){
    const theme = useTheme();
    const is_greaterThan_lg = useMediaQuery(theme.breakpoints.up('lg'));
    const is_smallerThan_lg = useMediaQuery(theme.breakpoints.down('lg'));
    const is_greaterThan_xl = useMediaQuery(theme.breakpoints.up('xl'));
    const is_smallerThan_xl = useMediaQuery(theme.breakpoints.down('xl'));
    const is_greaterThan_midSmall = useMediaQuery(theme.breakpoints.up('ms'));
    const is_smallerThan_midSmall = useMediaQuery(theme.breakpoints.down('ms'));

    const fullStars = Math.round(props.rating/20)
    const has_halfStar = props.rating%20 > 4

    useEffect(()=>{

    }, [])

    return (
        <Box display={"flex"} flexDirection={"column"} gap={2}>

            {/* Info */}
            <Box>

                <Grid container justifyContent={"space-between"} alignItems={"center"} gap={{sm: 0, ms: 2}}>

                    <Grid item>
                        <Box width={50} height={50} borderRadius={"50%"}>
                            <img src={props.image ? props.image: "/reactjs/cv/img/myself2.png"} alt={""} style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                borderRadius: "50%",
                            }} />
                        </Box>
                    </Grid>

                    <Grid item>
                        <Box>
                            <Box>
                                <Typography>{props.name}</Typography>
                            </Box>
                            <Box>
                                <Typography variant={"caption"} fontSize={"small"}>{props?.role || "..."}</Typography>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item
                          display={"flex"} alignItems={"center"} gap={{lg: .8, md: .6, xs: .4}}
                          sx={{
                              ...(is_smallerThan_midSmall && {width: "100%", justifyContent: "start"})
                          }}
                    >
                        <Box><StarOutlined sx={{
                            color: "darkorange",
                           // bgcolor: "#eaae11",
                           // borderRadius: "50%",
                           // width: 45,
                           // height: 45,
                           // p: .8,
                            '& svg': {
                           // fontSize: 100
                        }
                        }} fontSize={"small"} /></Box>
                        <Box><StarOutlined fontSize={"small"} sx={{color: "darkorange", }} /></Box>
                        <Box><StarOutlined fontSize={"small"} sx={{color: "darkorange", }} /></Box>
                        <Box><StarOutlined fontSize={"small"} sx={{color: "darkorange", }} /></Box>
                        <Box><StarOutlined fontSize={"small"} sx={{color: "darkorange", }} /></Box>
                    </Grid>

                </Grid>

            </Box>

            {/* Rating and Content */}
            <Box>
                <Grid container gap={2} flexWrap={"nowrap"}>

                    <Grid item >

                    </Grid>
                    <Grid item>
                            <Typography variant={"body2"} color={"#464"}>{props.text}</Typography>
                    </Grid>

                </Grid>
            </Box>

        </Box>
    );
}