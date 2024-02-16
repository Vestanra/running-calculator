import { Button, ButtonsWrap } from "./Buttonts.styled";

export const Buttons = ({ onButtonsClick }) => {
    return (
        <ButtonsWrap>
            <Button onClick={() => onButtonsClick('0,4')}><span>400</span>м</Button>
            <Button onClick={() => onButtonsClick('0,8')}><span>800</span>м</Button>
            <Button onClick={()=>onButtonsClick('5')}><span>5</span>км</Button>
            <Button onClick={()=>onButtonsClick('10')}><span>10</span>км</Button>
            <Button onClick={()=>onButtonsClick('21,1')}><span>21,1</span>км</Button>
            <Button onClick={()=>onButtonsClick('42,2')}><span>42,2</span>км</Button>            
        </ButtonsWrap>
    )
};