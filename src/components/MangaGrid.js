import {Link} from "react-router-dom";
import React from "react";
import "../pages/Catalog.css"

const MangaTest = ({id, img, type, rate, likes, views, title, year}) => {
	const imgURL = `url(/images/${img})`
	console.log(id)

	return (
		<div className={"Home_gridItem grid-item"}>
			<Link className={"Horizontal_card"} to={`/manga/${id}`}>
				<div className={"Image_container Horizontal_cover Image_imagePlaceholder"}>
					<div className={"Image_image Image_imgStatic Image_imgFluid"} style={{backgroundImage: imgURL}}></div>
				</div>
				<div className={"Horizontal_content"}>
					<p className={"Typography_body1 Typography_color-textSecondary Typography_lineClamp-1 Typography_lineClamp"}>
						{type}
					</p>
					<h4 className={"Typography_h5 Typography_lineClamp-2 Typography_lineClamp"}>{title}</h4>
					<p className={"Typography_body2 Typography_color-textSecondary Typography_lineClamp-1 Typography_lineClamp"}>{year}</p>
					<div>
						<span className={"Home_icon"}>
							<svg className="SvgIcon_root Home_svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
							</svg>
							{rate}
						</span>
						<span className={"Home_icon"}>
							<svg className="SvgIcon_root Home_svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
							</svg>
							{likes}
						</span>
						<span className={"Home_icon"}>
							<svg className="SvgIcon_root Home_svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
							</svg>
							{views}
						</span>
					</div>
				</div>
			</Link>
		</div>
	)
}
export const MangaGrid = ({mangaData}) => {
	const mangaList = mangaData.map((manga) => (
		<MangaTest
			id={manga.id}
			img={manga.img}
			type={manga.type}
			rate={manga.rate}
			likes={manga.likes}
			views={manga.views}
			title={manga.title}
			year={manga.year}
		/>
	))

	return (
		<div>
			{mangaList}
		</div>
	);
}