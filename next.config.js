/** @type {import('next').NextConfig} */
const nextConfig = {
	i18n: {
		// providing the locales supported by your application
		locales: ["pt-BR", "en-US"],
		//  default locale used when the non-locale paths are visited
		defaultLocale: "pt-BR"
	},
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	async redirects() {
		return [
			{
				source: "/linkedin",
				destination: "https://www.linkedin.com/in/guilhermerera/",
				permanent: true
			},
			{
				source: "/github",
				destination: "https://github.com/guilhermerera",
				permanent: true
			}
		];
	}
};

module.exports = nextConfig;
