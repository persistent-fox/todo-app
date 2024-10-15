import styled from "styled-components";
import { font } from "../../../styles/common";

export const TaskList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	margin-bottom: 20px;
`;

const EmptyList = styled.div`
	text-align: center;
	padding: 10px;
	${font({
		weight: 400,
		Fmin: 15,
		Fmax: 35,
	})};
`;

export const S = {
	TaskList,
	EmptyList,
};
