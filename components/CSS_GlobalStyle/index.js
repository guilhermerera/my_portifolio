import { createGlobalStyle, css } from "styled-components";
const GlobalStyle = createGlobalStyle`
:root{
	--black: #0d0d0d;
	--white: #f6f6f6;
	--dark-purple: #191026;
	--purple:#2a1a40;
	--bright-purple: #5d3b8c;
	--pink:#f25790
}
 	*{
		padding: 0px;
		margin: 0px;
		box-sizing: border-box;
	}

	body {
		position: relative;
	}

	html{
		font-size:16px
	}

	h1, h2, h3, h4, h5{
		font-family: 'Montserrat', sans-serif;
	}

	a{
		font-family: 'Quicksand', sans-serif;
	}
	a:hover{
		text-decoration: none;
	}

	p{
		font-family: 'Quicksand', sans-serif;
	}

	.container{
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.bg-dark{
		background-color: var(--black);
	}

	.bg-light{
		background-color: var(--white);
	}

	.font-color-dark{
		color: var(--black)
	}

	.font-color-light{
		color: var(--white)
	}
	
	
`;

const Underline = css`
	position: relative;
	::before {
		content: "";
		height: 1px;
		width: 0px;
		bottom: 0px;
		left: 0px;
		position: absolute;
		background-color: var(--pink);
		transition: all 0.1s ease-in;
	}
	:hover::before {
		width: 100%;
	}
`;

const MobileOnly = css`
	@media only screen and (min-width: 820px) {
		display: none;
	}
`;

export { Underline, MobileOnly };
export default GlobalStyle;
