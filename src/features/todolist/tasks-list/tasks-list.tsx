import React from "react";
import { Task } from "./task/task";
import { v1 } from "uuid";
import styled from "styled-components";

export const TasksList = () => {
	return (
		<STaskList>
			<Task task={{ id: v1(), title: "Выиграть все кулачные бои", isDone: false, priority: "low" }} />
			<Task task={{ id: v1(), title: "Собрать все карты", isDone: false, priority: "medium" }} />
			<Task task={{ id: v1(), title: "Найти Цири", isDone: false, priority: "high" }} />
		</STaskList>
	);
};

export const STaskList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 10px;
	width: 100%;
	margin-bottom: 20px;
`;
