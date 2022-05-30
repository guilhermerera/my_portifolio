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
	}
};

module.exports = nextConfig;
