import Logo from "../Logo/Logo";
import StyledNavbar from "./Navbar.style";
import Menu from "../Menu/Menu";

export default function Navbar() {
	return (
		<div className='container bg-dark'>
			<StyledNavbar>
				<Logo />
				<Menu />
			</StyledNavbar>
		</div>
	);
}
