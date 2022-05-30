// import Footer from "../../components/Footer/Footer";

export default function Example() {
	return <h1>Page Content</h1>;
}

Example.getLayout = function PageLayout(page) {
	return (
		<>
			{page}
			{/* <Footer /> */}
		</>
	);
};
