import React from "react";
import {Link} from "react-router-dom";

class Footer extends React.Component {
	render() {
		return (
			<footer className={"Footer"}>
				<div className={"jsx-1025e0387f6b8ad7 jsx-a32c8b4abb10806f jsx-3304264316 grid-container slim"}>
					<div className="jsx-2646878052 Footer_fr__OgTKW grid-item">
						<Link title="ReManga" to="/">
							<h4 className="Typography_h4__PdogT mb-2">Manga</h4>
						</Link>
						<h1 className="Typography_body1__YTqxB" style={{display:"none"}}>Читать мангу онлайн</h1>
						<p className="Typography_body2__piveF Typography_color-textSecondary__iFFB7 mb-2">Всегда готовы ответить на вопросы</p>
						<a href="https://vk.com/" className="hoverLink" title="Задать вопрос" target="_blank" rel="noreferrer">Задать вопрос</a>
						<p className="Typography_body1__YTqxB Typography_color-textSecondary__iFFB7 mt-4 caption">Почта для связи:
							<br/><a className="Typography_body1__YTqxB Typography_color-textPrimary__Qy1D6 p-0 m-0 link" href="mailto:contact@manga.org">contact@remanga.org</a></p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 mt-4 hidden sm:block">Babarukin Artem</p>
					</div>
					<div className="jsx-2646878052 Footer_fp__9ibj_ grid-item">
						<h6 className="Typography_h6__VMBDX mb-4 uppercase">Разделы</h6>
						<p
							className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="ПРАВИЛА САЙТА" to="/rules">ПРАВИЛА САЙТА</Link>
						</p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="DMCA" to="/dmca">DMCA</Link>
						</p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="АВТОРСКОЕ ПРАВО" to="/copyright">АВТОРСКОЕ ПРАВО</Link>
						</p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="О НАС" to="/about-us">О НАС</Link>
						</p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="ВАКАНСИИ" to="/vacancy">ВАКАНСИИ</Link>
						</p>
					</div>
					<div className="jsx-2646878052 Footer_fi__zxnbq grid-item">
						<h6 className="Typography_h6__VMBDX mb-4 uppercase">Инфо</h6>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ" to="/terms-of-use">ПОЛЬЗОВАТЕЛЬСКОЕ СОГЛАШЕНИЕ</Link>
						</p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="АГЕНТСКИЙ ДОГОВОР" to="/agency-contract">АГЕНТСКИЙ ДОГОВОР</Link>
						</p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="СОГЛАШЕНИЕ О КОНФИДЕНЦИАЛЬНОСТИ" to="/confidentiality-agreement">СОГЛАШЕНИЕ О КОНФИДЕНЦИАЛЬНОСТИ</Link>
						</p>
						<p className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="МОБИЛЬНОЕ ПРИЛОЖЕНИЕ" to="/mobile-app">МОБИЛЬНОЕ ПРИЛОЖЕНИЕ</Link>
						</p>
						<p
							className="Typography_caption___iNir Typography_color-textSecondary__iFFB7 Typography_paragraph__0uo0K hoverLink">
							<Link title="FAQ" to="/faq">FAQ</Link>
						</p>
					</div>
					<div className={"jsx-2646878052 Footer_fs__CTkcH grid-item"}></div>
				</div>
			</footer>
		)
	}
}

export default Footer;