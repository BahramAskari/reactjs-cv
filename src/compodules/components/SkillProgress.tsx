import React from "react";
import {Box, Typography} from "@mui/material";
import progressStyle from "./skillProgress.module.css"


interface Props {
    title: string
    src: string
    logoAlt?: string
    color?: string
    progress?: number
}

export default function SkillProgress (props: Props) {


    return (
        <Box>
            <Box display={"flex"}
                 alignItems={"center"}
                 justifyContent={"space-between"}
                 pt={1.2}
                 pb={1.2}
            >
                <Typography fontSize={"small"} color={"orange"}>{props.title}</Typography>
                <img src={"/reactjs/cv"+ (props.src? props.src:"/img/skill/nodejs.png") } alt={props?.logoAlt ?? ""} style={{
                    width: 40,
                    height: 40,
                }} />
            </Box>

            <div className={progressStyle.progressLine}>
                <div className={progressStyle.progressBar} style={{width: ( (props?.progress && props.progress>=0 && props.progress<=100 ) ? props.progress: 0 ) +"%", background: props.color}}>
                    <div className={progressStyle.progressValue}>95%</div>
                </div>
            </div>

        </Box>
    )
}