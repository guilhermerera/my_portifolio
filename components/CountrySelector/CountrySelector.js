import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import StyledCountrySelector from "./CountrySelector.style";
import TranslateIcon from "../../public/images/translate.svg";
import Tooltip from "../Tooltip/Tooltip";
import { useState } from "react";

export default function CountrySelector() {
	const { locale, locales, asPath } = useRouter();
	const [isOpen, setIsOpen] = useState("");

	function toggleTooltip() {
		setIsOpen((prevstate) => (prevstate === "active" ? "" : "active"));
	}

	return (
		<>
			<StyledCountrySelector onClick={toggleTooltip}>
				{locales
					.filter((l) => l === locale)
					.map((l, i) => {
						return (
							<span
								key={i}
								className={l === locale ? "language current" : "language"}>
								{l === "en-US" ? "EN" : "BR"}
							</span>
						);
					})}
				<Tooltip open={isOpen}>
					{locales
						.filter((l) => l !== locale)
						.map((l, i) => {
							return (
								<Link key={i} href={asPath} locale={l}>
									<span
										className={l === locale ? "language current" : "language"}>
										{l === "en-US" ? "EN" : "BR"}
									</span>
								</Link>
							);
						})}
				</Tooltip>
			</StyledCountrySelector>
		</>
	);
}
