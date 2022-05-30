import { useState, createContext } from "react";

export const GlobalContext = createContext({});

export default function GlobalProvider({ children }) {
	const [isHamburgerActive, setIsHamburgerActive] = useState("");
	return (
		<GlobalContext.Provider value={{ isHamburgerActive, setIsHamburgerActive }}>
			{children}
		</GlobalContext.Provider>
	);
}
