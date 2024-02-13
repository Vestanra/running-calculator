import styled from "styled-components";

export const ButtonsWrap = styled.div`
display: flex;
justify-content: space-between;
margin-top: 16px;
margin-bottom: 32px;
font-size: 14px;
@media (min-width: 768px){
    margin-top: 32px;
    gap: 16px;
    justify-content: center;
    font-size: 16px;
  }
`

export const Button = styled.button`
padding: 8px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 50px;
background-color: rgba(255, 223, 18, 0.2);
border: none;
border-radius: 8px;
font-weight: 500;
box-shadow: 0 2px 4px rgba(35, 31, 32, 0.2);
transition: box-shadow 0.1s ease;

@media (min-width: 768px){
    width: 80px;
  }

&:hover {
    box-shadow: 0px 4px 8px 0px rgba(35, 31, 32, 0.2);
  }
`