import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleCocktail from './pages/SingleCoctail'
import Error from './pages/Error'
// import components
import Navbar from './Components/Navbar'

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/CocktailsDB_React_SPA">  <Home /> </Route>   {/* for Github Pages*/}
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route>
        <Route path="/cocktail/:id"> <SingleCocktail /> </Route>
        <Route path="*"> <Error /> </Route>
      </Switch>
    </Router>
  )
}

export default App
