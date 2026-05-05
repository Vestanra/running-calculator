import { Icon, LiWrap, UlWrap, WrapText } from "./SavedResults.styled"

export const SavedResults = ({ list, onDelete }) => {
    const formatDistance = (distance) => {
        const value = Number(distance.replace(',', '.'));
        if (Number.isNaN(value)) return distance;
        const rounded = Math.round(value * 100) / 100;
        if (rounded % 1 === 0) return String(rounded);
        return rounded.toFixed(2).replace('.', ',');
    };
    return (
        <UlWrap>
            {list.map(el =>
                <LiWrap key={el.id}>
                    <WrapText>
                        <p>{formatDistance(el.distance)} км</p>
                        <p>{el.pace} / {el.time}</p>
                    </WrapText>
                    <Icon onClick={() => onDelete(el.id)} />
                </LiWrap>
            )}
        </UlWrap>
    )
};