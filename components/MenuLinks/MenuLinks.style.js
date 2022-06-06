import styled from "styled-components";
import { Underline } from "../CSS_GlobalStyle/index";

const StyledMenuLinks = styled.li`
	margin: ${(props) => (props.mobile === "true" ? "8px 0px;" : "0px 8px;")};
	font-weight: 600;
	font-size: 1.5rem;
	cursor: pointer;
	${Underline}
	& a {
		color: ${(props) =>
			props.mobile === "true" ? "var(--black)" : "var(--pink)"};
	}
	@media only screen and (min-width: 913px) {
		font-size: 1.1rem;
	}
`;

export default StyledMenuLinks;
