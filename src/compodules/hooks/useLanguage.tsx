import {useEffect} from "react";
import {language, dictionary} from "../../app/slices/layoutSlice";
import {useAppSelector} from "../../app/hooks";

export default function useLanguage ()  {
    const selected_language = useAppSelector(language)
    const Dictionary = useAppSelector(dictionary)
    //const dictionary = useAppSelector((state:RootState) => state.layout.dictionary)

    useEffect(() => {
    }, []);

    return {selectedLanguage: selected_language, dictionary: Dictionary};
};