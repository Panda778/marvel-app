import './App.css'
import HomePage from './pages/home-page/home-page'
import FilmPage from './pages/film-page/film-page'
import FavouritePage from './pages/favourite-page/favourite-page'
import AboutPage from './pages/about-page/about-page'
import Layout from './hoc/layout'
import { Route, Redirect, Switch } from 'react-router-dom'
function App() {
	return (
		<Layout>
			<Switch>
				<Route path={'/'} component={HomePage} exact={true} />
				<Route path={'/about'} component={AboutPage} />
				<Route path={'/favourite'} component={FavouritePage} />
				<Route path={'/film/:id'} component={FilmPage} />


				<Redirect to={'/'} />
			</Switch>
		</Layout>
	)
}

export default App
