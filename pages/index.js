import Head from "next/head";
import Wrapper from "../components/Wrapper/Wrapper";
import Content from "./index.content.json";
import { useRouter } from "next/router";

export default function Home() {
	const { locale, locales, asPath } = useRouter();
	return (
		<>
			<Head>
				<title>rera.dev | Fullstack Web Developer</title>
			</Head>
			<div className='bg-light'>
				<Wrapper>
					{Content.contents
						.filter((content) => content.locale === locale)
						.map((contentInfo, i) => {
							return (
								<div key={i}>
									<h1>{contentInfo.title}</h1>
									<p>{contentInfo.text}</p>
								</div>
							);
						})}
				</Wrapper>
			</div>
		</>
	);
}
