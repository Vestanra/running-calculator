import styled from 'styled-components';
import ReactModal from 'react-modal';
import { MdClose } from "react-icons/md";

export const ReactModalStyled = styled(ReactModal)`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 240px;
  padding: 16px;
  background-color: rgb(246, 247, 248);
  line-height: 1.1;
  overflow-y: auto;
  border-radius: 16px;
  @media (min-width: 768px){
    width: 360px;
    height: 300px;
    padding: 18px;
  }
`;

export const Wrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 24px;
height: 80%;
@media (min-width: 768px){
    gap: 32px;
  }
`;

export const Title = styled.p`
text-align: center;
font-weight: 500;
font-size: 18px;
@media (min-width: 768px){
    font-size: 20px;
  }
`;

export const CloseIcon = styled(MdClose)`
display: block;
margin-left: auto;
width: 24px;
height: 20px;
fill: rgba(35, 31, 32);
transition: transform 0.3s ease;
@media (min-width: 768px){
    width: 24px;
    height: 24px;
  }
  &:hover {    
    transform: rotate(-90deg) scale(1.1);
  }
`;

export const WrapInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 8px;
font-weight: 500;
`;

export const Input = styled.input`
width: 60px;
height: 40px;
border: 1px solid #ffe855;
border-radius: 8px;
text-align: center;
@media (min-width: 768px){
    width: 80px;
    height: 48px;
  }
&:focus {
    outline: none;
  }
`
export const UnderInput = styled.span`
text-align: center;
font-weight: 400;
`

export const BtnWrap = styled.div`
display: flex;
justify-content: center;
@media (min-width: 768px){
    justify-content: space-around;
  }
`;

export const Btn = styled.button`
width: 90px;
height: 32px;
background-color: rgba(35, 31, 32, 0.4);
border: 1px solid #ffe855;
font-weight: 500;
color: white;
border-radius: 8px;
font-size: 14px;
box-shadow: 0 2px 4px rgba(35, 31, 32, 0.5);
transition: transform 0.1s ease;
@media (min-width: 768px){
    width: 100px;
    height: 38px;
  }

&:hover {
    transform: scale(1.05, 1.05);
  }
`;
