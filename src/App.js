import React from "react";
import "./App.scss";
import { Navbar, SocialMedia } from "./components";
import { About, Footer, Header, Skills, Work } from "./container";

const App = () => {
	return (
		<div className="app">
			<SocialMedia />
			<Navbar />
			<Header />
			<About />
			<Skills />
			<Work />
			<Footer />
			<div className="copyright">
				<p className="p-text">&copy; '22 ABARA</p>
			</div>
		</div>
	);
}

export default App;