import { Button, ButtonsWrap, ButtonsContainer } from "./Buttonts.styled";

export const Buttons = ({ onButtonsClick }) => {
    return (
<ButtonsContainer>
    <ButtonsWrap>
        <Button onClick={() => onButtonsClick('0,10')}><span>100</span>м</Button>
        <Button onClick={() => onButtonsClick('0,20')}><span>200</span>м</Button>
        <Button onClick={() => onButtonsClick('0,40')}><span>400</span>м</Button>
        <Button onClick={() => onButtonsClick('0,80')}><span>800</span>м</Button>       
    </ButtonsWrap>
    <ButtonsWrap>
        <Button onClick={()=>onButtonsClick('5')}><span>5</span>км</Button>
        <Button onClick={()=>onButtonsClick('10')}><span>10</span>км</Button>
        <Button onClick={()=>onButtonsClick('21,10')}><span>21,1</span>км</Button>
        <Button onClick={()=>onButtonsClick('42,20')}><span>42,2</span>км</Button>            
    </ButtonsWrap>
</ButtonsContainer>
)
};