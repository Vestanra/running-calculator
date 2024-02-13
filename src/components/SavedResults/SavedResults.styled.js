import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

export const UlWrap = styled.ul`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 8px;
margin-top: 18px;
`;

export const LiWrap = styled.li`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
border: 1px solid rgba(35, 31, 32, 0.2);
border-radius: 4px;
font-size: 14px;
font-weight: 500;
padding: 8px 12px;
@media (min-width: 768px){
    width: 400px;
    font-size: 16px;
  }
`;

export const WrapText = styled.div`
width: 60%;
display: flex;
justify-content: space-between;
`;

export const Icon = styled(RiDeleteBinLine)`
width: 18px;
height: 18px;
fill: rgba(35, 31, 32, 0.8);
transition: transform 0.1s ease;
&:hover {
    transform: scale(1.2, 1.2);
  }
`
