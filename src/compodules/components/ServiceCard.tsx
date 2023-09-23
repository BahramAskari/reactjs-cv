import {Box, BoxProps, Button, ButtonBase, Stack, Typography} from "@mui/material";
import {CheckOutlined, ClearOutlined, DownloadOutlined, HeartBrokenOutlined, Lock, LockOpen} from "@mui/icons-material";
import * as React from "react";
import {isNil} from "lodash";
import {Link} from "react-router-dom";
import {useLayoutEffect, useRef} from "react";

interface Props {
    stickyHeader?: boolean
    title: string;
    price_type?: "monthly" | "3months" | "6months" | "9months" | "yearly"
    price: { monthly: number; months_3: number; months_6: number; months_9: number; yearly: number; }
    features: {feature: string; has: boolean}[]
    headerStyle?: {
        background?: string
        sticky_background?: string
        //  background?: BoxProps["sx"]
    }
}

export default function ServiceCard (props: Props) {
    const div = useRef();


    useLayoutEffect(() => {
        console.log(div);
        // @ts-ignore
        const divAnimate = div.current.getBoundingClientRect().top;
        console.log(divAnimate);
        const onScroll = () => {
            if (divAnimate < window.scrollY) {
                console.log("ok");
                //  if (div.current) {  }
        // @ts-ignore
                div.current.style.position = "sticky";
        // @ts-ignore
                div.current.style.background = "#ea395a";
        // @ts-ignore
                div.current.style.paddingTop = 4;
        // @ts-ignore
                div.current.style.paddingBottom = 4;
        // @ts-ignore
                div.current.style.top = 0;
        // @ts-ignore
              //  div.current.style.left = 0;
            } else {
        // @ts-ignore
                div.current.style.position = "relative";
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);


    return(
        <Box py={{md: 2, xs: 1.8}}
             px={{md: 1.8, xs: 1.8}}
             sx={{
                 background: "#fff",
                 border: "1px solid #eee",
                 borderRadius: 3.1,
                // height: 1200,
             }}
        >

                    <Box sx={{
                        py: 1.2,
                        pl: .8,
                        position: "sticky",
                       // background: "#f83d23",
                       //width: 100,
                       //height: 100,
                        top: 0,
                        display: "flex",
                       // justifyContent: "center",
                        alignItems: "center",
                        gap: 1.2,
                        zIndex: 999999,
                      //  boxShadow: "0 0 6px #000",
                      //  color: "#fff",
                    }} ref={div}>
                        <HeartBrokenOutlined color={"warning"} />
                        <Typography fontWeight={"bold"}>{props?.title}</Typography>
                    </Box>

            <Box>
                <Typography variant={"caption"} fontSize={"small"}>
                    Perfect to get started
                </Typography>
            </Box>

            <Box display={"flex"} alignItems={"baseline"} gap={.25} py={1}>
                <Typography fontSize={30} color={"#666"}>$</Typography>
                <Typography fontSize={30} color={"#111"}>{props.price.monthly}</Typography>
                <Typography color={"#666"} ml={.8}>per seat/month</Typography>
            </Box>

            <Box py={1} textAlign={"center"}>
                <Button variant={"contained"} color={"info"} size={"large"} fullWidth={true}>Try 6 days for free</Button>
            </Box>

            <Box py={0.8}>
                <Typography fontWeight={"bold"}>Features:</Typography>
            </Box>

            <Box py={0.6}
                 sx={{
                     display: "flex",
                     // justifyContent: "center",
                     alignItems: "center",
                     gap: 1.2,
                 }}>
                <CheckOutlined fontSize={"small"} color={"warning"} />
                <Typography variant={"subtitle2"}>CMS integration</Typography>
            </Box>
            <Box py={0.6}
                 sx={{
                     display: "flex",
                     // justifyContent: "center",
                     alignItems: "center",
                     gap: 1.2,
                 }}>
                <ClearOutlined fontSize={"small"} color={"warning"} />
                <Typography variant={"subtitle2"}>Api integration</Typography>
            </Box>
            <Box py={0.6}
                 sx={{
                     display: "flex",
                     // justifyContent: "center",
                     alignItems: "center",
                     gap: 1.2,
                 }}>
                <CheckOutlined fontSize={"small"} color={"warning"} />
                <Typography variant={"subtitle2"}>Ticketing system</Typography>
            </Box>
            <Box py={0.6}
                 sx={{
                     display: "flex",
                     // justifyContent: "center",
                     alignItems: "center",
                     gap: 1.2,
                 }}>
                <ClearOutlined fontSize={"small"} color={"warning"} />
                <Typography variant={"subtitle2"}>24/7 support</Typography>
            </Box>
            <Box py={0.6}
                 sx={{
                     display: "flex",
                     // justifyContent: "center",
                     alignItems: "center",
                     gap: 1.2,
                 }}>
                <CheckOutlined fontSize={"small"} color={"warning"} />
                <Typography variant={"subtitle2"}>Dark/light theme</Typography>
            </Box>
            <Box py={0.6}
                 sx={{
                     display: "flex",
                     // justifyContent: "center",
                     alignItems: "center",
                     gap: 1.2,
                 }}>
                <CheckOutlined fontSize={"small"} color={"warning"} />
                <Typography variant={"subtitle2"}>Templates library</Typography>
            </Box>

                    {/*
                       <img
                        src={`${props.img}?w=250&h=240&fit=crop&auto=format`}
                        srcSet={`${props.img}?w=250&h=240&fit=crop&auto=format&dpr=2 2x`}
                        alt={props.title}
                        loading="lazy"
                        style={{
                            width: "100%",
                            borderRadius: "12.4px",
                            objectFit: "cover",
                        }}
                    />
                    */}

                    {/* Begin fixed type */}
                    {/* End fixed type */}


            <Box py={0.6}
                 sx={{
                     display: "flex",
                     // justifyContent: "center",
                     alignItems: "center",
                     gap: 1.2,
                 }}>
                <ClearOutlined fontSize={"small"} color={"warning"} />
                <Typography variant={"subtitle2"}>
                    Something will happen here? Never at all.
                </Typography>
            </Box>




        </Box>
    )
}

/*
import { useLayoutEffect, useRef } from "react";
import "./styles.css";

export default function App() {
  const div = useRef();

  useLayoutEffect(() => {
    console.log(div);
    const divAnimate = div.current.getBoundingClientRect().top;
    console.log(divAnimate);
    const onScroll = () => {
      if (divAnimate < window.scrollY) {
        console.log("ok");
        div.current.style.position = "fixed";
        div.current.style.top = 0;
        div.current.style.left = 0;
      } else {
        div.current.style.position = "relative";
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="App">
      <div className="first">first</div>
      <div className="second">
        <div ref={div} className="inside">
          box in second
        </div>
      </div>
    </div>
  );
}

 */