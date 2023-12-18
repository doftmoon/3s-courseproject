import React, {useEffect, useState} from 'react';
import "./Catalog.css"
import {Link} from "react-router-dom";
import {mangaData} from "../data/manga";

const MangaGrid = ({id, img, type, rate, title}) => {
	const imgURL = `url(/images/${img})`

	return (
		<div className="Grid_gridItem p-1">
			<Link className="Vertical_card" title={title} key={id} to={id}>
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
	);
}

const Catalog = () => {
	const [mangaList, setMangaList] = useState([]);
	const [minRate, setMinRate] = useState('');
	const [maxRate, setMaxRate] = useState('');
	const [minYear, setMinYear] = useState('');
	const [maxYear, setMaxYear] = useState('');
	const [showAll, setShowAll] = useState(true);

	useEffect(() => {
		if (showAll) {
			setMangaList(
				mangaData.manga.map((manga) => (
					<MangaGrid
						id={manga.id}
						img={manga.img}
						type={manga.type}
						rate={manga.rate}
						title={manga.title}
						year={manga.year}
					/>
				))
			);
		} else {
			const filteredMangaList = mangaData.manga.filter((manga) => {
				const isMinRateEmpty = minRate === '';
				const isMaxRateEmpty = maxRate === '';
				const isMinYearEmpty = minYear === '';
				const isMaxYearEmpty = maxYear === '';

				if (
					isMinRateEmpty &&
					isMaxRateEmpty &&
					isMinYearEmpty &&
					isMaxYearEmpty
				) {
					return true;
				}

				const mangaRate = manga.rate;
				const filteredByMinRate = isMinRateEmpty || mangaRate >= minRate;
				const filteredByMaxRate = isMaxRateEmpty || mangaRate <= maxRate;

				const mangaYear = manga.year;
				const filteredByMinYear = isMinYearEmpty || mangaYear >= minYear;
				const filteredByMaxYear = isMaxYearEmpty || mangaYear <= maxYear;

				return (
					filteredByMinRate &&
					filteredByMaxRate &&
					filteredByMinYear &&
					filteredByMaxYear
				);
			}).sort((a, b) => {
					return (a.year - b.year,
				a.rate - b.rate)
			});

			setMangaList(
				filteredMangaList.map((manga) => (
					<MangaGrid
						id={manga.id}
						img={manga.img}
						type={manga.type}
						rate={manga.rate}
						title={manga.title}
						year={manga.year}
					/>
				))
			)
		}
	}, [minRate, maxRate, minYear, maxYear, showAll])

	const handleMinRateChange = (e) => {
		let value = e.target.value
		if (value > 10) {
			value = 10
		}
		if (value < 0) {
			value = 0
		}
		setMinRate(value)
		setShowAll(false)
	}

	const handleMaxRateChange = (e) => {
		let value = e.target.value
		if (value > 10) {
			value = 10
		}
		if (value < 0) {
			value = 0
		}
		setMaxRate(value)
		setShowAll(false)
	}

	const handleMinYearChange = (e) => {
		setMinYear(e.target.value)
		setShowAll(false)
	}

	const handleMaxYearChange = (e) => {
		setMaxYear(e.target.value)
		setShowAll(false)
	}

	const clearInputs = () => {
		setMinYear('')
		setMaxYear('')
		setMinRate('')
		setMaxRate('')
		setShowAll(true)
	}

	const inputStyle = {
		position: 'relative',
		borderRadius: '16px',
		backgroundColor: 'var(--bg-input)',
		border: '5px solid var(--bg-input)',
		boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.07)',
		transition: 'opacity 0.15s ease-in-out, box-shadow 225ms cubic-bezier(0, 0, 0.2, 1) 0ms',
		width: '100%',
		height: '40%',
		opacity: '0.7',
		padding: '10px',
		fontSize: '16px',
	};

	return (
		<div className={"SharedFlex slim"}>
			<div className={"Catalog_container grid-container"}>
				<div className={"Catalog_headerLeft"}>
					<h2 className={"Typography_h1"}>Catalog</h2>
				</div>
			</div>
			<div className={"Catalog_container Catalog_wrap grid-container"}>
				<div className={"w-full"}>
					<div className={"Catalog_container Catalog_wrap grid-container px-3"}>
						<div></div>
					</div>
					<div className={"Grid_grid"}>
						{mangaList}
					</div>
				</div>
				<div className={"Catalog_right"}>
					<div className={"flex items-center justify-between mb8"}>
						<h4 className={"Typography_h6"} style={{marginBottom:6}}>Filters</h4>
						<button className={"Button Button Button_text Button_text-size-small"} tabIndex={0} type={"button"} onClick={clearInputs}>
							<span className={"Button_label"}>Clear
								<span className={"Button_endIcon Button_icon-size-small"}>
									<svg className="SvgIcon_root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
									</svg>
								</span>
							</span>
						</button>
					</div>
					<h4 className={"Typography_h6 Typography_paragraph"}>Year</h4>
					<div className={"flex justify-between mb-4"}>
						<div className={"Input_root Catalog_filterItem"}>
							<input className={"Input_input"} style={inputStyle} placeholder={"From"} type={"text"} value={minYear} onChange={handleMinYearChange}/>
						</div>
						<div className={"Input_root Catalog_filterItem"}>
							<input className={"Input_input"} style={inputStyle} placeholder={"To"} type={"text"} value={maxYear} onChange={handleMaxYearChange}/>
						</div>
					</div>
					<h4 className={"Typography_h6 Typography_paragraph"}>Rate</h4>
					<div className={"flex justify-between mb-4"}>
						<div className={"Input_root Catalog_filterItem"}>
							<input className={"Input_input"} style={inputStyle} placeholder={"From"} type={"text"} value={minRate} onChange={handleMinRateChange}/>
						</div>
						<div className={"Input_root Catalog_filterItem"}>
							<input className={"Input_input"} style={inputStyle} placeholder={"To"} type={"text"} value={maxRate} onChange={handleMaxRateChange}/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Catalog;