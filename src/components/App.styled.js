import styled from "styled-components";
import { BiRun } from "react-icons/bi";

export const Header = styled.header`
width: 100%;
padding: 20px 0;
background-color: #ffe855;
text-align: center;
`

export const SvgRun = styled(BiRun)`
`
export const Main = styled.main`
padding: 16px;
background-color: rgb(246, 247, 248);
max-width: 768px;
height: 100vh;
margin-left: auto;
margin-right: auto;
`

export const TitleHeader = styled.h1`
display: flex;
justify-content: center;
align-items: center;
gap: 12px;
`

export const WrapThougts = styled.div`
font-size: 14px;
color: rgba(35, 31, 32, 0.8);
font-style: italic;
padding: 0 28px;
@media  (min-width: 768px){
    padding: 0 120px;
    font-size: 16px;
  } 
`

export const TitleTought = styled.p`
font-weight: 500;
margin-bottom: 4px;
`
export const TextTought = styled.p`
@media  (min-width: 768px){
    font-size: 14px;
  } 
`
export const InputsWrap = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 24px;
@media  (min-width: 768px){
    padding: 0 100px;
    justify-content: space-around;
    margin-bottom: 32px;
  } 
`

export const ButtonWrap = styled.div`
display: flex;
`
export const Button = styled.button`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;
background-color: inherit;
width: 100px;
`

export const ButtonTitle = styled.span`
font-weight: 500;
font-size: 16px;
`;

export const ButtonNumber = styled.span`
font-weight: 500;
font-size: 20px;
margin-top: 8px;
margin-bottom: 8px;
`;

export const ButtonText = styled.span`
font-size: 14px;
`;

export const SaveResetWrap = styled.div`
display: flex;
justify-content: space-between; 
padding: 0 12px;
margin-bottom: 36px;
@media  (min-width: 768px){
    justify-content: center;
    gap: 60px;
  }
`
export const SaveResetBtn = styled.button`
width: 90px;
height: 32px;
border: none;
font-weight: 500;
background-color: rgba(35, 31, 32, 0.4);
color: white;
border-radius: 8px;
font-size: 14px;
transition: box-shadow 0.1s ease;
box-shadow: 0 2px 4px rgba(35, 31, 32, 0.5);

&:hover {
    box-shadow: 0px 4px 8px 0px rgba(35, 31, 32, 0.5);
  }

@media (min-width: 768px){
    width: 110px;
    height: 36px;
    font-size: 16px;
  }
`;

export const SaveTitle = styled.p`
text-align: center;
font-size: 18px;
font-weight: 500;
`;
/* @media (min-width: 1440px) {
  }
@media (min-width: 768px) and (max-width: 1439px){
  }
@media (min-width: 320px) and (max-width: 767px){
  } */