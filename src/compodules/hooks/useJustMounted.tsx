import {useEffect, useRef} from "react";

export default function useJustMounted ()  {
    const justMountedRef = useRef(true);
    useEffect(() => {
        justMountedRef.current = false;
    }, []);
    return justMountedRef.current;
};
