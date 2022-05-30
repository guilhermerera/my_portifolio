import Navbar from "../components/Navbar/Navbar";

import CSS_GlobalStyle from "../components/CSS_GlobalStyle";
import GlobalProvider from "../contexts/global";

export default function MyApp({ Component, pageProps }) {
	//per page layout
	if (Component.getLayout) {
		return Component.getLayout(
			<>
				{/* <GlobalProvider> */}
				<CSS_GlobalStyle />
				<Component {...pageProps} />
				{/* </GlobalProvider> */}
			</>
		);
	}

	//base layout
	return (
		<>
			<CSS_GlobalStyle />
			<GlobalProvider>
				<Navbar />
				<Component {...pageProps} />
			</GlobalProvider>
		</>
	);
}
