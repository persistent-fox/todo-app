import { createGlobalStyle } from "styled-components";
import { font } from "./common";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle<{
	theme: typeof lightTheme | typeof darkTheme;
}>`
  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.scroll.trackDefault};
  }

  *::-webkit-scrollbar-thumb {
    background-image: linear-gradient(to top,
    ${props => props.theme.colors.scroll.thumbDefaultSecondary},
    ${props => props.theme.colors.scroll.thumbDefaultAccent});
    border-radius: 5px;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  button {
    background-color: unset;
    border: none;
    cursor: pointer;
    ${font({
			weight: 400,
			Fmin: 12,
			Fmax: 30,
		})};
    color: ${props => props.theme.colors.text.dark};
  }

  body {
    background-color: ${props => props.theme.colors.grey.medium};
    margin: 0;
    ${font({ Fmin: 12, Fmax: 30 })};
    color: ${props => props.theme.colors.text.dark};
  }
`;
