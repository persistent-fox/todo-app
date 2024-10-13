import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";
import { TodoList } from "./features/todolist/todolist";
import { GlobalStyles } from "./styles/global-styles";
import { Container } from "./components/styled/container";
import { FlexWrapper } from "./components/styled/flex-wrapper";

function App() {
	const [mode, setMode] = useState("light");
	const theme = mode === "light" ? lightTheme : darkTheme;
	const toggleMode = () => {
		setMode(m => (m === "light" ? "dark" : "light"));
	};

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles theme={theme} />
			<div className='App'>
				<Container>
					<Title>Test task</Title>
					<FlexWrapper justify='center'>
						<TodoList />
					</FlexWrapper>
				</Container>
			</div>
		</ThemeProvider>
	);
}

const Title = styled.h1`
	text-align: center;
	margin: 20px 0;
`;

export default App;
