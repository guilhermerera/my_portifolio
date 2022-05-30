import { useEffect, useContext } from "react";
import { GlobalContext } from "../../contexts/global";
export default function About() {
	const { isHamburgerActive, setIsHamburgerActive } = useContext(GlobalContext);
	useEffect(() => {
		setIsHamburgerActive("");
	}, []);
	return <h1>ASD</h1>;
}
