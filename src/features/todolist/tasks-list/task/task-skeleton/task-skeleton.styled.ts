import styled, { keyframes } from "styled-components";

// Анимация для скелетона
const loadingAnimation = keyframes`
  0% {
    background-color: #e0e0e0;
  }
  50% {
    background-color: #f0f0f0;
  }
  100% {
    background-color: #e0e0e0;
  }
`;

const TaskSkeleton = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border-bottom: 1px solid #ddd;
`;

const Checkbox = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: #e0e0e0;
	animation: ${loadingAnimation} 1.2s infinite ease-in-out;
`;

const Title = styled.div`
	flex: 1;
	margin-left: 10px;
	height: 20px;
	background-color: #e0e0e0;
	border-radius: 4px;
	width: 80%;
	animation: ${loadingAnimation} 1.2s infinite ease-in-out;
`;

export const S = {
	TaskSkeleton,
	Checkbox,
	Title,
};
