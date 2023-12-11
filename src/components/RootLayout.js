import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import React from "react";

export default function RootLayout() {
	return (
		<React.Fragment>
			<Header />
			<Main />
			<Footer />
		</React.Fragment>
	)
}