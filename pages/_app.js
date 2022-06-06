import Navbar from "../components/Navbar/Navbar";
import CSS_GlobalStyle from "../components/CSS_GlobalStyle";
import GlobalProvider from "../contexts/global";
import Script from "next/script";

export default function MyApp({ Component, pageProps }) {
	//per page layout
	if (Component.getLayout) {
		return Component.getLayout(
			<>
				<CSS_GlobalStyle />
				{/* <GlobalProvider> */}
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
