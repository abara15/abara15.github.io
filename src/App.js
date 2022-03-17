import React from "react";
import "./App.scss";
import { Divider, Navbar, SocialMedia } from "./components";
import { About, Footer, Header, Skills, Work } from "./container";

const App = () => {
	return (
		<div className="app">
			<SocialMedia />
			<Navbar />
			<Header />
			<About />
			<Divider />
			<Skills />
			<Divider />
			<Work />
			<Divider />
			<Footer />
			<div className="copyright">
				<p className="p-text">&copy; '22 ABARA</p>
			</div>
		</div>
	);
}

export default App;