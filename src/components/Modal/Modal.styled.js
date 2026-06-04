import styled, { keyframes } from 'styled-components';
import ReactModal from 'react-modal';
import { MdClose } from "react-icons/md";

const modalPop = keyframes`
  from { opacity: 0; transform: translate(-50%, -50%) scale(0.94); }
  to   { opacity: 1; transform: translate(-50%, -50%) scale(1); }
`;

export const ReactModalStyled = styled(ReactModal)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  padding: 20px;
  background-color: var(--input-bg);
  border: var(--modal-border);
  border-radius: 20px;
  box-shadow: var(--shadow-lg);
  outline: none;
  animation: ${modalPop} 0.22s cubic-bezier(0.2, 0.9, 0.3, 1.2);
  @media (min-width: 768px) {
    width: 360px;
    padding: 24px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  @media (min-width: 768px) {
    gap: 28px;
  }
`;

export const Title = styled.p`
  text-align: center;
  font-weight: 600;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const CloseIcon = styled(MdClose)`
  display: block;
  margin-left: auto;
  width: 24px;
  height: 24px;
  fill: var(--text);
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.18);
  }
`;

export const WrapInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
  width: ${({ $width }) => $width || '64px'};
  height: 46px;
  border: 1px solid var(--border);
  border-radius: 12px;
  text-align: center;
  background-color: var(--bg);
  color: var(--text);
  font-family: var(--font-num);
  font-size: 18px;
  font-variant-numeric: tabular-nums;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type='number'] {
    -moz-appearance: textfield;
  }

  @media (min-width: 768px) {
    width: ${({ $widthLg }) => $widthLg || '74px'};
    height: 52px;
    font-size: 20px;
  }

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 35%, transparent);
  }
`;

export const UnderInput = styled.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.04em;
  opacity: 0.55;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const Btn = styled.button`
  min-width: 110px;
  height: 44px;
  background-color: var(--accent);
  color: var(--on-accent);
  border: 1px solid transparent;
  font-weight: 600;
  border-radius: 12px;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: transform 0.15s ease, background-color 0.15s ease;

  &:hover {
    background-color: var(--accent-strong);
    transform: translateY(-1px);
  }
`;
