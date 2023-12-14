import './App.css';
import './components/Footer.css'
import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import TopManga from "./pages/TopManga";
import Bookmarks from "./pages/Bookmarks";
import TermsOfUse from "./pages/footer_pages/Terms-of-use";

const Omni = () => {
	return <h1>Omni</h1>
}

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={"/"} element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path={"manga"} element={<Catalog />} />
			<Route path={"manga/top"} element={<TopManga />} />
			<Route path={"user/bookmarks"} element={<Bookmarks />} />
			<Route path={"omni"} element={<Omni />} />
			<Route path={"footer_template"} element={<TermsOfUse />} />
		</Route>
	)
)

function App() {
	return (
		<RouterProvider router={router} />
	);
}

export default App;