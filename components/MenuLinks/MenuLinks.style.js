import styled from "styled-components";
import { Underline } from "../CSS_GlobalStyle/index";

const StyledMenuLinks = styled.li`
	margin: ${(props) => (props.mobile === "true" ? "8px 0px;" : "0px 8px;")};
	color: ${(props) =>
		props.mobile === "true" ? "var(--black)" : "var(--pink)"};
	font-weight: 600;
	font-size: 1.1rem;
	cursor: pointer;
	${Underline}
`;

export default StyledMenuLinks;
