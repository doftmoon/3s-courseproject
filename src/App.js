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
import Manga from "./pages/Manga";
import {mangaData} from "./data/manga";

const manga = mangaData.manga

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path={"/"} element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path={"manga"} element={<Catalog />} />
			<Route path={"manga/top"} element={<TopManga />} />
			<Route path={"user/bookmarks"} element={<Bookmarks />} />
			{manga.map(manga => (
				<Route path={`manga/${manga.id}`} element={<Manga id={manga.id}/>} />
			))}
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