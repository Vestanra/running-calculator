import styled from "styled-components";

export const ButtonsContainer = styled.div`
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 28px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  & + & {
    margin-top: 10px;
  }
`;

export const Button = styled.button`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3px;
  padding: 10px 6px;
  background-color: var(--btn-preset-bg);
  border: 1px solid transparent;
  border-radius: 12px;
  box-shadow: var(--shadow-sm);
  font-size: 12.5px;
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;

  span {
    font-family: var(--font-num);
    font-size: 16px;
    font-weight: 500;
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
    border-color: var(--accent);
  }
  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }
`;
