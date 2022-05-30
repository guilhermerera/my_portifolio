import StyledMobileMenu from "./MobileMenu.style";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";

export default function MobileMenu({ children }) {
	const { isHamburgerActive, setIsHamburgerActive } = useContext(GlobalContext);

	return (
		<StyledMobileMenu className={isHamburgerActive}>
			{children}
		</StyledMobileMenu>
	);
}
