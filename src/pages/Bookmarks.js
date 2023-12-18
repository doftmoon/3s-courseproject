import "./Bookmarks.css"
import {useSelector} from "react-redux";
import {MangaGrid} from "../components/MangaGrid";

export default function Bookmarks() {
	const bookmarks = useSelector((state) => state.bookmarks.bookmarks)
	console.log(bookmarks)

	return (
		<div className={"SharedFlex slim"}>
			<div className={"Library_header"}>
				<h2 className={"Typography_h1 Library_title"}>Bookmarks</h2>
				<div className={"flex items-center"}>
					<button className={"Button Button Button_text Button_text-size-small"} tabIndex={0} type={"button"}>
						<span className={"Button_label"}>
							<svg className="SvgIcon_root" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
								<path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path>
							</svg>
						</span>
					</button>
				</div>
			</div>
			<div className={"Grid_grid Library_grid"}>
				{bookmarks.length === 0 ? (
					<p>No bookmarks yet.</p>
				) : (
					<MangaGrid mangaData={bookmarks} />
				)}
			</div>
		</div>
	)
}