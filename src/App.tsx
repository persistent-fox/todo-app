import { useState } from "react";
import { darkTheme, lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";
import { TodoList } from "./features/todolist/todolist";
import { GlobalStyles } from "./styles/global-styles";

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
				<TodoList />
			</div>
		</ThemeProvider>
	);
}

export default App;
