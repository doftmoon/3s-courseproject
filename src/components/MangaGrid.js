import {Link} from "react-router-dom";
import React from "react";
import "../pages/Catalog.css"

const MangaTest = ({key, link, img, type, rate, likes, views, title, year}) => {
	const imgURL = `url(/images/${img})`
	console.log(key)

	return (
		<div className="Grid_gridItem p-1">
			<Link className="Vertical_card" title={title} key={key} to={link}>
				<div className={"Vertical_wrapper"}>
					<div className={"Image_container Image_hover rounded-sm Vertical_img Image_imagePlaceholder"}>
						<div className={"Image_image Image_imgStatic Image_imgFluid"} style={{backgroundImage: imgURL}}></div>
					</div>
				</div>
				<div className={"pr-2 pl-0.5 mb-1"}>
					<div className={"flex items-center"}>
						<p
							className={"Typography_caption Typography_color-textSecondary Typography_lineClamp-1 Typography_lineClamp"}>
							<pre>{type}  </pre>
						</p>
						<p className={"Typography_caption Typography_color-textSecondary flex items-center"}>{rate}
							<svg className="SvgIcon_root SvgIcon_fontSize-inherit" focusable="false" viewBox="0 0 24 24"
							     aria-hidden="true">
								<path
									d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
							</svg>
						</p>
					</div>
					<h4 className={"Typography_h6 Typography_lineClamp-2 Typography_lineClamp"}>{title}</h4>
				</div>
			</Link>
		</div>
	)
}
export const MangaGrid = ({mangaData}) => {
	const mangaList = mangaData.map((manga) => (
		<MangaTest
			key={manga.id}
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