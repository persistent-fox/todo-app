import styled, { keyframes } from "styled-components";

// Анимация для загрузчика
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// Стиль для загрузчика
export const Loader = styled.div<{ size: number; color: string }>`
	width: ${({ size }) => size}px;
	height: ${({ size }) => size}px;
	border: 2px solid ${({ color }) => color};
	border-top-color: transparent;
	border-radius: 50%;
	animation: ${spin} 1s linear infinite;
`;
