import styled from "styled-components";
import { FlexWrapper } from "../../components/styled/flex-wrapper";
import { Button } from "../../components/button/button";
import { TasksList } from "./tasks-list/tasks-list";
import { SEditableTitle } from "../../components/editable-title/editable-title";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getTasksTC, setPriorityFilter } from "../../store/reducers/tasks-reducer";
import { Filters } from "./filters/filters";
import { activeTasksCount } from "../../store/selectors/tasks-selectors";

export const TodoList = () => {
	const dispatch = useAppDispatch();
	const count = useAppSelector(activeTasksCount);

	const onChangePriorityFilter = () => {
		dispatch(setPriorityFilter());
	};

	useEffect(() => {
		dispatch(getTasksTC());
	}, [dispatch]);

	return (
		<STodolist>
			<Title>Todolist</Title>
			<TasksList />
			<FlexWrapper justify='space-between'>
				<CountInfo>Active tasks: {count}</CountInfo>
				<Filters />
				<Button onClick={onChangePriorityFilter}>Priority</Button>
			</FlexWrapper>
		</STodolist>
	);
};

const STodolist = styled.div`
	max-width: 800px;
	width: 100%;
	padding: 10px;
	border-radius: 5px;
	background-color: ${props => props.theme.colors.primary};
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05), 0 6px 20px rgba(0, 0, 0, 0.1);
	${SEditableTitle} {
		flex-grow: 1;
	}
`;

const Title = styled.h2`
	text-align: center;
	color: ${props => props.theme.colors.text.tertiary};
	margin-bottom: 20px;
`;

const CountInfo = styled.span`
	padding: 4px 10px;
	color: ${props => props.theme.colors.text.tertiary};
	border: 1px solid transparent;
	border-radius: 5px;
	font-weight: 400;
`;
