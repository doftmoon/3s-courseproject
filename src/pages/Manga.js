import {useDispatch, useSelector} from "react-redux";
import {addToBookmarks, removeFromBookmarks} from "../store/bookmarksReducer";
import "./Manga.css"
import {mangaData} from "../data/manga";

const Manga_leftJsx = {
	position: "sticky",
	top: 80
}

const buttonJsx = {
	fontWeight: 600,
	borderRadius: 8
}

const rateJsx = {
	padding: 8,
	fontSize: 16
}

const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu nulla pulvinar, molestie odio pharetra, feugiat arcu. Nulla ullamcorper fermentum pretium. Ut id mauris efficitur purus semper vehicula. Quisque eu dui eu orci consequat mollis pulvinar a purus. Sed bibendum erat augue, sit amet fringilla urna iaculis pulvinar. Duis vestibulum congue pretium. Nunc fringilla maximus volutpat. Nullam lacinia non risus at mollis.\n" +
	"\n" +
	"Cras elementum elit eu lectus efficitur, in varius magna posuere. Integer eu rhoncus tortor. In gravida, orci sed fringilla elementum, est ante aliquam purus, in pretium leo enim nec ante. Suspendisse dapibus dictum sollicitudin. Proin quis rhoncus orci, id interdum ante. Nulla tincidunt diam id laoreet egestas. Pellentesque est turpis, aliquam sed facilisis luctus, hendrerit nec libero. Curabitur lacinia venenatis augue sit amet pellentesque. Aliquam ultrices suscipit erat et egestas. Aenean nec faucibus sem. Proin ornare odio tincidunt magna dictum ultrices. Aliquam in arcu id odio venenatis vehicula ut vitae nisl. Maecenas id nulla eleifend, aliquet quam eu, maximus est. Pellentesque vel ornare metus, eget malesuada nisl. Aliquam scelerisque nisl non sapien sollicitudin, ac eleifend sapien semper. Vivamus dictum, dui et venenatis mollis, lorem nisl sagittis enim, sit amet aliquam diam mauris nec mi."
const Manga = (props) => {
	console.log(props.id);
	const manga = mangaData.manga.find((manga) => manga.id === props.id);
	console.log(manga);
	const dispatch = useDispatch();
	const bookmarks = useSelector((state) => state.bookmarks.bookmarks);
	console.log(bookmarks);
	const isBookmarked = bookmarks.some((bookmarkedManga) => bookmarkedManga.id === props.id);
	console.log(isBookmarked);

	const handleBookmarkClick = () => {
		if (isBookmarked) {
			dispatch(removeFromBookmarks(props.id));
		} else {
			dispatch(addToBookmarks(manga));
		}
	};

	return (
		<div className={"flex w-full justify-center"}>
			<div className={"Manga root"}>
				<div className={"Manga_container grid-container"}>
					<div className={"Manga_left leftRow"}>
						<div style={Manga_leftJsx}>
							<div className={"Manga_leftContainer root"}>
								<div className={"Image_container rounded-sm Image_imagePlaceholder"}>
									<img className={"Image_image Image_imgFluid"} src={`/images/${manga.img}`} alt={manga.title}/>
								</div>
								<div className={"Buttons Buttons_container"}>
									<button className={"Button Button Button_contained Button_contained-primary Button_fullWidth"} style={buttonJsx} type={"button"} onClick={handleBookmarkClick}>
										<span className={"Button_label"}>
											{isBookmarked ? 'Remove from bookmarks' : 'Add to bookmarks'}
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className={"Manga_right grid-item"}>
						<div className={"Manga_header"}>
							<h6 className={"Typography_h6 Typography_color-textSecondary Typography_gutterBottom"}>{manga.title}</h6>
							<h1 className={"Typography_h3 Typography_gutterBottom"}>{manga.title}</h1>
							<div className={"Stat_container grid-container"}>
								<div style={rateJsx}>
									<svg className="SvgIcon_root SvgIcon_color-warning SvgIcon_fontSize-medium" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
									</svg>
									<span className={"ml-4"}>{manga.rate}</span>
								</div>
								<div className={"Stat stat"}>
									<svg className="SvgIcon_root SvgIcon_fontSize-small" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path>
									</svg>
									{manga.likes}
								</div>
								<div className={"Stat stat"}>
									<svg className="SvgIcon_root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
										<path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path>
									</svg>
									{manga.views}
								</div>
								<div className={"Stat stat"}>{manga.type}</div>
								<div className={"Stat stat"}>{manga.year}</div>
							</div>
						</div>
						<div className={"Manga_containerMain grid-container"}>
							<div className={"Manga_desc grid-item"}>
								<div></div>
								<div className={"px-4 py-2"}>
									<div className={"m-1 mb-8"}>
										<div style={{maxHeight:400, overflow: "hidden"}}>
											<div className={"Typography_body1"}>
												<p>{testText}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Manga