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
		color: var(--black);
		text-decoration: none;
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
	
	.iconColor {
		
		filter: invert(0%) sepia(17%) saturate(230%) hue-rotate(17deg) brightness(110%) contrast(90%);
		
		@media only screen and (min-width: 913px){
			filter: invert(43%) sepia(89%) saturate(708%) hue-rotate(299deg) brightness(98%) contrast(93%);
		}
	}

	.language{
		cursor:pointer;
		padding: 4px 6px;
		margin: 0px 4px;
		border-radius: 4px;
		background-color: var(--pink);
		font-weight:700;
		color: var(--black) !important;
		font-family: 'Quicksand', sans-serif;
		border: 1px solid var(--black);
		/* box-shadow: inset -2px -2px 0px 0px var(--pink); */
		&.current{
			background-color: var(--black);
			color: var(--pink) !important;
			/* box-shadow: inset -2px -2px 0px 0px var(--black); */
		}


	@media only screen and (min-width:913px){
		border: 1px solid var(--black);
		/* box-shadow: inset -1px -1px 0px 0px var(--pink); */
		:hover{
			box-shadow: inset -2px -2px 0px 0px var(--black);
		}
		&.current{
			background-color: var(--black);
			color: var(--pink) !important;
			border: 1px solid var(--pink);
			/* box-shadow: inset -1px -1px 0px 0px var(--black); */
			&:hover{
				box-shadow: inset -2px -2px 0px 0px var(--pink);
			}
		}
	}	
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
	@media only screen and (min-width: 913px) {
		display: none !important;
	}
`;

export { Underline, MobileOnly };
export default GlobalStyle;
