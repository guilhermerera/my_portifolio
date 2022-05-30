import StyledLogo from "./Logo.style";
import Link from "next/link";
import { useContext, useMemo } from "react";
import { GlobalContext } from "../../contexts/global";

export default function Logo() {
	const { isHamburgerActive, setIsHamburgerActive } = useContext(GlobalContext);

	const isActive = useMemo(() => isHamburgerActive, [isHamburgerActive]);

	return (
		<Link href='/'>
			<StyledLogo className={isActive}>rera.dev</StyledLogo>
		</Link>
	);
}
