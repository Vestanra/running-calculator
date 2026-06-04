import styled, { keyframes, css } from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 22px 0;
  background-color: var(--accent);
  text-align: center;
  box-shadow: var(--shadow-sm);
`;

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

const hop = keyframes`
  0%   { transform: translateY(0) scaleY(1) scaleX(1); }
  20%  { transform: translateY(0) scaleY(0.78) scaleX(1.14); }
  50%  { transform: translateY(-24px) scaleY(1.12) scaleX(0.92); }
  75%  { transform: translateY(0) scaleY(0.8) scaleX(1.12); }
  100% { transform: translateY(0) scaleY(1) scaleX(1); }
`;

const backflip = keyframes`
  0%   { transform: translateY(0) rotate(0deg); }
  30%  { transform: translateY(-28px) rotate(-130deg); }
  60%  { transform: translateY(-28px) rotate(-300deg); }
  100% { transform: translateY(0) rotate(-360deg); }
`;

const spin = keyframes`
  0%   { transform: rotate(0deg) scale(1); }
  50%  { transform: rotate(360deg) scale(1.18); }
  100% { transform: rotate(720deg) scale(1); }
`;

const zoomies = keyframes`
  0%   { transform: translateX(0) rotateY(0deg); opacity: 1; }
  22%  { transform: translateX(150px) rotateY(0deg); opacity: 0; }
  23%  { transform: translateX(-150px) rotateY(0deg); opacity: 0; }
  52%  { transform: translateX(0) rotateY(0deg); opacity: 1; }
  58%  { transform: translateX(0) rotateY(180deg); opacity: 1; }
  72%  { transform: translateX(-28px) rotateY(180deg); opacity: 1; }
  100% { transform: translateX(0) rotateY(180deg); opacity: 1; }
`;

const wiggle = keyframes`
  0%, 100% { transform: rotate(0deg) translateY(0); }
  12% { transform: rotate(-13deg) translateY(-3px); }
  28% { transform: rotate(11deg) translateY(0); }
  44% { transform: rotate(-9deg) translateY(-3px); }
  60% { transform: rotate(7deg) translateY(0); }
  78% { transform: rotate(-4deg) translateY(-1px); }
`;

const animations = {
  run: css`animation: ${runLeftAndBack} 2s cubic-bezier(0.65, 0, 0.35, 1);`,
  hop: css`animation: ${hop} 0.7s ease;`,
  flip: css`animation: ${backflip} 0.9s cubic-bezier(0.4, 0, 0.2, 1); transform-origin: center center;`,
  spin: css`animation: ${spin} 0.85s cubic-bezier(0.4, 0, 0.2, 1); transform-origin: center center;`,
  zoomies: css`animation: ${zoomies} 1.5s cubic-bezier(0.5, 0, 0.5, 1);`,
  wiggle: css`animation: ${wiggle} 0.7s ease;`,
};

export const ImgRun = styled.img`
  height: 24px;
  width: 24px;
  cursor: pointer;
  transform-origin: center bottom;
  ${({ $anim }) => ($anim ? animations[$anim] : '')}
`;

export const Main = styled.main`
  padding: 20px 16px 40px;
  max-width: 520px;
  margin-left: auto;
  margin-right: auto;
`;

export const TitleHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;
`;

export const TextHeader = styled.h1`
  font-family: var(--font-display);
  font-size: 18px;
  font-weight: 500;
  color: #231f20;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  white-space: nowrap;
`;

export const InputsWrap = styled.div`
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
  @media (min-width: 768px) {
    gap: 16px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  flex: 1;
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  width: 100%;
  padding: 16px 8px;
  border: 1px solid var(--border);
  background: var(--input-bg);
  border-radius: 16px;
  box-shadow: var(--shadow-sm);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }
  &:active {
    transform: translateY(0);
    box-shadow: var(--shadow-sm);
  }

  ${({ $active }) =>
    $active &&
    css`
      border-color: var(--accent);
      box-shadow: var(--shadow-md),
        0 0 0 3px color-mix(in srgb, var(--accent) 35%, transparent);
    `}
`;

export const ButtonTitle = styled.span`
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.07em;
  opacity: 0.55;
`;

export const ButtonNumber = styled.span`
  font-family: var(--font-num);
  font-size: 22px;
  font-weight: 500;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`;

export const ButtonText = styled.span`
  font-size: 11.5px;
  opacity: 0.5;
`;

export const SaveResetWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-bottom: 36px;
  @media (min-width: 768px) {
    gap: 24px;
  }
`;

export const SaveResetBtn = styled.button`
  min-width: 116px;
  height: 44px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  transition: transform 0.15s ease, box-shadow 0.15s ease,
    border-color 0.15s ease, background-color 0.15s ease;

  @media (min-width: 768px) {
    min-width: 130px;
    height: 46px;
  }

  ${({ $primary }) =>
    $primary
      ? css`
          background: var(--accent);
          color: var(--on-accent);
          border: 1px solid transparent;
          box-shadow: 0 4px 14px rgba(255, 225, 77, 0.35);

          &:hover:not(:disabled) {
            background: var(--accent-strong);
            transform: translateY(-1px);
            box-shadow: 0 6px 18px rgba(255, 225, 77, 0.4);
          }
          html[data-theme='dark'] & {
            box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
          }

          &:disabled {
            opacity: 0.45;
            cursor: not-allowed;
            box-shadow: none;
            transform: none;
          }
        `
      : css`
          background: #fff;
          color: var(--text);
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);

          html[data-theme='dark'] & {
            background: rgba(255, 255, 255, 0.07);
          }

          &:hover:not(:disabled) {
            border-color: var(--accent);
            transform: translateY(-1px);
          }
        `}
`;

export const SaveTitle = styled.p`
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  opacity: 0.55;
  margin-bottom: 12px;
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
  background-color: ${({ $isDark }) => ($isDark ? '#4a4a4d' : '#ccc')};
  border-radius: 24px;
  transition: background-color 0.2s ease;

  &::before {
    content: '';
    position: absolute;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: ${({ $isDark }) => ($isDark ? 'var(--accent)' : '#fff')};
    left: 3px;
    top: 3px;
    transition: transform 0.2s ease, background-color 0.2s ease;
    transform: ${({ $isDark }) => ($isDark ? 'translateX(20px)' : 'translateX(0)')};
  }
`;
