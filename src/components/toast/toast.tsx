import React, { useState, useEffect } from "react";
import styled from "styled-components";

type ToastProps = {
	message: string;
	duration?: number;
};

export const Toast: React.FC<ToastProps> = ({ message, duration = 3000 }) => {
	const [show, setShow] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setShow(false);
		}, duration);

		return () => clearTimeout(timer);
	}, [duration]);

	if (!show) return null;

	return (
		<ToastContainer>
			<ToastMessage>{message}</ToastMessage>
			<CloseButton onClick={() => setShow(false)}>×</CloseButton>
		</ToastContainer>
	);
};

const ToastContainer = styled.div`
	position: fixed;
	left: 20px;
	bottom: 20px;
	z-index: 2;
	padding: 16px;
	background-color: ${({ theme }) => theme.colors.error || "red"};
	color: #fff;
	border-radius: 8px;
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
	opacity: 1;
	display: flex;
	justify-content: space-between;
	align-items: center;
	min-width: 300px;
	max-width: 500px;
`;

const ToastMessage = styled.span`
	margin-right: 16px;
`;

const CloseButton = styled.button`
	background: transparent;
	border: none;
	color: #fff;
	font-size: 18px;
	cursor: pointer;
	padding: 0;
	margin: 0;
`;
