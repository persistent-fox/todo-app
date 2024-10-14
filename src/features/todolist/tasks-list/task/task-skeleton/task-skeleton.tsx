import React from "react";
import styled, { keyframes } from "styled-components";

export const TaskSkeleton = () => {
	return (
		<TaskSkeletonWrapper>
			<SkeletonCheckbox />
			<SkeletonText />
		</TaskSkeletonWrapper>
	);
};

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

const TaskSkeletonWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 10px;
	border-bottom: 1px solid #ddd;
`;

const SkeletonCheckbox = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	background-color: #e0e0e0;
	animation: ${loadingAnimation} 1.2s infinite ease-in-out;
`;

const SkeletonText = styled.div`
	flex: 1;
	margin-left: 10px;
	height: 20px;
	background-color: #e0e0e0;
	border-radius: 4px;
	width: 80%;
	animation: ${loadingAnimation} 1.2s infinite ease-in-out;
`;
