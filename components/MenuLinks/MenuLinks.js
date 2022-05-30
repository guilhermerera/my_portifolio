import Link from "next/link";
import Links from "./MenuLinks.content.json";
import { useRouter } from "next/router";
import StyledMenuLinks from "./MenuLinks.style";

export default function MenuLinks(props) {
	const { locale, locales, asPath } = useRouter();
	return (
		<>
			{Links.links
				.filter((link) => link.locale === locale)
				.map((linkItem, i) => {
					return (
						<Link key={i} href={linkItem.linkPath}>
							<StyledMenuLinks mobile={props.mobile}>
								<a>{linkItem.linkName}</a>
							</StyledMenuLinks>
						</Link>
					);
				})}
		</>
	);
}
