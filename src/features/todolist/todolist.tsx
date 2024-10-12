import styled from "styled-components";
import { FlexWrapper } from "../../components/styled/flex-wrapper";
import { Button } from "../../components/button/button";
import { TasksList } from "./tasks-list/tasks-list";
import { EditableTitle, SEditableTitle } from "../../components/editable-title/editable-title";

export const TodoList = () => {
	return (
		<STodolist>
			<EditableTitle>
				<Title>Todolist</Title>
			</EditableTitle>
			<TasksList />
			<FlexWrapper justify='space-between'>
				<CountInfo>2 items left</CountInfo>
				<FlexWrapper gap='12px'>
					<Button isActive>All</Button>
					<Button>Active</Button>
					<Button>Completed</Button>
				</FlexWrapper>
				<Button>Clear Completed</Button>
			</FlexWrapper>
		</STodolist>
	);
};

const STodolist = styled.div`
	max-width: 550px;
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
