import Link from "next/link";
import Links from "./MenuLinks.content.json";
import { useRouter } from "next/router";
import StyledMenuLinks from "./MenuLinks.style";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/global";

export default function MenuLinks(props) {
	const { isHamburgerActive, setIsHamburgerActive } = useContext(GlobalContext);
	const { locale, locales, asPath } = useRouter();

	function closeMobileMenu() {
		setIsHamburgerActive("");
	}

	return (
		<>
			{Links.links
				.filter((link) => link.locale === locale)
				.map((linkItem, i) => {
					return (
						<Link key={i} href={linkItem.linkPath}>
							<StyledMenuLinks onClick={closeMobileMenu} mobile={props.mobile}>
								<a>{linkItem.linkName}</a>
							</StyledMenuLinks>
						</Link>
					);
				})}
		</>
	);
}
