import React from "react";
import "./Home.css"
import {mangaData} from "../data/manga";
import {Link, NavLink} from "react-router-dom";

const MangaGrid = ({key, link, img, type, rate, title, year}) => {
	return (
		<div className={"Home_gridItem grid-item"}>
			<Link className={"Horizontal_card"} to={link}>
				<div className={"Image_container Horizontal_cover Image_imagePlaceholder"}>
					<img className={"Image_image Image_imgStatic Image_imgFluid"} src={img} alt={""}></img>
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
							100
						</span>
						<span className={"Home_icon"}>
							<svg className="SvgIcon_root Home_svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
							</svg>
							31514
						</span>
					</div>
				</div>
				<div className={"Horizontal_tag"}>{key}</div>
			</Link>
		</div>
	)
}
const Home = () => {
	const mangaList = mangaData.manga.map((manga, index) => (
		<MangaGrid
			key={index}
			link={manga.link}
			img={manga.img}
			type={manga.type}
			rate={manga.rate}
			title={manga.title}
			year={manga.year}
		/>
	))

	return (
		<React.Fragment>
			<div className={"Home_mobileNav flex hidden-mdUp justify-center"}>
				<NavLink className={"Header_link Button Button Button_text"} tabIndex={0} role={"button"} type={"button"} to="/manga">
					<span className={"Button_label"}>Catalog</span>
				</NavLink>
				<NavLink className={"Header_link Button Button Button_text"} tabIndex={0} role={"button"} type={"button"} to="/manga/top">
					<span className={"Button_label"}>Tops</span>
				</NavLink>
				<NavLink className={"Header_link Button Button Button_text"} tabIndex={0} role={"button"} type={"button"} to="/search">
							<span className={"Button_label"}>
								<svg style={{marginLeft:-2, marginRight:6}} className={"SvgIcon_root SvgIcon_fontSize-small"} focusable={"false"} viewBox={"0 0 24 24"} aria-hidden={"true"}>
									<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
								</svg>
								Search
							</span>
				</NavLink>
			</div>
			<div className={"Home slim"}>
				<div className={"Home_header"}>
					<h2 className={"Typography_h1 Home_title"}>Home</h2>
				</div>
				<div>
					<div className={"Home_tagsRoot"}></div>
					<div className={"Home_gridContainer Home_gridContainer2 grid-container px-2 Home_grid"}>
						{mangaList}
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default Home