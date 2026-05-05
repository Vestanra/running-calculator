import styled, { keyframes } from "styled-components";

export const Header = styled.header`
width: 100%;
padding: 20px 0;
background-color: #ffe855;
text-align: center;
`

const runLeftAndBack = keyframes`
  0%   { transform: translateX(0) translateY(0) rotateY(0deg) rotateZ(0deg); opacity: 1; }
  40%  { transform: translateX(100px) translateY(0) rotateY(0deg) rotateZ(0deg); opacity: 0; }
  50%  { transform: translateX(100px) translateY(0) rotateY(180deg) rotateZ(0deg); opacity: 0; }
  80%  { transform: translateX(0) translateY(0) rotateY(180deg) rotateZ(0deg); opacity: 1; }
  88%  { transform: translateX(0) translateY(-10px) rotateY(180deg) rotateZ(0deg); opacity: 1; }
  92%  { transform: translateX(0) translateY(-15px) rotateY(360deg) rotateZ(10deg); opacity: 1; }
  96%  { transform: translateX(0) translateY(-10px) rotateY(360deg) rotateZ(0deg); opacity: 1; }
  100% { transform: translateX(0) translateY(0) rotateY(360deg) rotateZ(0deg); opacity: 1; }
`;

export const ImgRun = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transform-origin: center bottom;
  animation: ${({ $run }) => ($run ? runLeftAndBack : 'none')} 2s cubic-bezier(0.65, 0, 0.35, 1);
`;

export const Main = styled.main`
padding: 16px;
max-width: 768px;
margin-left: auto;
margin-right: auto;
`

export const TitleHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
gap: 16px;
`

export const TextHeader = styled.h1`
 font-style: italic;
 font-size: 24px;
 color: #231f20;
`;


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
font-weight: 500;
background-color: rgba(35, 31, 32, 0.4);
color: white;
border-radius: 8px;
font-size: 14px;
transition: box-shadow 0.1s ease;
box-shadow: 0 2px 4px rgba(35, 31, 32, 0.5);
border: 1px solid  rgba(255, 223, 18);

&:hover:not(:disabled)  {
    box-shadow: 0px 4px 8px 0px rgba(35, 31, 32, 0.5);
  }

&:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  box-shadow: none;
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

export const ToggleWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
  cursor: pointer;
`;

export const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  inset: 0;
  background-color: ${({ $isDark }) => $isDark ? '#ffe855' : '#ccc'};
  border-radius: 24px;
  transition: background-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: white;
    left: 3px;
    top: 3px;
    transition: transform 0.2s ease;
    transform: ${({ $isDark }) => $isDark ? 'translateX(20px)' : 'translateX(0)'};
  }
`;
