import { formatDistance } from "../../helpers/index.js";
import { Icon, LiWrap, UlWrap, ResultCard, DeleteButton } from "./SavedResults.styled"

export const SavedResults = ({ list, onDelete, onSelect }) => {
    return (
        <UlWrap>
            {list.map(el =>
                <LiWrap key={el.id}>
                    <ResultCard type="button" onClick={() => onSelect(el)}>
                        <p>{formatDistance(el.distance)} км</p>
                        <p>{el.pace} / {el.time}</p>
                    </ResultCard>
                    <DeleteButton
                        type="button"
                        onClick={() => onDelete(el.id)}
                        aria-label="Видалити результат"
                    >
                        <Icon />
                    </DeleteButton>
                </LiWrap>
            )}
        </UlWrap>
    )
};
