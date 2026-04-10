import { Icon, LiWrap, UlWrap, WrapText } from "./SavedResults.styled"

export const SavedResults = ({ list, onDelete }) => {
    const formatDistance = (distance) => {
        if (!distance.includes(',')) return distance;
        const [km, m = '0'] = distance.split(',');
        const oneDigit = m[0];
        if (oneDigit === '0') return km;
      
        return `${km},${oneDigit}`;
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