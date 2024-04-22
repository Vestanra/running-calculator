import { useEffect, useState } from "react";
import { TextTought, Title, TitleTought, WrapThougts } from "./Expression.styled";
import allThoughts from "../../data/expressions.json";

export const Expression = () => {
    const [tought, setSought] = useState({});
    const [title] = useState("Гарного старту в Хусті, біжи як блискавка - швидко і блискуче!")

    function getRandomNumberInRange(max) {
    return Math.floor(Math.random() * max) + 1;
    };
    
    useEffect(() => {
        const index = getRandomNumberInRange(allThoughts.length) - 1
        setSought(allThoughts[index])
    }, [])


    return (
        <>
            {title ? <WrapThougts>
                <Title>{title}</Title>
            </WrapThougts> :
            <WrapThougts>
                <TitleTought>Мудрість дня для бігуна:</TitleTought>
                <TextTought>"{tought.text}"</TextTought>
            </WrapThougts>}
        </>
    )
}