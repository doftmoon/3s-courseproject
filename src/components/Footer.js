import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer className={"Footer"}>
				<div className={"Footer_footer Footer_con Footer_footer2 grid-container slim"}>
					<div className="Footer_container Footer_fr__OgTKW grid-item">
						<Link title="Manga" to="/">
							<h4 className="Typography_h4 mb-2">Manga</h4>
						</Link>
						<h1 className="Typography_body1" style={{display:"none"}}>Read manga online</h1>
						<p className="Typography_body2 Typography_color-textSecondary mb-2">Always ready to aswer</p>
						<a href="https://belstu.by/" className="hoverLink" title="Ask question" target="_blank" rel="noreferrer">Ask question</a>
						<p className="Typography_body1 Typography_color-textSecondary mt-4 caption">Mail to contact:
							<br/><a className="Typography_body1 Typography_color-textPrimary p-0 m-0 link" href="mailto:contact@manga.doft">contact@manga.doft</a></p>
						<p className="Typography_caption Typography_color-textSecondary mt-4 hidden sm:block">Babarukin Artem</p>
					</div>
					<div className="Footer_container Footer_fp grid-item">
						<h6 className="Typography_h6 mb-4 uppercase">SECTIONS</h6>
						<p
							className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="RULES" to="/footer_template">RULES</Link>
						</p>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="DMCA" to="/footer_template">DMCA</Link>
						</p>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="COPYRIGHT" to="/footer_template">COPYRIGHT</Link>
						</p>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="ABOUT" to="/footer_template">ABOUT</Link>
						</p>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="VACANCY" to="/footer_template">VACANCY</Link>
						</p>
					</div>
					<div className="Footer_container Footer_fi grid-item">
						<h6 className="Typography_h6 mb-4 uppercase">INFO</h6>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="TERMS OF USE" to="/footer_template">TERMS OF USE</Link>
						</p>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="AGENCY CONTRACT" to="/footer_template">AGENCY CONTRACT</Link>
						</p>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="PRIVACY" to="/footer_template">PRIVACY AGREEMENT</Link>
						</p>
						<p className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="MOBILE APP" to="/footer_template">MOBILE APP</Link>
						</p>
						<p
							className="Typography_caption Typography_color-textSecondary Typography_paragraph hoverLink">
							<Link title="FAQ" to="/footer_template">FAQ</Link>
						</p>
					</div>
					<div className={"Footer_container Footer_fs grid-item"}></div>
				</div>
			</footer>
		)
	}
}

export default Footer;