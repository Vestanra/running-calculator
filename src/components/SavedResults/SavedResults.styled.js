import styled from "styled-components";
import { RiDeleteBinLine } from "react-icons/ri";

export const UlWrap = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  max-width: 460px;
  margin-left: auto;
  margin-right: auto;
`;

export const LiWrap = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const ResultCard = styled.button`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  border: 1px solid var(--border);
  background: var(--input-bg);
  border-radius: 12px;
  padding: 12px 14px;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: inherit;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: var(--shadow-md);
    border-color: var(--accent);
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  p {
    font-family: var(--font-num);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.01em;
    opacity: 0.7;
    white-space: nowrap;
  }
`;

export const DeleteButton = styled.button`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border: none;
  background: transparent;
  border-radius: 8px;
  cursor: pointer;

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

export const Icon = styled(RiDeleteBinLine)`
  width: 18px;
  height: 18px;
  fill: var(--icon-fill);
  opacity: 0.5;
  transition: transform 0.15s ease, opacity 0.15s ease;

  ${LiWrap}:hover & {
    opacity: 1;
  }
  ${DeleteButton}:hover &,
  ${DeleteButton}:focus-visible & {
    transform: scale(1.18);
    opacity: 1;
  }
`;
