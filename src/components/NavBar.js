import React from "react";
import {NavLink} from "react-router-dom";
class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isDarkTheme: true,
		};
	}

	componentDidMount() {
		this.applyStoredTheme();
	}

	toggleTheme = () => {
		this.setState(prevState => ({
			isDarkTheme: !prevState.isDarkTheme,
		}), this.updateThemeAttributes);
	};

	applyStoredTheme = () => {
		const storedTheme = localStorage.getItem('mtheme');
		const htmlTag = document.documentElement;

		if (storedTheme === 'system' || (!storedTheme && true)) {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			htmlTag.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
		} else if (storedTheme) {
			htmlTag.setAttribute('data-theme', storedTheme);
		}
	};

	updateThemeAttributes = () => {
		const { isDarkTheme } = this.state;
		const htmlTag = document.documentElement;

		htmlTag.setAttribute('data-theme', isDarkTheme ? 'dark' : 'light');
		localStorage.setItem('mtheme', isDarkTheme ? 'dark' : 'light');
	};

	render(){
		const { isDarkTheme } = this.state;

		return (
			<nav className={"Header_nav"}>
				<div className={"Header_navContainer flexAuto mwFull"}>
					<NavLink className={"Header_brand Button Button_text Button_text-size-small"} tabIndex={0} role={"button"} type={"button"} aria-label={"Home"} to={"/"}>
						<span className={"Button_label"}>
							<svg className={"SvgIcon_root SvgIcon_fontSize-large"} focusable={"false"} viewBox={"0 0 496 512"} aria-hidden="true">
								<path fill="currentColor" d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 376c-17.67 0-32-14.33-32-32s14.33-32 32-32 32 14.33 32 32-14.33 32-32 32zm0-128c-53.02 0-96 42.98-96 96s42.98 96 96 96c-106.04 0-192-85.96-192-192S141.96 64 248 64c53.02 0 96 42.98 96 96s-42.98 96-96 96zm0-128c-17.67 0-32 14.33-32 32s14.33 32 32 32 32-14.33 32-32-14.33-32-32-32z"></path>
							</svg>
						</span>
					</NavLink>
					<div style={{maxWidth:300, marginLeft:16}} className={"Header_navContainer hidden-smDown"}>
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
				</div>
				<div className={"Header_navContainer"} />
				<div className={"Header_navContainer justify-end"}>
					<div className={"Header_navContainer"}>
						<NavLink className={"Header_link Button Button"} tabIndex={0} role={"button"} to="/user/bookmarks">Bookmarks</NavLink>
						<span className={"ToggleTheme_root"}>
							<span className={"SwitchBase_root ToggleTheme_switchBase"} className={`ToggleTheme_switchBase ${isDarkTheme ? 'ToggleTheme_checked' : ''}`}
							      style={{
								      transform: isDarkTheme ? 'translateX(22px)' : 'none',
							      }}>
								<span className={"SwitchBase_label"}>
									<input className={"SwitchBase_input ToggleTheme_input"} type={"checkbox"} value={""} checked={isDarkTheme} onChange={this.toggleTheme}/>
									<span className={"ToggleTheme_thumb"}></span>
								</span>
							</span>
							<span className="ToggleTheme_track">
								<svg className={"SvgIcon_root ToggleTheme_icon"} focusable={"false"} viewBox={"0 0 512 512"} aria-hidden={"true"}>
									<path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
								</svg>
								<svg className={"SvgIcon_root ToggleTheme_icon"} focusable={"false"} viewBox={"0 0 512 512"} aria-hidden={"true"}>
									<path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path><
								/svg>
							</span>
						</span>
					</div>
					<button className={"Button Button Button_text Button_text-primary Preference_button"} tabIndex={0} type={"button"}>
						<span className={"Button_label"}>
							<svg className={"SvgIcon_root"} focusable={"false"} viewBox={"0 0 24 24"} aria-hidden={"true"} aria-label={"Preferences"}>
								<path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"></path>
							</svg>
						</span>
					</button>
					<button className={"Button Button Button_contained Button_contained-primary hidden-xsDown"} tabIndex={0} type={"button"} style={{marginLeft:8}}>
						<span className={"Button_label"}>Log In</span>
					</button>
					<div></div>
				</div>
			</nav>
		)
	}
}

export default NavBar;