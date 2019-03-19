import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/functional/scrollToTop.jsx";

import { Home } from "./views/home.jsx";
import { Events } from "./views/events.jsx";
import { Event } from "./views/event.jsx";
import Store from "./store/appContext.jsx";

import { Navbar } from "./component/navbar.jsx";
import { Footer } from "./component/footer.jsx";
//create your first component
export class Layout extends React.Component {
	render() {
		return (
			<div className="d-flex flex-row">
				<div className="d-flex flex-column w-100">
					<BrowserRouter>
						<ScrollToTop>
							<Navbar />
							<Switch>
								<Route exact path="/" component={Events} />
								<Route path="/events" component={Events} />
								<Route path="/event/:theid" component={Event} />
								<Route render={() => <h1>Not found!</h1>} />
							</Switch>
							<Footer />
						</ScrollToTop>
					</BrowserRouter>
				</div>
			</div>
		);
	}
}

export default Store(Layout);
