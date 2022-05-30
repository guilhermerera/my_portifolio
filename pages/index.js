import { useEffect, useContext } from "react";
import styled from "styled-components";
import { GlobalContext } from "../contexts/global";

export default function Home() {
	const { isHamburgerActive, setIsHamburgerActive } = useContext(GlobalContext);

	useEffect(() => {
		setIsHamburgerActive("");
	}, []);

	return (
		<>
			<div className='bg-light'>
				<StyledDiv>
					<h1>Home</h1>
					<p>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry. Lorem Ipsum has been the industry&lsquo;s standard dummy
						text ever since the 1500s, when an unknown printer took a galley of
						type and scrambled it to make a type specimen book. It has survived
						not only five centuries, but also the leap into electronic
						typesetting, remaining essentially unchanged. It was popularised in
						the 1960s with the release of Letraset sheets containing Lorem Ipsum
						passages, and more recently with desktop publishing software like
						Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</StyledDiv>
			</div>
		</>
	);
}

const StyledDiv = styled.div`
	max-width: 1440px;
	height: calc(100vh - 75px);
	margin: auto;

	padding: 40px 20px;
`;
