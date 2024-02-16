import { Icon, LiWrap, UlWrap, WrapText } from "./SavedResults.styled"

export const SavedResults = ({ list, onDelete }) => {
    return (
        <UlWrap>
            {list.map(el =>
                <LiWrap key={el.id}>
                    <WrapText>
                        <p>{el.distance.split(',')[1] === '0' ? el.distance.split(',')[0] : el.distance} км</p>
                        <p>{el.pace} / {el.time}</p>
                    </WrapText>
                    <Icon onClick={() => onDelete(el.id)} />
                </LiWrap>
            )}
        </UlWrap>
    )
};