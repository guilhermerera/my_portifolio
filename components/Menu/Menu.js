import StyledMenu from "./Menu.styled";
import MenuLinks from "../MenuLinks/MenuLinks";
import CountrySelector from "../CountrySelector/CountrySelector";
import MobileHamburguer from "../MobileHamburguer/MobileHamburguer";
import MobileMenu from "../MobileMenu/MobileMenu";

export default function Menu() {
	return (
		<>
			<StyledMenu>
				<MenuLinks />
				<CountrySelector />
			</StyledMenu>
			<MobileHamburguer />
			<MobileMenu>
				<MenuLinks mobile='true' />
			</MobileMenu>
		</>
	);
}
