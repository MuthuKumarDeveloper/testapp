// Global Style
import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
	${normalize}

	@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:400,700,700i|Roboto:900,900i&display=swap');

	*, *:before, *:after {
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
