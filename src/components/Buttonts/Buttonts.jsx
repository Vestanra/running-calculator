import { Button, ButtonsWrap } from "./Buttonts.styled";

export const Buttons = ({ onButtonsClick }) => {
    return (
        <ButtonsWrap>
            <Button onClick={() => onButtonsClick('3')}><span>3</span>км</Button>
            <Button onClick={()=>onButtonsClick('5')}><span>5</span>км</Button>
            <Button onClick={()=>onButtonsClick('10')}><span>10</span>км</Button>
            <Button onClick={()=>onButtonsClick('15')}><span>15</span>км</Button>
            <Button onClick={()=>onButtonsClick('21,1')}><span>21,1</span>км</Button>
            <Button onClick={()=>onButtonsClick('42,2')}><span>42,2</span>км</Button>            
        </ButtonsWrap>
    )
};