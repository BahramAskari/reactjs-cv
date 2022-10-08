import React, {useState, useEffect, useCallback, useMemo, useRef, useReducer} from "react"
import { Link } from "react-router-dom";

import {
    Box, Container, Grid, Tab, Tabs,
    SxProps, BoxProps
}
    from "@mui/material"
/* Import Slice (Reducers, Actions, Types) */

//import Breadcrumb from "./Breadcrumb";
import {alpha} from "@mui/material/styles";


interface Props  {
    sx?: SxProps;
    //bgColor?: string
    children?: React.ReactNode;
    boxProps?: BoxProps;
}


const MainContainer : React.FC<Props> = ({
    sx, children, boxProps
}) => {
    useEffect(  ()=>{
        //  alert("Main Content has been loaded 1st time...")
        return () => {

        }
    }, [])

    return (
        <Box

            pl = {{lg: 35, sm: 12, xs: 6}}
            pr= {{lg: 35, sm: 12, xs: 6}}
            {...boxProps}
            //  bgcolor={props?.bgColor ? props.bgColor : "transparent"}
            // {...props.boxProps}
            sx={{
                ...sx,
                // borderRadius: "20px 20px 20px 20px",
                // p: 1,
                //
                /*
                bgcolor: (theme) =>
                    alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                 */
            }}
            component={"div"}
        >


            {children}

        </Box>
    );
}

export default MainContainer;

export function MainContainer2(props: BoxProps & React.ReactNode & SxProps) {
//export default function MainContainer(props: Props) {



}