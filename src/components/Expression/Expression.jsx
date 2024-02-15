import { useEffect, useState } from "react";
import { TextTought, TitleTought, WrapThougts } from "./Expression.styled";
import allThoughts from "../../data/expressions.json";

export const Expression = () => {
    const [tought, setSought] = useState({});

    function getRandomNumberInRange(max) {
    return Math.floor(Math.random() * max) + 1;
    };
    
    useEffect(() => {
        const index = getRandomNumberInRange(allThoughts.length) - 1
        setSought(allThoughts[index])
    }, [])


    return (
        <WrapThougts>
          <TitleTought>Мудрість дня для бігуна:</TitleTought>
          <TextTought>"{tought.text}"</TextTought>
        </WrapThougts>
    )
}